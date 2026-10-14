# Personal-brand website rebuild plan

Prepared and updated: October 14, 2026. Status: planning draft updated with the owner's discovery answers; implementation and deployment remain out of scope.

This document plans the complete replacement of the current PC-repair website with a personal-brand website serving small businesses and startups that need AI agents, workflow automation, and forward deployed engineering. Only this planning document is being edited. Implementation, dependency installation, hosting setup, domain changes, and deployment are outside the current task.

## 1. Decisions and open choices

| Topic | Status | Decision or recommendation |
| --- | --- | --- |
| Audience | Agreed | Small businesses and startups. |
| Offer | Agreed | AI agent teams, workflow automation, technical consultation, tool/service integration, and engineering alongside the client's team. |
| Framework | Agreed | Astro + TypeScript. |
| Repository | Agreed | Keep GitHub as the source of truth, using the existing repository. |
| Hosting | Agreed | Cloudflare Workers hosting static assets. |
| Scope now | Agreed | Inspect, research, ask discovery questions, and save a plan; do not implement or deploy. |
| Evidence | Required | No invented clients, testimonials, credentials, experience, or results. Existing site claims are not verified evidence. |
| Brand | Owner confirmed | IVy TechOps is the primary brand; Iskandar Verdiyev is the person behind it. |
| Public title | Owner confirmed | AI Automation Engineer. |
| Working arrangement | Owner confirmed | Remote work and local work in Broward County, Florida. Do not substitute the old site's Miami positioning. |
| Voice | Proposed | First person, direct, practical, and understandable to an owner or founder without an engineering background. |
| Rendering | Proposed | Pre-render public pages to static HTML. Add runtime functionality only for a confirmed need. |
| Primary action | Proposed | “Discuss your project,” leading to the Contact page. Use “Book a call” only if a working booking link is supplied. |
| Proof | Owner supplied; editorial details pending | Three project examples: lead-generation agent team, real-estate analysis automation, and AI virtual assistant. Add actual tools, status, artifacts, and permission details before presenting full case studies. No project outcome metrics were supplied. |
| Launch structure | Proposed | Home, Services and three service pages, Projects with three planned stories, About, Contact, Privacy, and 404. Full project pages depend on completing the project records. |
| Contact method | Owner confirmed | Email ivy.techops@gmail.com and GitHub profile IskaIV. Launch with an email CTA; other contact links will be added later. No booking link or phone is required now. |
| Public hosting address | Owner confirmed after clarification | Keep Cloudflare Workers; use a temporary workers.dev address. The exact hostname depends on the account's available subdomain and Worker name and is not yet assigned. |
| Custom domain | Deferred by owner | Choose later. The existing iskaiv.github.io address remains the old GitHub-hosted entry point, not the new Worker origin. |
| Engagement model | Selected under owner's delegation | Workflow assessment → fixed-scope pilot → rollout and handover → optional ongoing support or embedded engineering. |
| Commercial terms | Still open | Set prices, durations, support boundaries, and response expectations per engagement; no numerical promises are established. |

Owner-confirmed entries above come from the discovery answers in this chat. Design choices and detailed delivery requirements remain proposals. The owner delegated selection of an engagement model; that selection does not establish prices, capacity, service levels, or contracts.

## 2. Current-site audit

