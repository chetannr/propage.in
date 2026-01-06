#!/usr/bin/env python3
"""
Analyze production-ready page sizes for propage.in website.
Calculates total size including HTML, JS, CSS, and all assets.
"""

import os
import re
from pathlib import Path
from collections import defaultdict

def get_file_size(file_path):
    """Get file size in bytes."""
    try:
        return os.path.getsize(file_path)
    except:
        return 0

def format_size(bytes_size):
    """Format bytes to human readable format."""
    for unit in ['B', 'KB', 'MB']:
        if bytes_size < 1024.0:
            return f"{bytes_size:.1f} {unit}"
        bytes_size /= 1024.0
    return f"{bytes_size:.1f} GB"

def analyze_html_file(html_path):
    """Extract all asset references from HTML file."""
    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return set()
    
    assets = set()
    
    # Find all script src
    script_pattern = r'<script[^>]+src=["\']([^"\']+)["\']'
    for match in re.finditer(script_pattern, content):
        assets.add(match.group(1))
    
    # Find all link href (CSS, images, etc.)
    link_pattern = r'<link[^>]+href=["\']([^"\']+)["\']'
    for match in re.finditer(link_pattern, content):
        assets.add(match.group(1))
    
    # Find all img src
    img_pattern = r'<img[^>]+src=["\']([^"\']+)["\']'
    for match in re.finditer(img_pattern, content):
        assets.add(match.group(1))
    
    # Find preload href
    preload_pattern = r'preload[^>]+href=["\']([^"\']+)["\']'
    for match in re.finditer(preload_pattern, content):
        assets.add(match.group(1))
    
    return assets

def resolve_asset_path(asset_path, html_dir):
    """Resolve asset path relative to HTML file location."""
    # Remove leading slash
    if asset_path.startswith('/'):
        asset_path = asset_path[1:]
    
    # Try relative to HTML file first
    full_path = html_dir / asset_path
    if full_path.exists():
        return full_path
    
    # Try from out root
    out_root = html_dir.parent if html_dir.name != 'out' else html_dir
    full_path = out_root / asset_path
    if full_path.exists():
        return full_path
    
    return None

def analyze_page(page_path, out_dir):
    """Analyze a single page and return size breakdown."""
    # Determine HTML file path
    if page_path == '/':
        html_file = out_dir / 'index.html'
    else:
        html_file = out_dir / f"{page_path.lstrip('/')}.html"
    
    if not html_file.exists():
        return None
    
    html_dir = html_file.parent
    html_size = get_file_size(html_file)
    
    # Extract assets from HTML
    assets = analyze_html_file(html_file)
    
    # Categorize and calculate sizes
    js_size = 0
    css_size = 0
    image_size = 0
    other_size = 0
    
    # Common assets that are loaded on every page
    common_assets = {
        '/propage-favicon.png',
        '/LogoIcon16x16.svg',
        '/LogoIcon512x512.svg',
        '/site.webmanifest',
        '/favicon.ico',
    }
    
    for asset in assets:
        # Skip external URLs
        if asset.startswith('http://') or asset.startswith('https://'):
            continue
        
        resolved = resolve_asset_path(asset, html_dir)
        if resolved and resolved.exists():
            size = get_file_size(resolved)
            
            if asset.endswith('.js'):
                js_size += size
            elif asset.endswith('.css'):
                css_size += size
            elif asset.endswith(('.png', '.jpg', '.jpeg', '.svg', '.webp', '.ico')):
                image_size += size
            else:
                other_size += size
    
    # Add common assets (favicon, manifest, etc.) - only count once per page
    for common_asset in common_assets:
        resolved = resolve_asset_path(common_asset, html_dir)
        if resolved and resolved.exists():
            size = get_file_size(resolved)
            if common_asset.endswith(('.png', '.svg', '.ico')):
                image_size += size
            else:
                other_size += size
    
    total_size = html_size + js_size + css_size + image_size + other_size
    
    return {
        'html': html_size,
        'js': js_size,
        'css': css_size,
        'images': image_size,
        'other': other_size,
        'total': total_size
    }

def main():
    out_dir = Path('out')
    
    # Find all pages
    pages = []
    for html_file in out_dir.rglob('*.html'):
        if html_file.name in ['404.html', '_not-found.html']:
            continue
        rel_path = html_file.relative_to(out_dir)
        page_path = str(rel_path).replace('.html', '') or '/'
        if page_path not in pages:
            pages.append(page_path)
    
    pages = sorted(pages)
    
    # Analyze each page
    results = []
    for page in pages:
        analysis = analyze_page(page, out_dir)
        if analysis:
            results.append((page, analysis))
    
    # Print table
    print("\n" + "="*100)
    print("PRODUCTION-READY PAGE SIZES (Including All Assets)")
    print("="*100)
    print(f"\n{'Page':<40} {'HTML':<12} {'JS':<12} {'CSS':<12} {'Images':<12} {'Other':<12} {'Total':<12}")
    print("-" * 100)
    
    grand_total = 0
    for page, sizes in results:
        page_display = page if page != '/' else '/ (Home)'
        print(f"{page_display:<40} "
              f"{format_size(sizes['html']):<12} "
              f"{format_size(sizes['js']):<12} "
              f"{format_size(sizes['css']):<12} "
              f"{format_size(sizes['images']):<12} "
              f"{format_size(sizes['other']):<12} "
              f"{format_size(sizes['total']):<12}")
        grand_total += sizes['total']
    
    print("-" * 100)
    print(f"{'TOTAL (All Pages)':<40} {'':<60} {format_size(grand_total):<12}")
    print("\n" + "="*100)
    print("\nNote: Sizes include HTML, JavaScript, CSS, images, and other assets loaded by each page.")
    print("External resources (Google Analytics, etc.) are not included in these calculations.")
    print("="*100 + "\n")

if __name__ == '__main__':
    main()

