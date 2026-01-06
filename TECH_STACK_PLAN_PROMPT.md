# ProPage.in Tech Stack & Infrastructure Planning Prompt

## Context
**Company**: propage.in  
**Mission**: Develop and host static websites with form handling capabilities  
**Business Model**: SaaS platform for website creation and hosting with usage-based billing

---

## Core Requirements

### Frontend Constraints (CRITICAL)
- **MUST USE**: HTML, CSS, JavaScript (vanilla) only
- **MUST NOT USE**: 
  - React.js or any JavaScript frameworks
  - Next.js or any SSR/SSG frameworks
  - Tailwind CSS or any CSS frameworks
  - Any npm packages or dependencies
- **Reasoning**: Code once, no package upgrades, AI-generated code maintenance
- **Output**: Static HTML files that can be served directly

### Backend Requirements
- **Primary Function**: Handle form submissions only
- **Scale Considerations**:
  - 2000 websites (target capacity)
  - 10-20 forms per website
  - Most websites: Low traffic
  - 1-2 websites: High traffic (must scale without downtime)
- **Performance**: Must handle traffic spikes for high-traffic sites
- **Reliability**: Zero downtime for client websites

### Payment Gateway Integration
- **Required Gateways**:
  - Razorpay
  - Stripe
  - PayPal
- **Integration Type**: Payment processing for client websites
- **Note**: Client websites are static, payment processing happens server-side

### Database Requirements

#### MongoDB (NoSQL)
- **Purpose**: Store form entry data
- **Reason**: Each form has different structure (dynamic schema)
- **Data**: Form submissions from all client websites
- **Access Pattern**: Write-heavy (form submissions), read for console views

#### SQL Database (Relational)
- **Purpose**: Store structured business data
- **Tables Required**:
  - `customers` - Client information
  - `websites` - Website metadata per client
  - `forms` - Form definitions and metadata
  - `form_submissions_metadata` - Links to MongoDB entries
  - `usage_metrics` - Bandwidth, traffic, storage per client
  - `billing` - Usage-based billing records
- **Access Pattern**: Read/write for admin operations, reporting

### Console Access
- **Admin Console**: `propage.in/console`
  - View all clients
  - View all websites
  - View usage metrics per client
  - Billing management
  - System administration

- **Client Console**: `{client-domain}/console`
  - View their own websites
  - View form submissions
  - View usage metrics
  - Billing information

### Infrastructure Requirements

#### Scalability
- **Day 1**: Few clients, minimal traffic
- **Months 1-4**: ~60 websites added
- **After Month 4**: 1-2 websites per month
- **Target**: Support 2000 websites
- **Traffic Pattern**: Mostly low traffic, occasional high-traffic spikes

#### Cost Optimization
- Start cost-effective (minimal initial investment)
- Scale costs with usage (pay-as-you-grow)
- Avoid over-provisioning early stage

#### Data Portability
- **CRITICAL**: Must be able to migrate data easily between hosting providers
- Avoid vendor lock-in
- Standard database formats
- Export/import capabilities

#### Monitoring & Billing
- Track bandwidth per client website
- Track storage per client
- Track API calls (form submissions)
- Generate usage reports for billing
- Usage-based billing system

#### Security
- Secure form submission handling
- Payment gateway security compliance
- Client data isolation
- Admin authentication
- Client authentication for console access

---

## Technology Stack Decisions Needed

### Backend Language
**Options**: GoLang vs Rust vs Python vs Node.js

**Considerations**:
- Performance for form handling
- Scalability for traffic spikes
- Development speed
- Ecosystem for payment gateways
- Resource efficiency (cost)
- AI code generation support (Cursor AI)
- Team expertise (if needed later)

### Web Server
**Options**: Nginx vs Apache Tomcat vs Other Suggestions

**Considerations**:
- Static file serving (HTML/CSS/JS)
- Reverse proxy capabilities
- Load balancing
- SSL/TLS termination
- Cost (open source preferred)
- Configuration complexity
- Performance

### Hosting Provider
**Options**: AWS, Google Cloud, Azure, DigitalOcean, Vultr, Hetzner, etc.

**Considerations**:
- Cost-effectiveness (start small, scale up)
- Data center locations (latency)
- Ease of migration
- Managed services availability
- Pricing model (pay-as-you-go)
- Support quality

### Database Hosting
- MongoDB hosting: Managed vs Self-hosted
- SQL database: Managed vs Self-hosted
- Multi-region support
- Backup and recovery
- Migration tools

---

## Development Approach

### AI-Driven Development
- **Tool**: Cursor AI
- **Process**: 
  1. Generate prompts for planning
  2. Generate code from prompts
  3. Document all decisions and code patterns
  4. Create reusable templates
- **Goal**: Reduce dependency on specific developers
- **Documentation**: All prompts, decisions, and code patterns must be documented

### Code Generation Strategy
- Generate vanilla HTML/CSS/JS templates
- Generate backend API endpoints for form handling
- Generate database schemas and migrations
- Generate console interfaces (admin and client)
- Generate monitoring and billing logic

---

## Success Criteria

### Technical
- ✅ Static websites load fast (< 2s)
- ✅ Form submissions processed reliably (99.9% uptime)
- ✅ High-traffic sites scale automatically
- ✅ Zero downtime during scaling
- ✅ Data migration possible within 24 hours

### Business
- ✅ Cost-effective for first 60 websites
- ✅ Usage tracking accurate for billing
- ✅ Console interfaces functional
- ✅ Payment processing integrated
- ✅ Scalable to 2000 websites

### Operational
- ✅ All code documented
- ✅ All decisions documented
- ✅ Deployment process automated
- ✅ Monitoring and alerting in place
- ✅ Backup and recovery tested

---

## Questions to Answer in Plan

1. **Backend Language**: Which language best fits our requirements?
2. **Web Server**: Which server best serves static files and handles reverse proxy?
3. **Hosting Provider**: Which provider offers best cost/performance for our scale?
4. **Database Setup**: Managed services or self-hosted? Which providers?
5. **Architecture**: Monolithic or microservices? Why?
6. **Scaling Strategy**: How to handle traffic spikes?
7. **Cost Estimation**: Projected costs for Day 1, Month 4, Year 1, Year 2
8. **Migration Strategy**: How to migrate data between providers?
9. **Monitoring**: What tools for usage tracking and billing?
10. **Security**: How to secure form submissions and payment processing?

---

## Output Expected

Generate a comprehensive plan document that includes:
1. **Recommended Tech Stack** with justifications
2. **Architecture Diagram** (text-based or description)
3. **Database Schema Design** (MongoDB + SQL)
4. **API Design** for form handling
5. **Infrastructure Setup** guide
6. **Cost Analysis** (Day 1, Month 4, Year 1, Year 2)
7. **Scaling Strategy**
8. **Migration Plan** for data portability
9. **Security Implementation** plan
10. **Monitoring & Billing** system design
11. **Development Workflow** using Cursor AI
12. **Code Templates** and patterns

---

## Constraints & Priorities

### Must Have
- Vanilla HTML/CSS/JS frontend
- Form handling backend
- Payment gateway integration
- Dual database (MongoDB + SQL)
- Usage-based billing
- Data portability
- Cost-effective scaling

### Nice to Have
- Auto-scaling infrastructure
- Multi-region support
- Advanced analytics
- White-label console options

### Avoid
- Vendor lock-in
- Over-engineering
- High initial costs
- Complex dependencies

---

**Use this prompt with Cursor AI to generate the comprehensive tech stack and infrastructure plan.**

