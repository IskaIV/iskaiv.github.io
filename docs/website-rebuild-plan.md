# Personal-brand website rebuild plan

Prepared: October 14, 2026. Status: planning draft; personal details requested and awaiting answers.

This document plans the complete replacement of the current PC-repair website with a personal-brand website serving small businesses and startups that need AI agents, workflow automation, and forward deployed engineering. Only this planning document is being added. Implementation, dependency installation, hosting setup, domain changes, and deployment are outside the current task.

## 1. Decisions and open choices

| Topic | Status | Decision or recommendation |
| --- | --- | --- |
| Audience | Agreed | Small businesses and startups. |
| Offer | Agreed | AI agents, workflow automation, and forward deployed engineering. Confirm the specific capabilities and scope against the owner's background. |
| Framework | Agreed | Astro + TypeScript. |
| Repository | Agreed | Keep GitHub as the source of truth, using the existing repository. |
| Hosting | Agreed | Cloudflare Workers hosting static assets. |
| Scope now | Agreed | Inspect, research, ask discovery questions, and save a plan; do not implement or deploy. |
| Evidence | Required | No invented clients, testimonials, credentials, experience, or results. Existing site claims are not verified evidence. |
| Brand | Pending owner input | Prefer a personal name in the masthead. Whether IVy TechOps remains a secondary brand is undecided. |
| Voice | Proposed | First person, direct, practical, and understandable to an owner or founder without an engineering background. |
| Rendering | Proposed | Pre-render public pages to static HTML. Add runtime functionality only for a confirmed need. |
| Primary action | Proposed | “Discuss your project,” leading to the Contact page. Use “Book a call” only if a working booking link is supplied. |
| Proof | Proposed | Real projects with explicit role, status, artifacts, and supported outcomes. Omit sections that lack evidence. |
| Launch structure | Proposed | Home, Services and three service pages, conditional Projects and project pages, About, Contact, Privacy, and 404. |
| Contact method | Pending owner input | Start with verified public email and optional booking link; decide whether an actual form is needed. |
| Domain | Pending owner input | Prefer a memorable personal domain, subject to preference, ownership, availability, and budget. No domain availability has been checked. |
| Commercial terms | Pending owner input | Discovery, scoped project, and embedded engineering are proposed engagement shapes; no prices, duration, or response guarantees are established. |

Proposed choices are planning recommendations, not approved personal facts or business commitments. Resolve the pending items before treating the copy as publishable.

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
- The current phone number, email, geography, hours, and copyright identity are unconfirmed for the new brand. Request fresh public details rather than assuming they are correct.
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

The following questions were sent after inspecting the current site. All answers are currently pending; placeholders below must not be inferred from a username, repository name, or existing copy.

1. **Public identity:** What public-facing name and professional title should appear? Should the masthead use your name, IVy TechOps, or another name?
2. **Professional background:** What roles, responsibilities, experience, skills, and industries can be described accurately? Which services can you confidently deliver? What location or remote/on-site availability is public?
3. **Real project examples:** What 1–3 projects can be featured? For each: the problem, your exact role, what you built, tools used, current status, evidence of the outcome, links/screenshots, and permission or confidentiality limits. Personal and internal projects are valid if labeled accurately. “None yet” is also a valid answer.
4. **Contact details:** Which email, LinkedIn, GitHub profile, optional phone, and optional booking link are public and current? What is the preferred inquiry channel? Any realistic response expectation?
5. **Domain preferences:** Do you own a domain? What names/extensions do you prefer, and what purchase/renewal budget is acceptable? Should the identity be your personal name or a business brand? Is there an existing domain email setup to preserve?
6. **Offer boundaries:** Which project types are preferred? Do you want discovery engagements, fixed-scope builds, ongoing embedded work, maintenance, or some combination? Any industries or work you do not take on?

| Information | Recorded answer |
| --- | --- |
| Public name/title/brand | Pending |
| Biography, skills, and supported credentials | Pending |
| Geography and working arrangement | Pending |
| Real projects and publication permissions | Pending |
| Public contact links | Pending |
| Domain ownership/preferences/budget | Pending |
| Engagement model and service boundaries | Pending |

