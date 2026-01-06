# ProPage.in Tech Stack & Infrastructure Plan

**Generated Date**: Current Session  
**Company**: propage.in  
**Purpose**: Comprehensive technology stack and infrastructure plan for static website hosting platform with form handling

---

## Executive Summary

This plan outlines the recommended technology stack and infrastructure for propage.in, a SaaS platform for creating and hosting static websites with form handling capabilities. The architecture prioritizes cost-effectiveness, scalability, data portability, and AI-driven development using Cursor AI.

**Key Decisions**:
- **Backend**: Go (Golang) - Best performance, scalability, and resource efficiency
- **Web Server**: Nginx - Industry standard for static files and reverse proxy
- **Hosting**: DigitalOcean (primary) with AWS as backup option
- **Databases**: MongoDB Atlas (managed) + PostgreSQL (managed)
- **Architecture**: Monolithic backend with microservices-ready design

---

## 1. Backend Language Decision

### Recommendation: **Go (Golang)**

### Comparison Matrix

| Criteria | Go | Rust | Python | Node.js |
|----------|----|----|--------|---------|
| **Performance** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good | ⭐⭐⭐⭐ Very Good |
| **Concurrency** | ⭐⭐⭐⭐⭐ Native goroutines | ⭐⭐⭐⭐ Async/await | ⭐⭐⭐ GIL limitations | ⭐⭐⭐⭐⭐ Event loop |
| **Resource Efficiency** | ⭐⭐⭐⭐⭐ Low memory | ⭐⭐⭐⭐⭐ Low memory | ⭐⭐ Higher memory | ⭐⭐⭐ Moderate |
| **Development Speed** | ⭐⭐⭐⭐ Fast | ⭐⭐ Slower | ⭐⭐⭐⭐⭐ Fastest | ⭐⭐⭐⭐⭐ Fast |
| **Payment Gateway SDKs** | ⭐⭐⭐⭐ Good | ⭐⭐ Limited | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent |
| **AI Code Generation** | ⭐⭐⭐⭐ Good | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent |
| **Scalability** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good | ⭐⭐⭐⭐ Very Good |
| **Cost Efficiency** | ⭐⭐⭐⭐⭐ Best | ⭐⭐⭐⭐⭐ Best | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐ Good |
| **Learning Curve** | ⭐⭐⭐ Moderate | ⭐⭐ Steep | ⭐⭐⭐⭐⭐ Easy | ⭐⭐⭐⭐⭐ Easy |

### Why Go Wins

1. **Performance & Resource Efficiency**
   - Compiled language with excellent performance
   - Low memory footprint (critical for cost)
   - Handles concurrent form submissions efficiently
   - Single binary deployment (no runtime dependencies)

2. **Scalability**
   - Native goroutines handle thousands of concurrent requests
   - Perfect for traffic spikes (1-2 high-traffic sites)
   - Horizontal scaling is straightforward

3. **Cost Efficiency**
   - Lower server costs due to resource efficiency
   - Can run more instances on same hardware
   - Reduced infrastructure costs over time

4. **Payment Gateway Support**
   - Official SDKs available for Razorpay, Stripe, PayPal
   - Good community support
   - Well-documented APIs

5. **AI Code Generation**
   - Go is well-supported by Cursor AI
   - Clear, readable code patterns
   - Good documentation generation

6. **Future-Proof**
   - Growing ecosystem
   - Strong industry adoption
   - Active development

### Alternative Consideration: Node.js
- **If chosen**: Better for rapid development, larger ecosystem
- **Trade-off**: Higher resource usage, slightly higher costs
- **Verdict**: Go is better for long-term cost and performance

---

## 2. Web Server Decision

### Recommendation: **Nginx**

### Comparison

