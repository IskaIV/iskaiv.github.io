export const site = {
  brand: 'IVy TechOps',
  name: 'Iskandar Verdiyev',
  role: 'AI Automation Engineer',
  email: 'ivy.techops@gmail.com',
  github: 'https://github.com/IskaIV',
  location: 'Remote · Broward County, Florida',
  description: 'AI agent teams and workflow automation for small businesses and startups. Work with Iskandar Verdiyev remotely or in Broward County, Florida.',
} as const;

export const navigation = [
  { label: 'Services', href: '/#services' },
  { label: 'The work', href: '/#work' },
  { label: 'My approach', href: '/#approach' },
  { label: 'About', href: '/#about' },
] as const;

// Owner-supplied summaries only. These are not cleared, complete case studies.
export const projectSummaries = [
  { number: '01', category: 'Outreach', title: 'An agent team for the first conversation.', summary: 'Coordinated research, outreach writing, and review, with chat-based interaction and customization.', stages: ['Research', 'Write', 'Review'], icon: 'network' },
  { number: '02', category: 'Real estate', title: 'From property search to a clearer shortlist.', summary: 'An automation that scans an area, checks properties against a buyer’s criteria, and analyzes profitability.', stages: ['Find', 'Screen', 'Analyze'], icon: 'search' },
  { number: '03', category: 'Administration', title: 'A little more order in the everyday.', summary: 'A lightweight AI assistant for daily digests and email, calendar, and task support based on client preferences.', stages: ['Gather', 'Digest', 'Assist'], icon: 'calendar' },
] as const;

export const faqs = [
  { question: 'Where should we start?', answer: 'Bring one process that keeps slowing your team down. We’ll look at the steps, the tools, and the people involved, then define a focused first build. You don’t need a finished technical brief.' },
  { question: 'Do we need to replace our tools?', answer: 'The first step is to review the systems you already use and their available connections. What we can connect depends on their APIs, access permissions, and limitations.' },
  { question: 'Will an AI agent act without approval?', answer: 'We define which steps can run automatically and which need a person. AI can make mistakes, so representative testing, clear limits, and review of consequential actions belong in the scope.' },
  { question: 'Can you work with our team locally?', answer: 'I work remotely and locally in Broward County, Florida. We agree on the working arrangement, scope, and support needs before starting.' },
] as const;