## 4. Positioning

### Recommended central position

**Hands-on engineering that turns a business workflow into useful software.**

Draft positioning statement, subject to capability confirmation:

> I help small businesses and startups build AI agents, connect their tools, and reduce repetitive work. I work alongside your team to understand the process, build a focused solution, and help you put it into use.

The site should make clear who is doing the work. Avoid agency-scale language or implying a team, customer base, or track record that has not been established.

### Who the site needs to persuade

| Buyer | Likely problem to address | What the page should make clear |
| --- | --- | --- |
| Small-business owner or operations lead | Repeated data entry, missed handoffs, disconnected tools, or information buried in documents. | What part of the process can be improved, how existing tools fit, and what a first project involves. |
| Startup founder or lean product team | A promising AI prototype needs real integrations, evaluation, and a path to everyday use. | The hands-on scope, engineering responsibilities, boundaries, and evidence of relevant work. |

These are audience hypotheses for messaging, not descriptions of actual clients. Narrow the target industries after learning the owner's background.

### Three connected services

| Service | Plain-language promise to explore | Proposed deliverables, subject to capability confirmation |
| --- | --- | --- |
| AI agents | Give a defined workflow an assistant that can use approved information and tools. | Workflow and permission map, focused prototype, evaluation examples, integrations, review points, and handover. |
| Workflow automation | Move information between tools and trigger routine steps consistently. | Process map, integration build, failure handling, operational visibility, and maintenance notes. |
| Forward deployed engineering | Work closely with the team to build software around how the business actually operates. | Discovery with users, scoped engineering work, frequent feedback, rollout support, and documentation. |

Do not list named integrations or technical specialties as supported capabilities until confirmed. Describe goals such as reducing manual work as goals, not guaranteed results.

### Forward deployed engineering in plain language

Forward deployed engineering means an engineer works closely with the people running a business, learns where their daily work gets stuck, builds software around those needs, and helps the team use it. The work can include connecting systems, adapting a prototype, and fixing what emerges when real users try it.

For this site, introduce it as **“Engineering alongside your team”**, followed by the industry term. The proposed delivery model is understand → build → test with users → put into use → hand over. Remote collaboration or on-site work depends on the owner's confirmed arrangement.