| Feature | Nginx | Apache Tomcat | Caddy |
|---------|-------|--------------|-------|
| **Static File Serving** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Reverse Proxy** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Performance** | ⭐⭐⭐⭐⭐ Best | ⭐⭐⭐ Good | ⭐⭐⭐⭐ Very Good |
| **Resource Usage** | ⭐⭐⭐⭐⭐ Low | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐ Low |
| **SSL/TLS** | ⭐⭐⭐⭐ Good | ⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Auto |
| **Configuration** | ⭐⭐⭐⭐ Clear | ⭐⭐ Complex | ⭐⭐⭐⭐⭐ Simple |
| **Cost** | ⭐⭐⭐⭐⭐ Free | ⭐⭐⭐⭐⭐ Free | ⭐⭐⭐⭐⭐ Free |
| **Load Balancing** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good | ⭐⭐⭐⭐ Good |

### Why Nginx

1. **Industry Standard**
   - Most widely used for static file serving
   - Excellent documentation and community
   - Proven at scale

2. **Performance**
   - Handles thousands of concurrent connections
   - Low memory footprint
   - Efficient static file serving

3. **Reverse Proxy**
   - Perfect for routing to Go backend
   - Load balancing built-in
   - SSL termination

4. **Configuration**
   - Clear, readable config files
   - Easy to automate
   - Well-documented

5. **Cost**
   - Open source, free
   - No licensing costs

### Configuration Pattern
```nginx
# Static files
location / {
    root /var/www/websites;
    try_files $uri $uri/ =404;
}

# Backend API
location /api/ {
    proxy_pass http://localhost:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

---

## 3. Hosting Provider Decision

### Recommendation: **DigitalOcean** (Primary) with **AWS** (Backup/Migration Option)

### Comparison Matrix

| Provider | Cost (Start) | Cost (Scale) | Ease of Use | Migration | Managed Services |
|----------|--------------|--------------|-------------|-----------|-------------------|
| **DigitalOcean** | ⭐⭐⭐⭐⭐ $12/mo | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Easy | ⭐⭐⭐⭐ Easy | ⭐⭐⭐ Moderate |
| **AWS** | ⭐⭐⭐ $50+/mo | ⭐⭐⭐⭐ Good | ⭐⭐ Complex | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐⭐ Excellent |
| **Google Cloud** | ⭐⭐⭐ $30+/mo | ⭐⭐⭐⭐ Good | ⭐⭐⭐ Moderate | ⭐⭐⭐ Moderate | ⭐⭐⭐⭐⭐ Excellent |
| **Vultr** | ⭐⭐⭐⭐⭐ $6/mo | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Easy | ⭐⭐⭐⭐ Easy | ⭐⭐ Limited |
| **Hetzner** | ⭐⭐⭐⭐⭐ €4/mo | ⭐⭐⭐⭐⭐ Best | ⭐⭐⭐⭐ Good | ⭐⭐⭐ Moderate | ⭐⭐ Limited |

### Why DigitalOcean

1. **Cost-Effectiveness**
   - **Day 1**: $12/month (1 Droplet, 1GB RAM)
   - **Month 4**: ~$50/month (scaled infrastructure)
   - **Year 1**: ~$200/month (2000 websites capacity)
   - Predictable pricing, no hidden costs

2. **Ease of Use**
   - Simple interface
   - Clear documentation
   - Easy to scale up/down
   - Good for small teams

3. **Migration Ease**
   - Standard Linux VPS
   - Easy to export/import
   - No vendor lock-in
   - Can migrate to AWS/Azure easily

4. **Managed Services**
   - Managed PostgreSQL available
   - Managed MongoDB (via MongoDB Atlas)
   - Load balancers available
   - Managed databases reduce ops overhead

5. **Performance**
   - Good network performance
   - SSD storage
   - Multiple data center locations

### Infrastructure Setup (Day 1)

```
DigitalOcean Setup:
├── 1x Droplet (Basic, $12/mo)
│   ├── 1GB RAM
│   ├── 1 vCPU
│   ├── 25GB SSD
│   └── Ubuntu 22.04 LTS
│
├── Managed PostgreSQL ($15/mo)
│   └── 1GB RAM, 10GB storage
│
└── MongoDB Atlas (Free tier)
    └── M0 cluster (512MB RAM)