The repository was inspected on `main`, with no pre-existing working-tree changes. The remote is [IskaIV/iskaiv.github.io](https://github.com/IskaIV/iskaiv.github.io). The visible public page at [iskaiv.github.io](https://iskaiv.github.io/) was also inspected in a browser and presents the same PC-support branding. Public content visibility does not verify the truth of its claims.

| File | Current responsibility | Implication for the rebuild |
| --- | --- | --- |
| `index.html` | One long page branded “IVy TechOps — Local PC Repair & Tech Support.” Sections include services, process, pricing, reviews, FAQ, and contact. | Replace the PC-repair narrative with the new personal offer. Rebuild the content structure in Astro. |
| `style.css` | Cream/white surfaces, blue accent, Fraunces display type, Plus Jakarta Sans body type, rounded cards, sticky navigation, reveal animations, and a breakpoint at 860px. | Some warmth and readability are useful inspiration; the new design needs its own typography, layout, mobile navigation, and motion rules. |
| `script.js` | Reveal animations, FAQ clicks, and simulated form success. | Replace only the interactions actually needed. Contact delivery and accessibility need explicit design. |
| `README.md` | A repository title and “Profile Webpage.” | Later replace with actual development, content-editing, testing, and hosting instructions. |

No package manifest, Astro configuration, TypeScript configuration, tracked CI workflow, Cloudflare configuration, project content, or local image assets were found among the four tracked files. Account-side GitHub Pages settings and Cloudflare settings were not inspected.

### Content and credibility findings

- The current offer is local PC repair and tech support in Miami, including home users. That audience and offer differ from the requested rebuild.
- The page claims “80+ happy customers,” displays star ratings and three named customer reviews, and promises same-day availability and a no-fix/no-fee guarantee. Their authenticity and permission to publish are unconfirmed; do not carry them into the new site by default.
- PC-repair prices and support-plan terms do not establish pricing for AI or engineering services.
- At the initial inspection, the current phone, email, geography, hours, and identity had not been confirmed. The owner has now confirmed IVy TechOps and ivy.techops@gmail.com. Replace the Miami focus with remote work and Broward County, Florida; omit the old phone and operating hours because they remain unconfirmed.
- The diagnostic panel is illustrative static content; it is not evidence of a real software product.

### Functional and structural findings

- The contact handler prevents submission and displays success after a timer. It sends no message. A replacement form must report success only after a real receiving service accepts the inquiry.
- FAQ questions use click handlers on `div` elements without keyboard button semantics or expanded-state attributes. Plan native `details`/`summary` or accessible buttons.
- Mobile CSS hides the section navigation without providing a replacement menu. Plan a usable mobile navigation path.
- `.reveal` content starts hidden and depends on JavaScript to become visible. Make core content visible without JavaScript and make motion an enhancement.
- No reduced-motion rule was found. Plan to honor the visitor's reduced-motion preference.
- The head has a title but no description, canonical URL, or social-sharing metadata. No `main` landmark was found. Build shared semantic and metadata foundations.

These are source and browser observations, not a comprehensive accessibility certification or performance benchmark. No form submissions were made.

## 3. Discovery questions and answer record

The following questions were sent after inspecting the current site. The answer record below incorporates the owner's responses; unresolved project details must not be inferred from the descriptions or existing copy.

1. **Public identity:** What public-facing name and professional title should appear? Should the masthead use your name, IVy TechOps, or another name?
2. **Professional background:** What roles, responsibilities, experience, skills, and industries can be described accurately? Which services can you confidently deliver? What location or remote/on-site availability is public?
3. **Real project examples:** What 1–3 projects can be featured? For each: the problem, your exact role, what you built, tools used, current status, evidence of the outcome, links/screenshots, and permission or confidentiality limits. Personal and internal projects are valid if labeled accurately. “None yet” is also a valid answer.
4. **Contact details:** Which email, LinkedIn, GitHub profile, optional phone, and optional booking link are public and current? What is the preferred inquiry channel? Any realistic response expectation?
5. **Domain preferences:** Do you own a domain? What names/extensions do you prefer, and what purchase/renewal budget is acceptable? Should the identity be your personal name or a business brand? Is there an existing domain email setup to preserve?
6. **Offer boundaries:** Which project types are preferred? Do you want discovery engagements, fixed-scope builds, ongoing embedded work, maintenance, or some combination? Any industries or work you do not take on?

| Information | Recorded answer |
| --- | --- |
| Public name/title/brand | Iskandar Verdiyev; AI Automation Engineer; IVy TechOps. |
| Background | Roles include IT technician, IT manager, Technical Specialist at a general contractor company, and CAD/BIM designer. No employer names, role dates, degrees, or certifications supplied. |
| Owner-reported experience | Building AI teams for company tasks for four years; automated 100+ workflows for companies across different fields; led website development and administration; facilitated client AI/automation integrations since 2024. These are owner-supplied experience claims, not independently audited counts or project results. |
| Confirmed skills | Workflow automation; AI agent teams for lead generation, operations, and other tasks; technical consultation; integration of tools/services into existing client systems. Specific tool names are not yet supplied. |
| Geography and working arrangement | Remote and Broward County, Florida. No exact street address, travel radius, or office location is needed for launch. |
| Project 1 | Always-on AI agent team handling research, writing, and review in customer outreach workflows; clients communicate with and customize the team through chat. Owner is the builder. Tools, project dates/status, collaborator contributions, artifacts, outcome evidence, and publication limits remain unspecified. |
| Project 2 | System scanning a given area for real-estate properties, checking them against a client's buy-box, and analyzing property profitability. Owner is the builder. Tools, data sources, dates/status, assumptions, artifacts, and publication limits remain unspecified. |
| Project 3 | Lightweight AI assistant reading email/calendar/todo information to create daily digests, clean up/respond to emails, schedule appointments, and perform VA tasks based on client preferences. Owner says it was created; current deployment/usage status and permission controls are not yet specified. |
| Public contact links | ivy.techops@gmail.com; [GitHub: IskaIV](https://github.com/IskaIV). Other links will be supplied later. The inbox is owner-confirmed; delivery has not been tested. |
| Public hosting address | Initially requested iskaiv.github.io. After clarification of the hosting constraint, the owner chose Cloudflare Workers with a temporary workers.dev address. No exact Worker hostname exists in this plan. |
| Engagement model | Owner asked the planner to select what fits best. Selected: assessment, fixed-scope pilot, rollout/handover, optional ongoing support or embedded engineering. |
| Service boundaries | Detailed scope, pricing, duration, availability, maintenance terms, and supported tools remain to be defined per engagement. |

The four-year AI-team experience and client integrations since 2024 are separate supplied statements. Do not turn them into an invented employment timeline. “100+ workflows” describes workflow volume, not 100+ clients, completed projects, or quantified business improvements.

## 4. Positioning

### Recommended central position

**AI agent teams and automation built around the tools your business already uses.**

Draft positioning statement grounded in the supplied background:

> I'm Iskandar Verdiyev, the AI Automation Engineer behind IVy TechOps. I build AI agent teams and workflow automations for small businesses and startups, integrating them into the systems your team already uses.

Present IVy TechOps as Iskandar's personal engineering brand. Use the brand wordmark with his name and role close by. “AI agent teams” describes coordinated software agents, not a claimed staff of human engineers. Avoid implying an agency headcount or unsupported customer roster.

### Credible reasons to choose IVy TechOps

- Experience spanning hands-on IT, IT management, technical work for a general contractor, CAD/BIM design, and website development/administration.
- Confirmed focus on connecting automation and AI tools to clients' existing systems.
- Three supplied examples covering outreach workflows, real-estate screening/analysis, and administrative tasks.
- Remote collaboration and local work in Broward County, Florida.

Optional About-page support line: “I've spent four years building AI teams for company tasks and have automated more than 100 workflows across different fields.” Source: owner statement on October 14, 2026. Keep this as background, not a hero promise or a claim of measured customer results. Reconfirm time-relative wording before a later publication.

### Who the site needs to persuade

| Buyer | Likely problem to address | What the page should make clear |
| --- | --- | --- |
| Small-business owner or operations lead | Repeated data entry, missed handoffs, disconnected tools, or information buried in documents. | What part of the process can be improved, how existing tools fit, and what a first project involves. |
| Startup founder or lean product team | A promising AI prototype needs real integrations, evaluation, and a path to everyday use. | The hands-on scope, engineering responsibilities, boundaries, and evidence of relevant work. |

These are audience hypotheses for messaging, not descriptions of actual clients. Lead with cross-industry workflows. Construction/CAD/BIM background and the real-estate project can provide context without implying a named client or industry specialization that was not supplied.

### Three connected services

| Service | Plain-language promise to explore | Proposed delivery requirements, not a record of past deliverables |
| --- | --- | --- |
| AI agents | Give a defined workflow an assistant that can use approved information and tools. | Workflow and permission map, focused prototype, evaluation examples, integrations, review points, and handover. |
| Workflow automation | Move information between tools and trigger routine steps consistently. | Process map, integration build, failure handling, operational visibility, and maintenance notes. |
| Forward deployed engineering | Work closely with the team to build software around how the business actually operates. | Discovery with users, scoped engineering work, frequent feedback, rollout support, and documentation. |

Do not list named integrations or technical specialties as supported capabilities until confirmed. Describe goals such as reducing manual work as goals, not guaranteed results.

### Forward deployed engineering in plain language

Forward deployed engineering means an engineer works closely with the people running a business, learns where their daily work gets stuck, builds software around those needs, and helps the team use it. The work can include connecting systems, adapting a prototype, and fixing what emerges when real users try it.

For this site, introduce it as **“Engineering alongside your team”**, followed by the industry term. The proposed delivery model is understand → build → test with users → put into use → hand over. Iskandar can work remotely and locally in Broward County, Florida. Do not claim a previous formal forward deployed engineer job title; the supplied title is AI Automation Engineer.

This interpretation is consistent with the customer-facing engineering responsibilities described in [Palantir's explanation of forward deployed software engineering](https://www.palantir.com/careers/students-and-early-talent). That reference explains the term; it implies no affiliation, employment, training, or credential for the site owner.

### Tone and conversion rules

- Lead with the business problem and a useful next step. Explain “agent” and “forward deployed” at their first appearance.
- Use “I” for Iskandar and “your team” for the buyer. Describe the supplied capabilities without inventing named tools, credentials, or an engineering staff.
- Prefer specific actions: route an inquiry, prepare a draft, connect records, flag an exception, or surface an answer with its source.
- Describe permissions, review, testing, and handover in ordinary language. Avoid blanket promises about accuracy, security, autonomy, savings, or speed.
- Use one consistent primary CTA: “Discuss your project.” Its destination is `/contact/` until a confirmed booking path justifies a change.
- Plan “See projects” around the three supplied examples. Use “Explore services” if project publication details are still incomplete at launch.

### Selected engagement model

Lead with a focused pilot rather than selling an open-ended commitment. The first conversation arrives by email; do not call it a free assessment or promise a meeting duration.

| Stage | Buyer gets | Boundary to establish |
| --- | --- | --- |
| Workflow assessment | A map of one process, its systems, constraints, and a recommendation for a first build. | Define whether assessment is a separate paid deliverable or included in the pilot quote; no pricing assumed. |
| Fixed-scope pilot | One agreed workflow, agent team, or integration tested against agreed examples and acceptance criteria. | Document permissions, required client access, exclusions, milestones, and what counts as acceptance. |
| Rollout and handover | Setup, documentation, operating ownership, and a plan for issues found in use. | Specify ongoing tool costs, support coverage, training, and responsibilities. |
| Optional support or embedded engineering | Continued iteration and engineering alongside the team where needed. | Agree on capacity, response expectations, maintenance boundaries, and commercial terms separately. |

This model fits small teams that need a concrete first step and startups with evolving requirements. Website development/administration can support an engagement where relevant; it is background and an adjacent capability, not a fourth launch service unless later requested.

## 5. Reference sites and visual direction

Both supplied homepages were reviewed as live text and in browser screenshots on October 14, 2026. The observations below are inspiration; the proposed adaptation is design judgment.

| Reference | Observed pattern | Adaptation for this personal site |
| --- | --- | --- |
| [Bonsai](https://www.hellobonsai.com/) | Light surfaces, generous space, large direct headline, prominent rounded CTA, grouped business functions, product examples, and customer-story sections. | Use a clear offer and approachable layout. Organize the services around work a business recognizes. Pair explanations with relevant project artifacts. |
| [CoLab](https://www.colabsoftware.com/) | Dark high-contrast hero, large engineering-focused headline, workflow demonstrations, a problem-to-solution narrative, and customer evidence. | Give the engineering work substance through one understandable workflow visual and detailed project stories. Use a dark section sparingly for contrast. |

Borrow the clarity, hierarchy, and use of evidence. Use original copy and original or permission-cleared assets. Neither reference's logos, customers, testimonials, metrics, product screens, or brand identity belong on this site.

### Proposed design brief

- Light neutral primary canvas, dark readable text, and a restrained blue accent that can connect to the existing IVy TechOps identity. Final shade and typography remain design choices. Keep the site approachable for business owners.
- Strong type hierarchy, a readable body face, consistent spacing, and deliberate section rhythm. Font choices remain open; self-host licensed fonts if selected.
- IVy TechOps wordmark in the header; introduce “Iskandar Verdiyev · AI Automation Engineer” prominently in the hero/About context. Navigation: Services, Projects when ready, About, and the Contact CTA.
- A hero combining a direct offer with either a real project artifact or an original diagram labeled “Example workflow.” Do not imitate a live operational dashboard with invented activity.
- Home narrative: offer → recognizable problems → service options → evidence → working process → personal introduction → FAQ → contact.
- Use an annotated project image, an editorial process section, and a personal introduction to give each section a distinct purpose.
- Mobile layouts must preserve the reading order and expose navigation. No content should depend on hover, animation, or horizontal scrolling.
- Subtle optional motion only; respect reduced motion. Keep core content readable when JavaScript is unavailable.

Illustrative diagram concept, only if needed: “Incoming request → categorize → retrieve relevant information → prepare a draft → human review → approved next step.” Label it explicitly as an example, not a delivered project or proof of performance.

## 6. Proposed sitemap

| Route | Purpose and key content | Primary next step | Launch condition |
| --- | --- | --- | --- |
| `/` | Explain the offer, audience, service options, evidence, process, and owner. | Discuss your project | Required |
| `/services/` | Help a buyer choose a starting point; explain scope and engagement shapes. | Discuss your project | Required |
| `/services/ai-agents/` | Explain agent teams, appropriate tasks, permissions, evaluation, and review. | Discuss an agent workflow | Required; detailed scope depends on the engagement |
| `/services/workflow-automation/` | Explain integrations, repeated tasks, exceptions, and handover. | Discuss a workflow | Required |
| `/services/forward-deployed-engineering/` | Explain close collaboration and hands-on delivery in plain language. | Discuss engineering support | Required; avoid implying a previous formal FDE role |
| `/projects/` | Present the supplied examples with clear role, status, and evidence. | Read a project | Complete project records and public-use details first |
| `/projects/lead-generation-agent-team/` | Research, writing, review, and chat customization in outreach workflows. | Discuss a related workflow | Confirm status, artifact, tools, and publication limits |
| `/projects/real-estate-analysis-automation/` | Area search, buy-box matching, and property profitability analysis. | Discuss a related workflow | Confirm status, data sources, assumptions, and publication limits |
| `/projects/ai-virtual-assistant/` | Daily digests and administrative email/calendar/task assistance. | Discuss a related workflow | Confirm status, tool permissions, artifacts, and publication limits |
| `/about/` | Introduce Iskandar, supplied background, and working approach. | Discuss your project | Required; owner biography supplied |
| `/contact/` | Email ivy.techops@gmail.com and link to GitHub IskaIV. | Email Iskandar | Required; check mailto/profile links during implementation |
| `/privacy/` | Explain actual data collection, providers, use, and contact. | Return to contact | Required when collecting inquiry data or using relevant third parties |
| Custom 404 page | Explain an unavailable URL and offer recovery links. | Home or Services | Required; verify HTTP 404 |

The service pages support different buyer questions without repeating the same generic sales copy. If the confirmed service scope is narrower, consolidate or remove pages before implementation. Do not publish empty project templates. Defer a blog, newsletter, separate pricing page, client portal, and live AI chat until there is a concrete need and supporting content.

## 7. Draft page copy

Copy below uses the owner's supplied identity, background, capabilities, and project descriptions. It is still an editorial draft. Named clients, testimonials, certifications, tools, and measured outcomes have not been supplied and are not added. Bracketed markers refer only to unresolved project details or optional links. Delivery practices are proposed engagement terms, not claims that every past project already used them.

### Home `/`

**Title:** `IVy TechOps | AI Agent Teams & Workflow Automation`

**Description:** `AI agent teams and workflow automation for small businesses and startups. Work with Iskandar Verdiyev remotely or in Broward County, Florida.`

**Eyebrow:** Iskandar Verdiyev · AI Automation Engineer

**Headline:** AI agent teams and automation for the work behind your business.

**Introduction:** I'm Iskandar, the engineer behind IVy TechOps. I build AI agent teams, automate workflows, and connect new tools to the systems your business already uses. I work remotely and with teams in Broward County, Florida.

**Primary CTA:** Discuss your project

**Secondary CTA:** See projects — fall back to “Explore services” if the supplied project records are not ready for publication.

**Problems section — “Where is work getting stuck?”**

- Your team enters the same information in multiple tools.
- Requests move between people without a clear next step.
- Useful answers are buried in documents or previous conversations.
- An AI prototype needs to work with real data and everyday users.

**Services section — “Choose a starting point.”**

- **AI agents:** Assist a defined task using approved information and tools, with review where it matters.
- **Workflow automation:** Connect routine steps so information moves through the process consistently.
- **Engineering alongside your team:** Work together to understand the problem, build the solution, and put it into use.

**Proof section — “A closer look at the work.”** Use the supplied examples: a lead-generation agent team, real-estate analysis automation, and an AI virtual assistant. The draft summaries appear below. Complete status and public-use details before publishing; do not attach invented metrics or customer names.

**Process section — “Start with one useful workflow.”**

1. **Understand:** Map the current process, tools, bottleneck, and people involved.
2. **Define:** Agree on a focused scope, review points, and how to judge whether it works.
3. **Build and test:** Try the solution with representative inputs and the people who will use it.
4. **Put it into use:** Document the setup, ownership, and support needs before handover.

**Personal introduction:** “My background spans IT support and management, technical work for a general contractor, CAD/BIM design, and website development. Today I focus on AI agent teams and automation that fit into existing business systems.” Link to About.

**FAQ:** Use the service FAQ below. Availability answer: “I work remotely and locally in Broward County, Florida.” Do not add a response-time promise or public pricing before it is established.

**Closing headline:** Tell me about the work you want to improve.

**Closing copy:** Describe the process, the tools you use, and where things get stuck. You do not need a finished technical brief to start a conversation.

### Services `/services/`

**Title:** `AI & Automation Services | IVy TechOps`

**Headline:** Practical engineering for the work behind your business.

**Introduction:** A useful project starts with a clear problem. I can help with AI agent teams for lead generation and operations, workflow automation, technical consultation, and integrations with your existing tools. We start by defining a focused first build.

**Service summaries:** Use the three Home summaries with links to their detailed pages. Include technical consultation and integration work within the service scopes. Do not name supported products or platforms until supplied.

**“Ways to work together” — selected model; exact terms are scoped per engagement:**

- **Assess the workflow:** Map one process, review the tools involved, and agree on a useful starting point.
- **Build a focused pilot:** Develop one agreed workflow, agent team, or integration and test it against the scope.
- **Roll out and hand over:** Document the setup and agree on who operates and maintains it.
- **Continue where needed:** Add ongoing support or engineering alongside the team under a separately agreed scope.

Do not publish prices, minimum commitments, turnaround times, free consultations, maintenance coverage, or availability until established.

**CTA:** Discuss your project

### AI agents `/services/ai-agents/`

**Title:** `AI Agent Teams for Business Workflows | IVy TechOps`

**Headline:** Put an AI agent team to work on a defined business task.

**Introduction:** An AI agent uses an AI model, relevant information, and permitted tools to carry out a task. An agent team coordinates multiple roles, such as research, writing, and review. I build these teams for lead generation, operations, and other business workflows, with the scope defined around the work you need done.

**Project connection:** The supplied lead-generation project combines research, outreach writing, review, and chat-based customization. The virtual-assistant project combines digests with email, calendar, and task assistance. Link to the completed project records when ready.

**“Other tasks we could explore” — illustrative possibilities:** Prepare a response from approved reference material; categorize an incoming request; extract information from a document; or suggest a next step for review. Scope and feasibility depend on tools, data, and permissions.

**“What a focused build should cover”:** The task and its boundaries, access permissions, tool connections, representative evaluation cases, human review, failure handling, and an owner for ongoing changes. These are planned acceptance requirements; the supplied descriptions do not establish the exact controls already present in past builds.

**FAQ — “Will it act without approval?”** The scope should specify which steps are automatic and which require a person. Approval requirements depend on the task and the consequences of an error.

**FAQ — “Can it make mistakes?”** Yes. A useful system needs representative testing, clear limits, and a way to review uncertain or consequential outputs.

**CTA:** Discuss an agent workflow

### Workflow automation `/services/workflow-automation/`

**Title:** `Workflow Automation | IVy TechOps`

**Headline:** Keep information moving between your tools.

**Introduction:** Repeated handoffs and copy-and-paste work can slow down a small team. Automation can connect routine steps so people spend less effort moving information and more time handling the work that needs their attention.

**Project connection:** The supplied real-estate system scans an area, checks properties against a client's buy-box, and runs a profitability analysis. The virtual-assistant example prepares daily digests from email, calendar, and task information. Keep portfolio wording within those supplied capabilities.

**“Other workflows we could explore” — illustrative possibilities:** Send a qualified inquiry into the right queue; create a task when a record changes; assemble a regular report; or notify someone when an exception needs attention. These additional ideas are not portfolio claims.

**“Plan for everyday use”:** Agree on the trigger, data mapping, duplicate handling, retries, visibility when something fails, and the person who maintains the workflow. A simpler rule-based integration may be sufficient; discuss AI only where it helps the task.

**FAQ — “Do we need to replace our tools?”** The first step is to review your existing tools and available connections. Whether they can support the workflow depends on their APIs, permissions, and limitations.

**CTA:** Discuss a workflow

### Forward deployed engineering `/services/forward-deployed-engineering/`

**Title:** `Engineering Alongside Your Team | IVy TechOps`

**Headline:** An engineer who learns the work and builds with your team.

**Introduction:** Forward deployed engineering means working closely with the people who will use the software. I help define the workflow, integrate tools into your existing systems, and build with feedback from your team. Through IVy TechOps, I offer this hands-on approach remotely and locally in Broward County, Florida.

**“How the collaboration could work”:** Talk with the people doing the work, inspect the relevant systems, agree on a small first deliverable, share progress, test with real users, and document what the team needs to operate it.

**“When to discuss it”:** Your requirements are still developing; a prototype needs real integrations; or the team needs hands-on help connecting a business problem to an engineering plan.

**FAQ — “Does this mean working in our office?”** I can work remotely or locally in Broward County, Florida. The arrangement depends on what the project needs and what we agree before starting.

**CTA:** Discuss engineering support

### Projects `/projects/` — three owner-supplied examples

**Title:** `AI & Automation Projects | IVy TechOps`

**Headline:** The problem, the build, and what happened next.

**Introduction:** These examples cover lead generation, real-estate analysis, and everyday administrative work. Each story explains what I built, the workflow it supports, and the details available to share.

**Card structure:** Project title · confirmed project type/status · task supported · owner's role · “Read the project.” Add an outcome only if supplied with evidence.

#### Lead-generation AI agent team

**Planned route:** `/projects/lead-generation-agent-team/`

**Headline:** Research, outreach writing, and review in one AI agent team.

**Summary/card copy:** An always-on AI agent team supports research, writing, and review for customer outreach. Clients can communicate with the team and customize it through a simple chat.

**Role:** Built by Iskandar Verdiyev, based on his supplied description. Confirm any collaborators' contributions before assigning sole authorship.

**What the project does:** Coordinates research, drafting, and review roles, with a chat interface for client interaction and customization. “Always-on” is the owner's description of operation; it is not an uptime SLA or support-hours commitment.

**Missing for the full story:** Specific tools and integrations; project type/date/current status; an actual cleared screenshot or walkthrough; research sources and outreach boundaries; and what can be published. Sending outreach automatically was not stated, so do not add it as a feature. No lead volume, conversion improvement, revenue, or time-savings metrics were supplied.

**CTA:** Discuss an outreach workflow

#### Real-estate analysis automation

**Planned route:** `/projects/real-estate-analysis-automation/`

**Headline:** Screen properties against the criteria that matter to the buyer.

**Summary/card copy:** A system scans a specified area for properties, checks them against a client's buy-box, and analyzes property profitability.

**Role:** Built by Iskandar Verdiyev, based on his supplied description. Confirm the precise contribution and any collaborators before publication.

**What the project does:** Searches an area, compares properties with client criteria, and produces a profitability analysis. Explain “buy-box” as the client's property selection criteria. The description does not establish which property types, listing sources, or financial calculations are supported.

**Missing for the full story:** Tools, permitted data sources, project type/date/current status, criteria fields, calculation assumptions, and a cleared example report. Do not claim profitable purchases, reliable forecasts, investment returns, or autonomous purchasing decisions; none were supplied.

**CTA:** Discuss an analysis workflow

#### Lightweight AI virtual assistant

**Planned route:** `/projects/ai-virtual-assistant/`

**Headline:** A daily digest and help with recurring administrative tasks.

**Summary/card copy:** A lightweight AI assistant combines email, calendar, and todo information into daily digests. It can also help clean up and respond to emails, schedule appointments, and perform VA tasks according to client preferences.

**Role:** Created by Iskandar Verdiyev, based on his supplied description. A created assistant is established; production usage, reliability, and the exact client deployment arrangement are not.

**What the project does:** Reads the relevant information, prepares a daily digest, and supports email/calendar/administrative actions according to configured preferences. Do not name Gmail, Outlook, Google Calendar, or any other platform until the actual integrations are supplied.

**Missing for the full story:** Tools, project type/date/current usage, configured preferences, permissions for reading or acting, confirmation behavior, a cleared demo, and publication limits. Reading/drafting and sending/deleting/scheduling have different consequences: document the actual controls rather than assuming they already exist. No accuracy rate, hours saved, or claim that it fully replaces a human assistant was supplied.

**CTA:** Discuss administrative automation

**Shared project-page structure:**

1. Heading: `[PROJECT TITLE]`; short factual summary.
2. Context: who needed what, with permission-cleared identification or an accurate anonymized description.
3. Role: what the owner personally did, and what collaborators or existing systems contributed.
4. Constraints: relevant tools, data, access, timing, and requirements.
5. Build: what was implemented, supported by a cleared screenshot, diagram, repository, or walkthrough.
6. Status and outcome: prototype/pilot/production/retired; date; what was observed. Any metric includes its baseline, period, measurement method, and attribution limits.
7. Limitations and lessons: what remains manual, untested, or unresolved.
8. CTA: “Have a similar workflow? Discuss your project.”

Three real examples have now been supplied. They can anchor the portfolio without invented customer identities or outcomes. Complete each record's type, status, role, and public-use details before publishing it as a full case study. If those details remain incomplete at launch, keep the incomplete pages out of public routes and use only owner-confirmed generic summaries where publication is appropriate. Do not label these builds as demos, paid client work, production systems, or pilots without confirmation.

### About `/about/`

**Title:** `Iskandar Verdiyev, AI Automation Engineer | IVy TechOps`

**Headline:** I'm Iskandar Verdiyev, the engineer behind IVy TechOps.

**Biography:** I'm an AI Automation Engineer with a background in IT support and management, technical work for a general contractor, and CAD/BIM design. I've also led website development and administration.

I've spent four years building AI teams for company tasks and have automated more than 100 workflows for companies across different fields. Since 2024, I've helped clients integrate AI and automation tools into their existing systems.

Through IVy TechOps, I focus on workflow automation, AI agent teams for lead generation and operations, technical consultation, and tool/service integration. I work remotely and locally in Broward County, Florida.

**Editorial note:** The duration and workflow count are supplied by the owner, not independently audited. They may be used as first-person background with his confirmation already recorded here; do not turn them into client counts, certifications, or measured outcomes. Reconfirm time-relative wording before publication.

**“How I approach the work” — proposed working principles:** Understand the actual process, agree on a focused scope, test with realistic inputs, and make the setup understandable to the people who will own it.

**Background details:** The supplied roles are IT technician, IT manager, Technical Specialist at a general contractor company, and CAD/BIM designer. A simple background narrative is sufficient; no employer names, role timeline, degrees, or certifications are needed for launch. Add only actual details supplied later.

**Links:** [GitHub: IskaIV](https://github.com/IskaIV). LinkedIn and other links are deferred at the owner's request; do not show empty icons or placeholders.

**CTA:** Discuss your project

### Contact `/contact/`

**Title:** `Discuss Your Project | IVy TechOps`

**Headline:** What would you like to make easier?

**Introduction:** Tell me what your team is trying to do, which tools are involved, and where the process gets stuck. If you have a timeline or constraints, include them too.

**Primary action:** “Email Iskandar” → `mailto:ivy.techops@gmail.com`.

**Supporting details:** Remote · Broward County, Florida. [GitHub: IskaIV](https://github.com/IskaIV).

Do not add a phone, booking link, LinkedIn link, or response-time promise now; the owner will provide other contact details later. Verify the email link during implementation without sending a message unless authorized.

**Optional form, only with a real receiving service:** Name, email, company/site (optional), workflow or project description, and timing (optional). Budget can be optional if the owner wants to qualify inquiries. Avoid mandatory phone numbers and file uploads at launch.

**Privacy microcopy:** “Please avoid including confidential data or credentials in your first message.” Link to the actual privacy notice if a form is used. Do not publish a fabricated response-time promise.

**Submission states, if a form is later chosen:** Pending: “Sending your message…” Accepted: “Your message was submitted.” Failure: “Your message wasn't submitted. Please try again or email ivy.techops@gmail.com.” Server acceptance is not a guarantee of inbox delivery; test both receipt and failure behavior. A form is not required for the initial email-only scope.

### Privacy `/privacy/`

Prepare a factual notice after the actual contact and analytics choices are made. Cover the data collected, purpose, processors/providers, storage and retention arrangements, tracking if any, contact for privacy questions, and effective date. Do not invent policies or imply certification/compliance. Final content may need appropriate review once geography and providers are known.

### 404 page

**Headline:** This page isn't available.

**Copy:** You can return to the homepage or explore the services.

**Links:** Home · Services · Contact. Serve with a real HTTP 404 response.

## 8. Content readiness and remaining inventory

| Status/priority | Item | What is established or still needed | Handling |
| --- | --- | --- | --- |
| Supplied | Public identity | Iskandar Verdiyev; AI Automation Engineer; IVy TechOps. | Use consistently; no name/title placeholders remain. |
| Supplied | Background and skills | Roles, four-year AI-team experience, 100+ workflows, website development/admin, integrations since 2024, and confirmed capabilities. | Attribute internally to owner answers; no invented credentials or timeline. |
| Supplied | Contact and location | ivy.techops@gmail.com, GitHub IskaIV, remote and Broward County, Florida. | Email is the launch CTA; other links are deferred. |
| Supplied | Hosting/address direction | Cloudflare Workers with temporary workers.dev address. | Assign the actual available hostname only during later hosting setup; use it for canonicals at that stage. |
| Selected | Engagement model | Assessment, fixed-scope pilot, rollout/handover, optional support or embedded work. | Define prices, durations, support, and acceptance per scope; no placeholder pricing page needed. |
| Required for full project stories | Project records | Three examples supplied; still need project type/date/status, exact role, collaborators if any, actual tools, cleared artifact, and public-use limits. | Draft summaries are ready; full case-study publication depends on completing records. |
| Required for project specificity | Technical detail | Lead-generation integrations/outreach boundaries; property data sources/calculation assumptions; VA integrations/action permissions. | Do not invent tool names, datasets, operational controls, or capabilities. |
| Required only for outcome claims | Measured results | Baseline, period, method, source, attribution, and publication permission. None supplied. | Omit project result metrics; describe the build and confirmed status. |
| Required only if a form is added later | Receiving service | Provider, validation, delivery behavior, failure states, and retention decision. | Initial email-only scope avoids a simulated submission flow. |
| Required for data collection | Privacy facts | Actual providers, collection, use, tracking, and retention. | Draft an outline only. |
| Optional | Portrait | Owner-approved image and usage rights. | Use a typographic identity. |
| Optional | Logo and brand assets | Existing rights-cleared assets or a later identity brief. | Use a name wordmark. |
| Optional | Testimonials/client logos | Authentic wording/source and explicit permission to display. | Omit; never synthesize replacements. |
| Optional/deferred | Other contact links | LinkedIn, booking, phone, or other links if the owner later wants them. | Do not ask again or block the email-based launch. |
| Optional | Public prices and response policy | Confirmed commercial terms and capacity. | Discuss scope individually; no fabricated offers. |
| Deferred | Custom domain | Preference, ownership, budget, canonical hostname, and DNS/email constraints. | Not a blocker for the chosen temporary workers.dev launch. |
| Deferred | Articles, newsletter, live demo | Real editorial purpose, maintenance owner, and content. | Exclude from initial launch. |

### Evidence rules

- Keep an internal source and permission record for each published biographical fact, project, endorsement, and result. The discovery answers are the source for the supplied biography and experience claims; independent audit is not claimed.
- Label client, employer/internal, personal, open-source, and demonstration work accurately. Anonymization must still respect confidentiality.
- Never present an employer's entire product or a team's output as solely the owner's work.
- A real artifact without measured results is still useful evidence; describe what exists and what was tested. Do not call the supplied projects shipped/production systems until their status is confirmed.
- Mark hypothetical workflow visuals as examples. Do not pair them with invented customers, names, results, or “live” indicators.
- Do not publish project placeholders, draft claims, or fake social proof. Keep drafts excluded from production routes, sitemap, and sharing metadata.

## 9. Planned architecture

### Static Astro site on Workers

Use Astro's static output for public pages, with TypeScript and minimal browser JavaScript. Build into `dist/` and serve it with Cloudflare Workers Static Assets. Astro's guide supports this setup without a rendering adapter; add `@astrojs/cloudflare` only if on-demand rendering is later required. Configure the asset directory and custom 404 handling when implementation starts. See [Astro's Cloudflare deployment guide](https://docs.astro.build/en/guides/deploy/cloudflare/) and [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).

This is a multi-page marketing site. Use `not_found_handling: "404-page"`; avoid an SPA fallback that returns the home page with a 200 response for unknown paths. Optional backend contact handling is a separate scope decision, not a reason to make every page dynamic.

### Proposed source organization — not created in this task

```text
docs/website-rebuild-plan.md       # this planning document
src/pages/                        # proposed sitemap routes and 404
src/layouts/BaseLayout.astro       # shared landmarks and metadata
src/components/                   # navigation, CTA, service and project presentation
src/styles/                       # tokens, global styles, responsive rules
src/content/projects/             # real approved project Markdown and local artifacts
src/content.config.ts             # project schema and draft filtering
src/data/site.ts                  # IVy TechOps, Iskandar, email, GitHub, assigned site URL
src/assets/                       # optimized owner-approved images
public/                           # favicon, share assets, headers/redirects if needed
astro.config.mjs                   # static output, assigned workers.dev URL, sitemap
tsconfig.json                     # Astro strict TypeScript configuration
wrangler.jsonc                    # Workers static assets configuration
package.json + lockfile            # pinned dependency inputs and scripts
.github/workflows/                 # checks; deployment workflow only if selected later
```

Prefer scoped Astro/CSS styling and a small shared token system. A client framework or CMS is unnecessary for the proposed launch scope. Choose a supported Node version and compatible stable package versions at implementation time; no version numbers are assumed here.

Use a validated project collection so required content and types are consistent. Include title, slug, summary, project type, exact role, status, date, artifacts/alt text, publication readiness, and optional outcomes with their evidence notes. Sensitive permission records belong outside public build assets. Schema validation does not replace editorial verification. See [Astro content collections](https://docs.astro.build/en/guides/content-collections/).

Plan `astro check` as a separate validation step in addition to the build, using Astro's strict TypeScript template. The dev server alone does not type-check `.astro` files. See [Astro TypeScript guidance](https://docs.astro.build/en/guides/typescript/).

### Contact and measurement

- Selected initial contact path: owner-confirmed ivy.techops@gmail.com, with GitHub IskaIV as a supporting link. No booking link or form is required now.
- If a form is chosen, use a real backend endpoint or a reviewed form provider. Keep secrets server-side; plan validation, abuse handling, delivery monitoring, accessible errors, and an email fallback.
- Proposed launch measurement: track inquiry quality manually first. Optional analytics can measure service interest and contact actions later, subject to the owner's preference and accurate privacy content.
- Do not record inquiry contents in analytics. Avoid live AI chat or third-party scripts without a concrete reason.

### Quality targets — engineering targets, not customer results

- All essential content and navigation are available without browser JavaScript.
- Keyboard users can reach every action and operate menus/FAQ, with visible focus and meaningful labels.
- Text contrast, landmark structure, heading order, and forms target WCAG 2.2 AA; automated checks are supplemented with manual review.
- Check layouts at narrow mobile, tablet, and desktop widths, including zoom and long text. No accidental horizontal overflow.
- Aim for LCP ≤ 2.5s, CLS ≤ 0.1, and INP ≤ 200ms in representative measurements. These are goals; field measurements require actual traffic.
- Optimize real images, reserve layout space, and defer nonessential media. Avoid autoplay hero video at launch.
- Every page has an accurate unique title/description, appropriate canonical URL, and working share metadata. Structured data contains only supported personal/service facts; no invented ratings.

## 10. GitHub, domain, and migration plan

GitHub stays the code host; Cloudflare Workers becomes the website host. The owner chose a temporary `workers.dev` address after the `iskaiv.github.io` constraint was explained. This resolves the planning choice without changing the agreed Workers hosting stack. No exact Worker name/account subdomain has been assigned or checked, and no deployment has been created.

The current `iskaiv.github.io` address is GitHub-managed and cannot become a Worker Custom Domain in a zone the owner does not control. It remains the existing site's address until a later migration decision is carried out. This follows [GitHub's description of the default Pages address](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) and [Cloudflare's custom-domain ownership requirements](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

Cloudflare supplies a `workers.dev` address based on the Worker name and account subdomain. Use the assigned address as the temporary public canonical URL; do not retain `iskaiv.github.io` in the new site's canonical or sitemap configuration. Preview and development hosts should be handled separately. See [Cloudflare workers.dev routing](https://developers.cloudflare.com/workers/configuration/routing/workers-dev/).

For a later custom domain, confirm ownership and an active Cloudflare zone. Review existing DNS and email records before any cutover. Workers Custom Domains require a zone the account owns and have constraints around existing CNAME records. Configure the canonical hostname and alternate-host redirects deliberately. Then update canonical URLs, sitemap, and share metadata and plan redirects from the temporary host. See [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

Proposed later delivery workflow: a `codex/website-rebuild` branch and reviewable pull request in this repository; locked dependency install, `astro check`, build, and relevant route/contact checks. Decide on one production deployment owner: GitHub Actions with an appropriately scoped credential, or Workers Builds connected to GitHub with clearly configured checks and promotion behavior. Do not enable overlapping deployment systems. Cloudflare supports repository builds and branch previews; review their behavior before configuration. See [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/).

Migration sequence for a later authorized build:

1. Preserve the current version in Git history and record existing public URLs, repository settings, and any custom domains before replacement.
2. Build and review the new site locally without changing production.
3. Once staging deployment is requested, test Workers asset routing, metadata, contact behavior, and 404 responses on a nonproduction host. Keep drafts unindexed and access-restricted where needed.
4. Confirm final project details, email link, actual workers.dev hostname, and all launch checks before publication. Identity and the hosting choice are already recorded here.
5. Publish to the selected temporary Worker hostname only when deployment is requested. Configure its canonical and sitemap consistently; keep nonproduction previews from becoming duplicate indexable copies. No custom-domain DNS changes are required for this initial address.
6. Plan old-host handling separately: the current site uses fragment links such as `#services`, `#pricing`, `#reviews`, and `#contact`. Fragments are not sent to a server; preserve meaningful anchors where appropriate, but do not claim server redirects can individually match them. GitHub-hosted migration notices or redirects require a separate update to that host. Verify any additional inbound paths before deciding mappings.
7. After cutover, verify the live host, HTTPS, deep links, unknown-path status, email/profile links, and social shares. If a form is later added, test actual receipt with authorized controlled data. Record the last known-good deployment and restore procedure before relying on automatic production deployment.

No credentials, hosting accounts, domain ownership, registrar state, DNS records, or deployment permissions have been inspected or changed during planning.

## 11. Implementation checklist

This checklist is for future work. Completing this planning document does not authorize any implementation or deployment item below. Start the next phase only when the owner requests it.

### Phase 0 — planning completed in this task

- [x] Inspect the tracked repository files and initial Git status.
- [x] Inspect the current public page and both supplied reference homepages.
- [x] Identify unsupported content and the simulated contact handler.
- [x] Ask for public identity, background, real projects, contact details, and domain preferences.
- [x] Draft positioning, a sitemap, page copy, and a missing-content inventory.
- [x] Document the agreed stack and proposed implementation/migration approach.
- [x] Save this plan without changing site source or deployment configuration.
- [x] Record the owner's discovery answers and revise the provisional copy.
- [x] Resolve the temporary address: Cloudflare Workers with workers.dev.
- [x] Select an engagement model under the owner's delegation.

### Phase 1 — finalize content and design

- [x] Record identity, supplied capabilities, remote/Broward County arrangement, and the selected engagement model.
- [x] Replace biography/contact placeholders and choose an email-first contact destination.
- [ ] Define project-specific scope, prices, durations, and support terms when quoting; no public promises are needed for the initial site.
- [ ] Gather and clear project evidence; include or omit Projects accordingly.
- [ ] Audit every claim and exclude existing unverified reviews, prices, and guarantees.
- [ ] Choose brand assets, palette, typography, and page layouts.
- [ ] Review sitemap and detailed page layouts; temporary workers.dev hosting and email contact are already selected.
- [ ] Define privacy facts and any required review based on actual data collection.

### Phase 2 — build foundation after implementation is requested

- [ ] Preserve the existing version and create the implementation branch.
- [ ] Initialize Astro + TypeScript, strict typing, a supported Node version, and a lockfile.
- [ ] Add the shared layout, semantic landmarks, navigation, footer, metadata, and design tokens.
- [ ] Build reusable presentation components and accessible mobile navigation/FAQ.
- [ ] Add validated project content and exclude drafts from routes and sitemap.
- [ ] Set up static output and local Workers asset configuration, including a real 404.
- [ ] Add accurate development/content instructions to README.

### Phase 3 — implement content and inquiry path

- [ ] Build all confirmed public routes and approved project stories.
- [ ] Add cleared imagery, alt text, favicon, and original sharing assets.
- [ ] Add the ivy.techops@gmail.com email CTA and GitHub IskaIV link; check both destinations.
- [ ] If a real form is separately selected later, implement its backend and actual submission success/error states.
- [ ] Add the factual privacy notice and chosen measurement setup.
- [ ] Add canonical URLs, sitemap, robots behavior, and evidence-supported structured data.

### Phase 4 — verify before release

- [ ] Run locked install, `astro check`, and production build successfully.
- [ ] Check internal links, route coverage, draft exclusion, and unknown-path HTTP 404.
- [ ] Verify core content/navigation with JavaScript disabled and reduced motion enabled.
- [ ] Review keyboard behavior, headings, focus, contrast, form labels/errors, and mobile layouts.
- [ ] Measure representative page performance and inspect optimized assets.
- [ ] If a form exists, verify inbox receipt plus validation, provider failure, and abuse-handling behavior with controlled test data.
- [ ] Search production content for placeholders, obsolete PC-repair branding, and unsupported claims.
- [ ] Review final identity, project permissions, privacy facts, and working contact destinations.

### Phase 5 — release only after deployment is requested

- [ ] Select and configure one GitHub-to-Workers build/deployment path.
- [ ] Verify the nonproduction Workers site, routing, contact flow, and metadata.
- [ ] Assign and confirm the actual workers.dev hostname, enable the chosen public route, and use that URL for canonicals and sitemap.
- [ ] Record rollback steps and the last known-good site/deployment.
- [ ] Publish to the chosen workers.dev address and verify HTTPS, deep links, and unknown-path status.
- [ ] Update or retire the old GitHub-hosted entry point according to the migration decision.
- [ ] Check production email/profile links and search/social metadata; test actual receipt only if a form is added and controlled test messages are authorized.
- [ ] When a custom domain is chosen later, plan ownership, DNS/email preservation, hostname redirects, and metadata migration separately.

### Phase 6 — maintain after launch

- [ ] Document who owns content, dependencies, inquiries, hosting, and maintenance.
- [ ] Add real project evidence as it becomes available and keep outcome claims current.
- [ ] Review inquiry quality, broken links, and form delivery before expanding features.
- [ ] Revisit new pages, analytics, or demos only when there is a clear purpose.

## 12. Completion and remaining decisions

Planning deliverable: repository/public-site inspection, inspiration review, positioning, plain-language service explanations, sitemap, provisional page copy, content gaps, architecture, migration approach, and implementation checklist saved here.

Recorded decisions: IVy TechOps, Iskandar Verdiyev, AI Automation Engineer, supplied background and skills, remote/Broward County availability, email ivy.techops@gmail.com, GitHub IskaIV, the assessment/pilot/rollout/support engagement model, three project examples, and Cloudflare Workers with a temporary workers.dev address.

Remaining content work: complete each project's actual tools, type/date/status, role/collaborators, publication limits, and cleared visual evidence. Add measured outcomes only if available. Choose final page designs and set the actual Worker hostname during later setup. Other contact links and a custom domain are deferred, not launch blockers. Commercial terms remain scope-specific.

The site has not been implemented or deployed. Only this planning document has changed. Further project details can be incorporated as supplied; any build or release remains a separate requested phase.