This interpretation is consistent with the customer-facing engineering responsibilities described in [Palantir's explanation of forward deployed software engineering](https://www.palantir.com/careers/students-and-early-talent). That reference explains the term; it implies no affiliation, employment, training, or credential for the site owner.

### Tone and conversion rules

- Lead with the business problem and a useful next step. Explain “agent” and “forward deployed” at their first appearance.
- Use “I” for the owner and “your team” for the buyer. State capabilities only after confirmation.
- Prefer specific actions: route an inquiry, prepare a draft, connect records, flag an exception, or surface an answer with its source.
- Describe permissions, review, testing, and handover in ordinary language. Avoid blanket promises about accuracy, security, autonomy, savings, or speed.
- Use one consistent primary CTA: “Discuss your project.” Its destination is `/contact/` until a confirmed booking path justifies a change.
- Use a secondary “See projects” CTA only when real publishable projects are present; otherwise use “Explore services.”

## 5. Reference sites and visual direction

Both supplied homepages were reviewed as live text and in browser screenshots on October 14, 2026. The observations below are inspiration; the proposed adaptation is design judgment.

| Reference | Observed pattern | Adaptation for this personal site |
| --- | --- | --- |
| [Bonsai](https://www.hellobonsai.com/) | Light surfaces, generous space, large direct headline, prominent rounded CTA, grouped business functions, product examples, and customer-story sections. | Use a clear offer and approachable layout. Organize the services around work a business recognizes. Pair explanations with relevant project artifacts. |
| [CoLab](https://www.colabsoftware.com/) | Dark high-contrast hero, large engineering-focused headline, workflow demonstrations, a problem-to-solution narrative, and customer evidence. | Give the engineering work substance through one understandable workflow visual and detailed project stories. Use a dark section sparingly for contrast. |

Borrow the clarity, hierarchy, and use of evidence. Use original copy and original or permission-cleared assets. Neither reference's logos, customers, testimonials, metrics, product screens, or brand identity belong on this site.

### Proposed design brief

- Light neutral primary canvas, dark readable text, and one accent color selected after the brand answer. Keep the site approachable for business owners.
- Strong type hierarchy, a readable body face, consistent spacing, and deliberate section rhythm. Font choices remain open; self-host licensed fonts if selected.
- A personal name and short role description in the header. Navigation: Services, Projects when populated, About, and the Contact CTA.
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
| `/services/ai-agents/` | Explain agents, appropriate tasks, permissions, evaluation, and review. | Discuss an agent workflow | Confirm capability |
| `/services/workflow-automation/` | Explain integrations, repeated tasks, exceptions, and handover. | Discuss a workflow | Confirm capability |
| `/services/forward-deployed-engineering/` | Explain close collaboration and hands-on delivery in plain language. | Discuss engineering support | Confirm capability and working arrangement |
| `/projects/` | Present real work with role, status, and evidence. | Read a project | Publish only with at least one approved real example |
| `/projects/[slug]/` | Explain one real project: problem, role, constraints, solution, evidence, limitations. | Discuss a related problem | One route per approved project |
| `/about/` | Establish personal identity, accurate background, relevant skills, and working approach. | Discuss your project | Required; biography supplied |
| `/contact/` | Provide verified inquiry channels and useful prompts. | Email or use confirmed booking/form | Required; channel verified |
| `/privacy/` | Explain actual data collection, providers, use, and contact. | Return to contact | Required when collecting inquiry data or using relevant third parties |
| Custom 404 page | Explain an unavailable URL and offer recovery links. | Home or Services | Required; verify HTTP 404 |

The service pages support different buyer questions without repeating the same generic sales copy. If the confirmed service scope is narrower, consolidate or remove pages before implementation. Do not publish empty project templates. Defer a blog, newsletter, separate pricing page, client portal, and live AI chat until there is a concrete need and supporting content.

## 7. Draft page copy

All copy is proposed. `[PUBLIC NAME]`, `[CONFIRMED BACKGROUND]`, `[PUBLIC EMAIL]`, and similar markers are editorial placeholders. Remove or replace them before publishing. First-person capability statements require the owner's confirmation. Example use cases below are possibilities, not completed work.

### Home `/`

**Title:** `[PUBLIC NAME] | AI Agents, Automation & Engineering`

**Description:** `AI agents, workflow automation, and hands-on engineering for small businesses and startups. Explore services and discuss your next project with [PUBLIC NAME].`

**Eyebrow:** AI agents · Workflow automation · Engineering alongside your team

**Headline:** Make your daily work easier with software built around your business.

**Introduction:** I help small businesses and startups build AI agents, connect their tools, and turn repetitive processes into working systems. We start with the work your team needs to do, then choose a focused way to improve it.

**Primary CTA:** Discuss your project

**Secondary CTA:** Explore services — change to “See projects” when approved examples exist.

**Problems section — “Where is work getting stuck?”**

- Your team enters the same information in multiple tools.
- Requests move between people without a clear next step.
- Useful answers are buried in documents or previous conversations.
- An AI prototype needs to work with real data and everyday users.

**Services section — “Choose a starting point.”**

- **AI agents:** Assist a defined task using approved information and tools, with review where it matters.
- **Workflow automation:** Connect routine steps so information moves through the process consistently.
- **Engineering alongside your team:** Work together to understand the problem, build the solution, and put it into use.

**Proof section — “A closer look at the work.”** Include only approved project summaries, linked to full stories. Each summary names the project, its type and status, the owner's role, and an evidenced outcome if available. If no examples exist, omit this section and use a clearly labeled example workflow elsewhere.

**Process section — “Start with one useful workflow.”**

1. **Understand:** Map the current process, tools, bottleneck, and people involved.
2. **Define:** Agree on a focused scope, review points, and how to judge whether it works.
3. **Build and test:** Try the solution with representative inputs and the people who will use it.
4. **Put it into use:** Document the setup, ownership, and support needs before handover.

**Personal introduction:** “I'm [PUBLIC NAME]. [CONFIRMED BACKGROUND: one or two sentences connecting actual experience to the work offered.]” Link to About. Do not fill this with generic claims of expertise.

**FAQ:** Use the proposed service FAQ below, adding availability or commercial answers only after confirmation.

**Closing headline:** Tell me about the work you want to improve.

**Closing copy:** Describe the process, the tools you use, and where things get stuck. You do not need a finished technical brief to start a conversation.

### Services `/services/`

**Title:** `AI & Automation Services | [PUBLIC NAME]`

**Headline:** Practical engineering for the work behind your business.

**Introduction:** A useful project starts with a clear problem. We can explore an AI assistant for a specific task, automation between existing tools, or engineering support to take a solution into everyday use.

**Service summaries:** Use the three Home summaries with links to their detailed pages. Name supported tools only after capability confirmation.

**“Ways to work together” — proposed, pending commercial confirmation:**

- **Workflow discovery:** Understand the process and define a practical first build. Proposed output: a process map and a scoped recommendation.
- **Scoped build:** Deliver a defined workflow or integration with agreed acceptance criteria and handover.
- **Embedded engineering:** Work closely with the team over an agreed period as requirements and feedback develop.

Do not publish prices, minimum commitments, turnaround times, free consultations, maintenance coverage, or availability until established.

**CTA:** Discuss your project

### AI agents `/services/ai-agents/`

**Title:** `AI Agents for Business Workflows | [PUBLIC NAME]`

**Headline:** Give one workflow a useful AI assistant.

**Introduction:** An AI agent is software that uses an AI model, relevant information, and permitted tools to carry out a task. The useful starting point is a defined job, with clear limits on what it can read and do.

**“Tasks we could explore” — illustrative possibilities:** Prepare a response from approved reference material; categorize an incoming request; extract information from a document; or suggest a next step for review. Scope and feasibility depend on the tools, data, and confirmed capabilities available.

**“What a focused build should cover”:** The task and its boundaries, access permissions, tool connections, representative evaluation cases, human review, failure handling, and an owner for ongoing changes. These are proposed delivery requirements, not claims about completed projects.

**FAQ — “Will it act without approval?”** The scope should specify which steps are automatic and which require a person. Approval requirements depend on the task and the consequences of an error.

**FAQ — “Can it make mistakes?”** Yes. A useful system needs representative testing, clear limits, and a way to review uncertain or consequential outputs.

**CTA:** Discuss an agent workflow

### Workflow automation `/services/workflow-automation/`

**Title:** `Workflow Automation | [PUBLIC NAME]`

**Headline:** Keep information moving between your tools.

**Introduction:** Repeated handoffs and copy-and-paste work can slow down a small team. Automation can connect routine steps so people spend less effort moving information and more time handling the work that needs their attention.

**“Workflows we could explore” — illustrative possibilities:** Send a qualified inquiry into the right queue; create a task when a record changes; assemble a regular report; or notify someone when an exception needs attention. These are not portfolio claims.

**“Plan for everyday use”:** Agree on the trigger, data mapping, duplicate handling, retries, visibility when something fails, and the person who maintains the workflow. A simpler rule-based integration may be sufficient; discuss AI only where it helps the task.

**FAQ — “Do we need to replace our tools?”** The first step is to review your existing tools and available connections. Whether they can support the workflow depends on their APIs, permissions, and limitations.

**CTA:** Discuss a workflow

### Forward deployed engineering `/services/forward-deployed-engineering/`

**Title:** `Engineering Alongside Your Team | [PUBLIC NAME]`

**Headline:** An engineer who learns the work and builds with your team.

**Introduction:** Forward deployed engineering means working closely with the people who will use the software. I learn the process, help define the problem, build a focused solution, and use the team's feedback to make it fit everyday work. This proposed offer must be confirmed against my actual experience and working arrangement.

**“How the collaboration could work”:** Talk with the people doing the work, inspect the relevant systems, agree on a small first deliverable, share progress, test with real users, and document what the team needs to operate it.

**“When to discuss it”:** Your requirements are still developing; a prototype needs real integrations; or the team needs hands-on help connecting a business problem to an engineering plan.

**FAQ — “Does this mean working in our office?”** Close collaboration is central. Remote and on-site arrangements are [WORKING ARRANGEMENT TO CONFIRM]. Do not imply travel or local availability before confirmation.

**CTA:** Discuss engineering support

### Projects `/projects/` — conditional

**Title:** `Selected Projects | [PUBLIC NAME]`

**Headline:** The problem, the build, and what happened next.

**Introduction:** Explore the work through its context, the part I handled, and the evidence available. Each project states whether it is client work, internal work, a personal project, or an experiment.

**Card template:** `[PROJECT TITLE]` · `[PROJECT TYPE / STATUS]` · `[PROBLEM]` · `[EXACT ROLE]` · `[SUPPORTED OUTCOME, OR OMIT]` · “Read the project.”

**Project page template `/projects/[slug]/`:**

1. Heading: `[PROJECT TITLE]`; short factual summary.
2. Context: who needed what, with permission-cleared identification or an accurate anonymized description.
3. Role: what the owner personally did, and what collaborators or existing systems contributed.
4. Constraints: relevant tools, data, access, timing, and requirements.
5. Build: what was implemented, supported by a cleared screenshot, diagram, repository, or walkthrough.
6. Status and outcome: prototype/pilot/production/retired; date; what was observed. Any metric includes its baseline, period, measurement method, and attribution limits.
7. Limitations and lessons: what remains manual, untested, or unresolved.
8. CTA: “Have a similar workflow? Discuss your project.”

If no real projects are supplied, do not create fictional stories or an empty Projects page. A real personal prototype may qualify once built and honestly described, but building one is outside this planning task.

### About `/about/`

**Title:** `About [PUBLIC NAME] | AI & Workflow Engineering`

**Headline:** I'm [PUBLIC NAME].

**Biography template:** `[CURRENT ROLE OR ACCURATE PROFESSIONAL DESCRIPTION]. My background includes [CONFIRMED EXPERIENCE]. I focus on [CONFIRMED SKILLS / PROBLEM TYPES] for [CONFIRMED AUDIENCE].`

**“How I approach the work” — proposed working principles:** Understand the actual process, agree on a focused scope, test with realistic inputs, and make the setup understandable to the people who will own it.

**Background details:** Include relevant roles, dates, education, credentials, and tools only if supplied and confirmed. Publish geography, remote availability, and a portrait only with the owner's intended public scope.

**Links:** `[PUBLIC LINKEDIN]`, `[PUBLIC GITHUB]`, and other relevant verified links; omit unavailable links.

**CTA:** Discuss your project

### Contact `/contact/`

**Title:** `Discuss Your Project | [PUBLIC NAME]`

**Headline:** What would you like to make easier?

**Introduction:** Tell me what your team is trying to do, which tools are involved, and where the process gets stuck. If you have a timeline or constraints, include them too.

**Primary action:** “Email [PUBLIC EMAIL].” Add “Book a conversation” only with a working booking link and confirmed availability.

**Optional form, only with a real receiving service:** Name, email, company/site (optional), workflow or project description, and timing (optional). Budget can be optional if the owner wants to qualify inquiries. Avoid mandatory phone numbers and file uploads at launch.

**Privacy microcopy:** “Please avoid including confidential data or credentials in your first message.” Link to the actual privacy notice if a form is used. Do not publish a fabricated response-time promise.

**Submission states, if a form is chosen:** Pending: “Sending your message…” Accepted: “Your message was submitted.” Failure: “Your message wasn't submitted. Please try again or email [PUBLIC EMAIL].” Server acceptance is not a guarantee of inbox delivery; test both receipt and failure behavior.

### Privacy `/privacy/`

Prepare a factual notice after the actual contact and analytics choices are made. Cover the data collected, purpose, processors/providers, storage and retention arrangements, tracking if any, contact for privacy questions, and effective date. Do not invent policies or imply certification/compliance. Final content may need appropriate review once geography and providers are known.

### 404 page

**Headline:** This page isn't available.

**Copy:** You can return to the homepage or explore the services.

**Links:** Home · Services · Contact. Serve with a real HTTP 404 response.

## 8. Missing-content inventory

| Priority | Missing item | What is needed | Handling until supplied |
| --- | --- | --- | --- |
| Launch blocker | Public identity | Name, title, and brand relationship. | Keep editorial placeholders. |
| Launch blocker | Accurate background | Short biography, supported experience, skills, and service boundaries. | No inferred credentials or years of experience. |
| Launch blocker | Contact | Verified inbox and intended public links; booking link if desired. | No functional CTA can be finalized. |
| Launch blocker for custom-domain launch | Domain | Preference, ownership/access, budget, canonical hostname, and email/DNS constraints. | Keep domain and canonical configuration unset. |
| Launch blocker | Offer confirmation | Services actually deliverable, engagement shapes, support/handover responsibilities, and working arrangement. | Proposed copy remains provisional. |
| Required if Projects is included | Real examples | At least one complete project record, exact role, status, cleared artifact, and publication permission. | Omit Projects and its navigation if missing. |
| Required for outcome claims | Evidence | Measurement, baseline, period, source, attribution, and permission. | Describe the actual build/status without numerical claims. |
| Required if a form is included | Receiving service | Destination, provider, server-side validation, delivery behavior, failure states, and retention decision. | Prefer verified email as the initial route. |
| Required for data collection | Privacy facts | Actual providers, collection, use, tracking, and retention. | Draft an outline only. |
| Optional | Portrait | Owner-approved image and usage rights. | Use a typographic identity. |
| Optional | Logo and brand assets | Existing rights-cleared assets or a later identity brief. | Use a name wordmark. |
| Optional | Testimonials/client logos | Authentic wording/source and explicit permission to display. | Omit; never synthesize replacements. |
| Optional | Public prices and response policy | Confirmed commercial terms and capacity. | Discuss scope individually; no fabricated offers. |
| Deferred | Articles, newsletter, live demo | Real editorial purpose, maintenance owner, and content. | Exclude from initial launch. |

### Evidence rules

- Keep an internal source and permission record for each published biographical fact, project, endorsement, and result.
- Label client, employer/internal, personal, open-source, and demonstration work accurately. Anonymization must still respect confidentiality.
- Never present an employer's entire product or a team's output as solely the owner's work.
- A shipped artifact without measured results is still useful evidence; describe what exists and what was tested.
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
src/data/site.ts                  # confirmed identity, contact, navigation, domain
src/assets/                       # optimized owner-approved images
public/                           # favicon, share assets, headers/redirects if needed
astro.config.mjs                   # static output, final site URL, sitemap integration
tsconfig.json                     # Astro strict TypeScript configuration
wrangler.jsonc                    # Workers static assets configuration
package.json + lockfile            # pinned dependency inputs and scripts
.github/workflows/                 # checks; deployment workflow only if selected later
```

Prefer scoped Astro/CSS styling and a small shared token system. A client framework or CMS is unnecessary for the proposed launch scope. Choose a supported Node version and compatible stable package versions at implementation time; no version numbers are assumed here.

Use a validated project collection so required content and types are consistent. Include title, slug, summary, project type, exact role, status, date, artifacts/alt text, publication readiness, and optional outcomes with their evidence notes. Sensitive permission records belong outside public build assets. Schema validation does not replace editorial verification. See [Astro content collections](https://docs.astro.build/en/guides/content-collections/).

Plan `astro check` as a separate validation step in addition to the build, using Astro's strict TypeScript template. The dev server alone does not type-check `.astro` files. See [Astro TypeScript guidance](https://docs.astro.build/en/guides/typescript/).

### Contact and measurement

- Recommended initial contact path: verified email plus an optional confirmed booking link.
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

GitHub stays the code host; Cloudflare Workers becomes the website host. The current `iskaiv.github.io` address is GitHub-managed and cannot simply become a Worker Custom Domain in a zone the owner does not control. A selected owned domain or a temporary Worker hostname is needed for the new hosting path.

For a custom domain, confirm ownership and an active Cloudflare zone. Review existing DNS and email records before any cutover. Workers Custom Domains require a zone the account owns and have constraints around existing CNAME records. Configure both the intended canonical hostname and the alternate hostname/redirect behavior deliberately. See [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

Proposed later delivery workflow: a `codex/website-rebuild` branch and reviewable pull request in this repository; locked dependency install, `astro check`, build, and relevant route/contact checks. Decide on one production deployment owner: GitHub Actions with an appropriately scoped credential, or Workers Builds connected to GitHub with clearly configured checks and promotion behavior. Do not enable overlapping deployment systems. Cloudflare supports repository builds and branch previews; review their behavior before configuration. See [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/).

Migration sequence for a later authorized build:

1. Preserve the current version in Git history and record existing public URLs, repository settings, and any custom domains before replacement.
2. Build and review the new site locally without changing production.
3. Once staging deployment is requested, test Workers asset routing, metadata, contact behavior, and 404 responses on a nonproduction host. Keep drafts unindexed and access-restricted where needed.
4. Confirm final identity, evidence, contact, canonical domain, DNS/email preservation, and all launch checks before production cutover.
5. Configure the chosen domain and hostname redirects only as part of the later deployment scope. Avoid duplicate indexable copies; use consistent canonicals and sitemap URLs.
6. Plan old-host handling separately: the current site uses fragment links such as `#services`, `#pricing`, `#reviews`, and `#contact`. Fragments are not sent to a server; preserve meaningful anchors where appropriate, but do not claim server redirects can individually match them. GitHub-hosted migration notices or redirects require a separate update to that host. Verify any additional inbound paths before deciding mappings.
7. After cutover, verify the live host, HTTPS, deep links, unknown-path status, contact receipt, and social shares. Record the last known-good deployment and restore procedure before relying on automatic production deployment.

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
- [ ] Record the owner's discovery answers when received and revise the provisional copy.

### Phase 1 — finalize content and design

- [ ] Confirm identity, service capabilities, target buyers, working arrangement, and engagement terms.
- [ ] Replace biography/contact placeholders and decide the primary CTA destination.
- [ ] Gather and clear project evidence; include or omit Projects accordingly.
- [ ] Audit every claim and exclude existing unverified reviews, prices, and guarantees.
- [ ] Choose brand assets, palette, typography, and page layouts.
- [ ] Confirm sitemap, service-page scope, domain preference, and contact method.
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
- [ ] Connect the verified email/booking channel, or implement the approved form backend.
- [ ] Use actual submission success/error states and a working fallback.
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
- [ ] Confirm canonical domain, domain ownership, and DNS/email preservation.
- [ ] Record rollback steps and the last known-good site/deployment.
- [ ] Publish to the chosen domain and verify HTTPS, alternate-host behavior, and deep links.
- [ ] Update or retire the old GitHub-hosted entry point according to the migration decision.
- [ ] Confirm production contact receipt and search/social metadata.

### Phase 6 — maintain after launch

- [ ] Document who owns content, dependencies, inquiries, hosting, and maintenance.
- [ ] Add real project evidence as it becomes available and keep outcome claims current.
- [ ] Review inquiry quality, broken links, and form delivery before expanding features.
- [ ] Revisit new pages, analytics, or demos only when there is a clear purpose.

## 12. Completion and remaining decisions

Planning deliverable: repository/public-site inspection, inspiration review, positioning, plain-language service explanations, sitemap, provisional page copy, content gaps, architecture, migration approach, and implementation checklist saved here.

Remaining personal decisions: public name, background, confirmed capabilities, real project evidence, contact details, working arrangement, commercial terms, and domain preferences. Their absence does not prevent a complete planning framework, but it prevents final publishable biography, proof, contact copy, and domain configuration.

The site has not been implemented or deployed. The next useful step is to incorporate the discovery answers into this document. Any subsequent build or release is a separate requested phase.