```

**Total Day 1 Cost**: ~$27/month

### Scaling Plan

**Month 4 (60 websites)**:
```
├── 2x Droplets ($24/mo)
│   └── Load balanced
│
├── Managed PostgreSQL ($30/mo)
│   └── 2GB RAM, 25GB storage
│
└── MongoDB Atlas ($9/mo)
    └── M10 cluster (2GB RAM)
```

**Total Month 4 Cost**: ~$63/month

**Year 1 (200-300 websites)**:
```
├── 4x Droplets ($48/mo)
│   └── Auto-scaling group
│
├── Managed PostgreSQL ($60/mo)
│   └── 4GB RAM, 50GB storage
│
├── MongoDB Atlas ($57/mo)
│   └── M30 cluster (8GB RAM)
│
└── Load Balancer ($12/mo)
```

**Total Year 1 Cost**: ~$177/month

**Year 2 (2000 websites target)**:
```
├── 8x Droplets ($96/mo)
│   └── Auto-scaling group
│
├── Managed PostgreSQL ($120/mo)
│   └── 8GB RAM, 100GB storage
│
├── MongoDB Atlas ($200/mo)
│   └── M50 cluster (16GB RAM)
│
└── Load Balancer ($12/mo)
```

**Total Year 2 Cost**: ~$428/month

### AWS as Backup/Migration Target

- Use AWS if DigitalOcean doesn't meet needs
- Similar architecture possible
- Data migration tools available
- Managed services (RDS, DocumentDB) available

---

## 4. Database Architecture

### Dual Database Strategy

#### MongoDB (NoSQL) - Form Submissions
**Provider**: MongoDB Atlas (Managed)

**Why Managed**:
- Automatic backups
- Scaling handled automatically
- Security built-in
- No ops overhead

**Schema Pattern**:
```javascript
// Collection: form_submissions_{website_id}
{
  "_id": ObjectId,
  "form_id": "contact-form-1",
  "website_id": "website-123",
  "submitted_at": ISODate,
  "data": {
    // Dynamic structure based on form
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello..."
  },
  "metadata": {
    "ip_address": "192.168.1.1",
    "user_agent": "Mozilla/5.0...",
    "referrer": "https://example.com/contact"
  }
}
```

**Indexing Strategy**:
- Index on `website_id` + `submitted_at` (for console queries)
- Index on `form_id` (for form-specific queries)
- TTL index on `submitted_at` (optional, for data retention)

#### PostgreSQL (SQL) - Relational Data
**Provider**: DigitalOcean Managed PostgreSQL

**Schema Design**:

```sql
-- Customers table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'active'
);

-- Websites table
CREATE TABLE websites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_id UUID REFERENCES customers(id),
    domain VARCHAR(255) UNIQUE NOT NULL,
    subdomain VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'active'
);

-- Forms table
CREATE TABLE forms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    website_id UUID REFERENCES websites(id),
    form_name VARCHAR(255) NOT NULL,
    form_schema JSONB NOT NULL, -- Form field definitions
    mongodb_collection VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Form submissions metadata (links to MongoDB)
CREATE TABLE form_submissions_metadata (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_id UUID REFERENCES forms(id),
    website_id UUID REFERENCES websites(id),
    mongodb_id VARCHAR(255) NOT NULL, -- MongoDB ObjectId
    submitted_at TIMESTAMP NOT NULL,
    data_size INTEGER, -- Size in bytes
    INDEX idx_website_submitted (website_id, submitted_at),
    INDEX idx_form_submitted (form_id, submitted_at)
);

-- Usage metrics table
CREATE TABLE usage_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    website_id UUID REFERENCES websites(id),
    metric_date DATE NOT NULL,
    bandwidth_bytes BIGINT DEFAULT 0,
    requests_count INTEGER DEFAULT 0,
    form_submissions_count INTEGER DEFAULT 0,
    storage_bytes BIGINT DEFAULT 0,
    UNIQUE(website_id, metric_date),
    INDEX idx_website_date (website_id, metric_date)
);

-- Billing records
CREATE TABLE billing_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_id UUID REFERENCES customers(id),
    billing_period_start DATE NOT NULL,
    billing_period_end DATE NOT NULL,
    total_bandwidth_bytes BIGINT DEFAULT 0,
    total_requests INTEGER DEFAULT 0,
    total_form_submissions INTEGER DEFAULT 0,
    total_storage_bytes BIGINT DEFAULT 0,
    amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW(),
    INDEX idx_customer_period (customer_id, billing_period_start)
);
```

### Database Migration Strategy

**MongoDB**:
- Use `mongodump` and `mongorestore`
- Export collections per website
- Import to new provider
- **Time**: ~2-4 hours for full migration

**PostgreSQL**:
- Use `pg_dump` and `pg_restore`
- Standard SQL export/import
- **Time**: ~1-2 hours for full migration

**Automation**:
- Create migration scripts
- Test on staging first
- Document process

---

## 5. System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Browsers                       │
└───────────────────────┬─────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                    Nginx (Load Balancer)                     │
│  - Static file serving (HTML/CSS/JS)                        │
│  - SSL/TLS termination                                      │
│  - Reverse proxy to Go backend                              │
└───────────────┬───────────────────────┬─────────────────────┘
                │                       │
                ▼                       ▼
    ┌───────────────────┐   ┌───────────────────┐
    │  Static Files     │   │  Go Backend API   │
    │  (HTML/CSS/JS)    │   │  (Port 8080)      │
    │  /var/www/websites│   │  - Form handling  │
    └───────────────────┘   │  - Payment APIs   │
                            │  - Console APIs   │
                            └─────────┬─────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    ▼                 ▼                 ▼
        ┌──────────────────┐ ┌──────────────┐ ┌──────────────┐
        │  PostgreSQL      │ │  MongoDB     │ │  Redis       │
        │  (Relational)    │ │  (Form Data) │ │  (Cache)     │
        │  - Customers     │ │  - Submissions│ │  - Sessions  │
        │  - Websites      │ │              │ │  - Rate Limit│
        │  - Forms         │ │              │ │              │
        │  - Usage Metrics │ │              │ │              │
        └──────────────────┘ └──────────────┘ └──────────────┘
```

### Component Details

#### 1. Static File Serving (Nginx)
- **Location**: `/var/www/websites/{customer_id}/{website_id}/`
- **Structure**: Standard HTML/CSS/JS files
- **CDN**: Optional (Cloudflare for global distribution)
- **Caching**: Browser cache + Nginx cache

#### 2. Go Backend API
- **Port**: 8080 (internal)
- **Endpoints**:
  - `POST /api/v1/forms/submit` - Form submission handler
  - `GET /api/v1/console/admin/*` - Admin console APIs
  - `GET /api/v1/console/client/*` - Client console APIs
  - `POST /api/v1/payments/*` - Payment gateway webhooks
  - `GET /api/v1/usage/*` - Usage metrics APIs

#### 3. Database Layer
- **PostgreSQL**: All relational data
- **MongoDB**: Form submission data (dynamic schema)
- **Redis**: Caching and session management

### Request Flow

**Static Website Request**:
```
Browser → Nginx → Static Files (HTML/CSS/JS) → Browser
```

**Form Submission**:
```
Browser → Nginx → Go Backend → Validate → 
  → Save to MongoDB (form data) →
  → Save metadata to PostgreSQL →
  → Update usage metrics →
  → Return response to browser
```

**Console Access**:
```
Browser → Nginx → Go Backend → Authenticate →
  → Query PostgreSQL (metadata) →
  → Query MongoDB (form data if needed) →
  → Return JSON → Browser renders
```

---

## 6. API Design

### Form Submission API

```go
// POST /api/v1/forms/submit
type FormSubmissionRequest struct {
    WebsiteID string                 `json:"website_id"`
    FormID   string                 `json:"form_id"`
    Data     map[string]interface{} `json:"data"` // Dynamic structure
}

type FormSubmissionResponse struct {
    Success   bool   `json:"success"`
    Message   string `json:"message"`
    SubmissionID string `json:"submission_id,omitempty"`
}
```

### Console APIs

```go
// Admin Console
GET  /api/v1/console/admin/customers
GET  /api/v1/console/admin/websites
GET  /api/v1/console/admin/usage/{website_id}
GET  /api/v1/console/admin/billing/{customer_id}

// Client Console
GET  /api/v1/console/client/websites
GET  /api/v1/console/client/forms/{website_id}
GET  /api/v1/console/client/submissions/{form_id}
GET  /api/v1/console/client/usage
```

### Payment Gateway Webhooks

```go
// POST /api/v1/payments/razorpay/webhook
// POST /api/v1/payments/stripe/webhook
// POST /api/v1/payments/paypal/webhook
```

---

## 7. Scaling Strategy

### Horizontal Scaling

**Phase 1 (Day 1 - Month 4)**: Single server
- 1 Droplet handles all traffic
- Nginx + Go backend on same server
- Sufficient for initial load

**Phase 2 (Month 4 - Year 1)**: Load balanced
- 2-4 Droplets behind load balancer
- Nginx on each droplet for static files
- Go backend on each droplet
- Session stored in Redis (shared)

**Phase 3 (Year 1+)**: Auto-scaling
- Auto-scaling group (4-8 Droplets)
- Load balancer distributes traffic
- Database connection pooling
- Redis cluster for sessions

### Traffic Spike Handling

**Problem**: 1-2 websites with high traffic

**Solution**:
1. **CDN**: Cloudflare in front of Nginx
   - Caches static files globally
   - Reduces origin server load
   - Free tier sufficient initially

2. **Rate Limiting**: Per website
   - Redis-based rate limiting
   - Prevents abuse
   - Protects backend

3. **Database Optimization**:
   - Read replicas for PostgreSQL
   - MongoDB sharding (if needed)
   - Connection pooling

4. **Caching**:
   - Redis cache for frequently accessed data
   - Nginx cache for static files
   - Browser cache headers

### Cost Optimization

- **Start Small**: Minimal infrastructure Day 1
- **Scale Gradually**: Add resources as needed
- **Monitor Usage**: Track actual usage vs provisioned
- **Right-Size**: Adjust Droplet sizes based on metrics
- **Reserved Instances**: Consider for predictable workloads

---

## 8. Security Implementation

### Form Submission Security

1. **CSRF Protection**: Token-based validation
2. **Rate Limiting**: Per IP, per website
3. **Input Validation**: Sanitize all inputs
4. **HTTPS Only**: All traffic encrypted
5. **Data Encryption**: Sensitive data encrypted at rest

### Payment Gateway Security

1. **Webhook Verification**: Verify signatures from gateways
2. **Idempotency**: Prevent duplicate processing
3. **PCI Compliance**: No card data storage
4. **Secure API Keys**: Environment variables, encrypted storage

### Console Security

1. **Authentication**: JWT tokens
2. **Authorization**: Role-based access (admin vs client)
3. **Session Management**: Redis-based, secure cookies
4. **API Rate Limiting**: Prevent abuse

### Infrastructure Security

1. **Firewall**: Only necessary ports open
2. **SSH Keys**: No password authentication
3. **Regular Updates**: Automated security patches
4. **Backup Encryption**: Encrypted backups
5. **Monitoring**: Log all access attempts

---

## 9. Monitoring & Billing System

### Usage Tracking

**Metrics Collected**:
- Bandwidth per website (bytes transferred)
- Request count per website
- Form submission count per website
- Storage used per website (MongoDB)

**Implementation**:
```go
// Middleware to track usage
func UsageTrackingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // Track bandwidth
        // Track request count
        // Update usage_metrics table
        next.ServeHTTP(w, r)
    })
}
```

**Storage**:
- Daily aggregation in `usage_metrics` table
- Real-time tracking in Redis
- Periodic sync to PostgreSQL

### Billing System

**Billing Model**:
- Base fee per website (optional)
- Usage-based charges:
  - Bandwidth: $X per GB
  - Requests: $Y per 1000 requests
  - Form submissions: $Z per submission
  - Storage: $W per GB

**Billing Process**:
1. Daily aggregation of usage metrics
2. Monthly billing cycle
3. Generate invoice from `billing_records` table
4. Integration with payment gateways for collection

**Console Display**:
- Real-time usage dashboard
- Historical usage charts
- Billing history
- Invoice download

---

## 10. Data Migration Plan

### Migration Strategy

**Goal**: Migrate entire infrastructure to different provider within 24 hours

**Preparation**:
1. **Documentation**: Complete architecture documentation
2. **Scripts**: Automated deployment scripts
3. **Backups**: Regular automated backups
4. **Testing**: Test migration on staging environment

**Migration Steps**:

1. **Pre-Migration** (Ongoing):
   - Daily backups of all databases
   - Version control for all code
   - Infrastructure as Code (Terraform/Ansible)

2. **Migration Execution**:
   ```
   Step 1: Provision new infrastructure (2-4 hours)
   Step 2: Restore databases (1-2 hours)
   Step 3: Deploy application code (30 minutes)
   Step 4: Update DNS (propagation time)
   Step 5: Verify functionality (1 hour)
   Step 6: Switch traffic (5 minutes)
   ```

3. **Post-Migration**:
   - Monitor for 24 hours
   - Keep old infrastructure for 7 days
   - Final verification

**Tools**:
- **Terraform**: Infrastructure as Code
- **Ansible**: Configuration management
- **Database dumps**: Standard SQL/MongoDB exports
- **Git**: Code version control

---

## 11. Development Workflow with Cursor AI

### Prompt Strategy

1. **Planning Prompts**: Use TECH_STACK_PLAN_PROMPT.md
2. **Code Generation**: Generate code from prompts
3. **Documentation**: Document all decisions
4. **Templates**: Create reusable code templates

### Code Generation Pattern

**Step 1**: Generate API endpoint prompt
```
Generate a Go HTTP handler for form submission that:
- Validates website_id and form_id
- Saves form data to MongoDB
- Saves metadata to PostgreSQL
- Updates usage metrics
- Returns JSON response
```

**Step 2**: Generate database schema prompt
```
Generate PostgreSQL migration for usage_metrics table with:
- website_id (UUID, foreign key)
- metric_date (DATE)
- bandwidth_bytes (BIGINT)
- requests_count (INTEGER)
- form_submissions_count (INTEGER)
- Unique constraint on (website_id, metric_date)
```

**Step 3**: Generate frontend prompt
```
Generate vanilla JavaScript form submission handler that:
- Validates form fields
- Sends POST request to /api/v1/forms/submit
- Shows success/error messages
- No dependencies, pure JavaScript
```

### Documentation Requirements

- All prompts saved
- All code generated documented
- Architecture decisions documented
- API documentation (OpenAPI/Swagger)
- Deployment procedures documented

---

## 12. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Set up DigitalOcean infrastructure
- [ ] Configure Nginx
- [ ] Set up PostgreSQL (managed)
- [ ] Set up MongoDB Atlas
- [ ] Deploy Go backend (basic)
- [ ] Create database schemas
- [ ] Set up basic monitoring

### Phase 2: Core Features (Week 3-4)
- [ ] Form submission API
- [ ] MongoDB integration
- [ ] PostgreSQL integration
- [ ] Basic authentication
- [ ] Admin console (basic)
- [ ] Client console (basic)

### Phase 3: Payment Integration (Week 5-6)
- [ ] Razorpay integration
- [ ] Stripe integration
- [ ] PayPal integration
- [ ] Webhook handlers
- [ ] Payment testing

### Phase 4: Usage Tracking (Week 7-8)
- [ ] Usage metrics collection
- [ ] Usage dashboard
- [ ] Billing calculation
- [ ] Invoice generation

### Phase 5: Scaling & Optimization (Week 9-10)
- [ ] Load balancer setup
- [ ] Redis integration
- [ ] Caching strategy
- [ ] Performance optimization
- [ ] Security hardening

### Phase 6: Production Ready (Week 11-12)
- [ ] Complete testing
- [ ] Documentation
- [ ] Backup procedures
- [ ] Monitoring & alerting
- [ ] Migration procedures
- [ ] Launch preparation

---

## 13. Cost Analysis

### Infrastructure Costs (Monthly)

| Phase | Droplets | PostgreSQL | MongoDB | Load Balancer | Total |
|-------|----------|------------|---------|---------------|-------|
| **Day 1** | $12 | $15 | $0 (Free) | $0 | **$27** |
| **Month 4** | $24 | $30 | $9 | $0 | **$63** |
| **Year 1** | $48 | $60 | $57 | $12 | **$177** |
| **Year 2** | $96 | $120 | $200 | $12 | **$428** |

### Additional Costs

- **Domain**: $12/year per domain
- **SSL Certificates**: Free (Let's Encrypt)
- **CDN**: Free (Cloudflare free tier) or $20/month (Pro)
- **Monitoring**: Free (self-hosted) or $10/month (managed)
- **Backup Storage**: ~$5/month

### Revenue Model (Example)

**Per Website Pricing**:
- Base: $10/month per website
- Usage: 
  - Bandwidth: $0.10/GB
  - Requests: $0.01/1000
  - Form submissions: $0.05/submission

**Example Calculation** (60 websites, Month 4):
- Base: 60 × $10 = $600
- Usage: ~$50 (estimated)
- **Total Revenue**: ~$650/month
- **Infrastructure Cost**: $63/month
- **Profit Margin**: ~90%

---

## 14. Risk Assessment & Mitigation

### Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Traffic Spike** | High | Medium | Auto-scaling, CDN, caching |
| **Database Failure** | High | Low | Managed databases, backups |
| **Security Breach** | High | Low | Security best practices, monitoring |
| **Vendor Lock-in** | Medium | Low | Standard technologies, migration plan |
| **Cost Overrun** | Medium | Medium | Usage monitoring, right-sizing |

### Business Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Low Adoption** | High | Medium | Marketing, pricing strategy |
| **Competition** | Medium | High | Focus on quality, customer service |
| **Scaling Issues** | Medium | Low | Architecture designed for scale |

---

## 15. Success Metrics

### Technical Metrics
- ✅ Uptime: 99.9%+
- ✅ Form submission success rate: 99.9%+
- ✅ API response time: < 200ms (p95)
- ✅ Static file load time: < 2s
- ✅ Zero downtime during scaling

### Business Metrics
- ✅ Cost per website: < $1/month (infrastructure)
- ✅ Profit margin: > 80%
- ✅ Customer satisfaction: High
- ✅ Time to onboard: < 1 day

### Operational Metrics
- ✅ Deployment time: < 30 minutes
- ✅ Migration time: < 24 hours
- ✅ Incident response: < 1 hour
- ✅ Documentation completeness: 100%

---

## 16. Next Steps

### Immediate Actions

1. **Review & Approve Plan**
   - Review this plan with stakeholders
   - Get approval for tech stack decisions
   - Confirm budget allocation

2. **Set Up Infrastructure**
   - Create DigitalOcean account
   - Provision initial Droplet
   - Set up MongoDB Atlas
   - Set up PostgreSQL

3. **Start Development**
   - Set up Go development environment
   - Create project structure
   - Begin API development
   - Use Cursor AI for code generation

4. **Documentation**
   - Create development documentation
   - Document all prompts used
   - Create code templates
   - Set up version control

### Questions to Resolve

1. **Payment Gateway Priority**: Which gateway to implement first?
2. **Billing Model**: Confirm pricing structure
3. **Console Design**: UI/UX requirements for consoles
4. **Monitoring Tools**: Specific monitoring tool preferences
5. **Backup Strategy**: Backup frequency and retention

---

## Conclusion

This plan provides a comprehensive, cost-effective, and scalable architecture for propage.in. The recommended tech stack (Go + Nginx + DigitalOcean + MongoDB + PostgreSQL) balances performance, cost, and maintainability while supporting AI-driven development with Cursor AI.

**Key Strengths**:
- ✅ Cost-effective from Day 1
- ✅ Scales efficiently
- ✅ Data portability ensured
- ✅ AI-friendly development
- ✅ Production-ready architecture

**Ready to proceed with implementation.**

---

*Last Updated: Current Session*  
*Document Version: 1.0*

