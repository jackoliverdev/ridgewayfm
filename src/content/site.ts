export const email = "info@ridgewayfm.co.uk";

export const phones = {
  serviceDesk: { label: "Service desk", number: "07700 900412" },
  outOfHours: { label: "Out-of-hours emergencies", number: "07700 900413" },
};

export function telHref(number: string) {
  return `tel:${number.replace(/\s/g, "")}`;
}

export const hours = {
  office: "Monday to Friday, 08:30 to 17:30",
  outOfHours: "Evenings, nights, weekends and bank holidays, for contract customers",
};

export const header = {
  openMenu: "Open menu",
  closeMenu: "Close menu",
  cta: { label: "Report a repair", href: "/contact#report" },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const footer = {
  legalName: "Ridgeway Facilities Management Ltd",
  blurb:
    "Reactive repairs, planned maintenance and small works for housing associations, care homes and commercial offices in and around Harlow.",
  divisions:
    "Ridgeway Facilities Management and Ridgeway Property Maintenance are the two divisions of Ridgeway, based in Harlow, Essex.",
  contactTitle: "Contact",
  companyTitle: "Company",
  servicesTitle: "Services",
  links: [
    { label: "Services", href: "/services" },
    { label: "About us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Terms and conditions", href: "/terms" },
  ],
  copyright: "© 2026 Ridgeway Facilities Management Ltd. Registered in England and Wales.",
};

export const home = {
  hero: {
    title: "Repairs and maintenance for the buildings people live and work in.",
    body: "Ridgeway Facilities Management looks after reactive repairs, planned maintenance and small works for housing associations, care homes and commercial offices, from our depot in Harlow.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "See our services", href: "/services" },
    image: "/images/hero-building.jpg",
    imageAlt: "A maintained block of flats",
  },
  facts: [
    {
      title: "Based in Harlow",
      body: "Covering Harlow, Epping, Bishop's Stortford and the towns around them.",
    },
    {
      title: "24-hour emergency cover",
      body: "An engineer on call every evening, night and weekend for contract customers.",
    },
    {
      title: "Enhanced DBS checks",
      body: "For every engineer who attends a care home or sheltered housing scheme.",
    },
    {
      title: "Qualified in house",
      body: "Gas Safe, F-Gas, 18th Edition and fire and emergency lighting engineers on our own payroll.",
    },
  ],
  lookAfter: {
    title: "What we look after",
    intro:
      "Most of our work is under contract, with agreed response times and a planned maintenance programme for each building. We take one-off jobs too.",
    items: [
      {
        title: "Reactive repairs",
        body: "You report a fault, we reply with a job reference and a priority, and an engineer attends within the time in your contract.",
        includes: [
          "Heating, hot water and leaks",
          "Electrics, lighting and door entry",
          "Doors, locks, windows and roofs",
          "Made safe on the first visit",
        ],
      },
      {
        title: "Planned maintenance",
        body: "Servicing and statutory testing on a programme we agree with you, with the certificate or record sent when each visit is done.",
        includes: [
          "Boilers, heat pumps and air conditioning",
          "Emergency lighting and fire alarm checks",
          "Water hygiene and TMV servicing",
          "Electrical testing and EICRs",
        ],
      },
      {
        title: "Small works",
        body: "Jobs too big for a repair and too small for a main contractor. We survey, quote line by line, and start once you approve.",
        includes: [
          "Communal lighting upgrades",
          "Plant room pumps and controls",
          "Air conditioning replacements",
          "Fire door and entrance door works",
        ],
      },
    ],
    link: { label: "See our services", href: "/services" },
  },
  sectors: {
    title: "Who we work for",
    intro:
      "We work in occupied buildings, so every contract starts with the site rules: who signs us in, when we can make noise, and who needs to know before we turn anything off.",
    items: [
      {
        title: "Housing associations",
        body: "General needs and sheltered housing, from houses with their own boilers to six-storey blocks with lifts, communal boiler rooms and concierge desks.",
        points: [
          "P1 emergencies attended within 4 hours, 24 hours a day",
          "Scheme managers told 48 hours before any planned shutdown",
          "Your order number on every job, email and invoice",
        ],
        reference: "Halden Housing, including Kingsway Court and Merchant House",
      },
      {
        title: "Care homes",
        body: "Heating, hot water, nurse call, emergency lighting and building repairs, planned around the home's routine and its residents.",
        points: [
          "P1 emergencies attended within 2 hours, 24 hours a day",
          "Every engineer holds an enhanced DBS check",
          "Noisy work kept away from mealtimes",
        ],
        reference: "Riverside Care, a 42-bed home with a 12-bed dementia unit",
      },
      {
        title: "Commercial offices",
        body: "Building services in multi-let offices, with planned maintenance on a fixed monthly charge and reactive work at contract rates.",
        points: [
          "Every request confirmed by email within 30 minutes in working hours",
          "Isolations agreed 48 hours ahead and done outside office hours",
          "Monthly KPI report and a quarterly review",
        ],
        reference: "Northgate Offices, three storeys and 11 tenants at Northgate Park",
      },
    ],
    referenceLabel: "Reference site:",
  },
  howAJobRuns: {
    title: "How a job runs",
    steps: [
      {
        number: 1,
        title: "You tell us",
        body: "Email or call the service desk with the address, what has gone wrong and your order number. A photo of the fault helps.",
      },
      {
        number: 2,
        title: "We log it",
        body: "The service desk raises the job, sets the priority from your contract, books the engineer and replies with the job reference.",
      },
      {
        number: 3,
        title: "An engineer attends",
        body: "The engineer arrives with the site notes, the access details, the asbestos register and the asset history for the building.",
      },
      {
        number: 4,
        title: "You get the paperwork",
        body: "A written summary with before and after photos, and any certificate, comes to you when the job closes. Follow-on work comes as a quote.",
      },
    ],
  },
  reporting: {
    title: "Reporting and account management",
    body: "Each contract customer has a named account manager, and the same people look after the same buildings week after week.",
    items: [
      {
        title: "A monthly report",
        body: "Sent by the fifth working day: jobs raised and completed by priority, performance against your KPIs, planned maintenance completed and open quotes.",
      },
      {
        title: "A quarterly review",
        body: "A meeting with your account manager to go through performance, complaints, assets reaching the end of their life and next year's programme.",
      },
      {
        title: "References on everything",
        body: "Every email, quote and invoice quotes our job reference and your order number, so your accounts team can match it first time.",
      },
      {
        title: "Records you can use",
        body: "Worksheets, photos, readings and certificates for every visit, ready for your compliance records and your auditors.",
      },
    ],
  },
  closing: {
    title: "Looking for a maintenance contractor near Harlow?",
    body: "Tell us about the building, the assets and what you need. We will arrange a site visit and come back with a proposal.",
    primary: { label: "Contact us", href: "/contact" },
  },
};

export const about = {
  title: "About Ridgeway",
  image: "/images/about-courtyard.jpg",
  imageAlt: "A brick courtyard of flats",
  paragraphs: [
    "Ridgeway is a building maintenance company based in Harlow, Essex, with two divisions. Ridgeway Facilities Management looks after housing associations, care homes and commercial offices. Ridgeway Property Maintenance looks after rented homes for housing providers and letting agents.",
    "We cover Harlow, Epping, Bishop's Stortford and the surrounding area. Travel within 15 miles of the depot is free, so most of our customers never see a travel charge.",
    "Our engineers start their first job by 08:00. Before they arrive, they have the site notes, the access rules and the asset register for the building, and every job ends with a written summary to the customer.",
  ],
  howWeWork: {
    title: "How we work",
    items: [
      {
        title: "Every job has a reference",
        body: "Every email about your job, quote or invoice quotes it, along with your own order number.",
      },
      {
        title: "We say what we know",
        body: "If we don't know the arrival time, the cost or the fix yet, we tell you when we will, and we call you then.",
      },
      {
        title: "We own our mistakes",
        body: "If an engineer is late and we didn't warn you, we say so, and tell you what we are changing.",
      },
    ],
  },
  teamTitle: "The team",
  teamIntro:
    "A small, settled team, split between the office and the vans. These are the people you will deal with.",
  engineersTitle: "Our engineers",
  safety: {
    title: "Health and safety",
    intro:
      "Our health and safety policy is signed by the director and reviewed every year. These are the parts our customers ask about most.",
    items: [
      {
        title: "Risk assessments and method statements",
        body: "Routine tasks are covered by our generic RAMS. Roof work, work above 4 metres, hot works, confined spaces and any job over £5,000 get a job-specific RAMS, checked and signed by the engineering manager.",
      },
      {
        title: "Asbestos",
        body: "Engineers check the site's asbestos register before drilling, cutting or lifting a ceiling tile. Where there is no register, they treat the building as if asbestos is present and stop until it is checked.",
      },
      {
        title: "Stopping work",
        body: "Anyone at Ridgeway can stop a job they think is unsafe, and nobody is criticised for doing it in good faith.",
      },
      {
        title: "Lone working",
        body: "Engineers check in and out of every job in the app, and the service desk calls anyone who has not checked out on time. Live electrical work, roof voids, hot works and towers are never done alone.",
      },
      {
        title: "Subcontractors",
        body: "Specialists such as roofers and scaffolders send their RAMS, training cards and at least £5 million public liability insurance before they start, and we keep them on the job record.",
      },
      {
        title: "Vehicles",
        body: "Every van is checked before the first job of the day and tracked, and our engineers never use a handheld phone while driving.",
      },
    ],
  },
  qualifications: {
    title: "Qualifications we hold",
    intro:
      "Our training matrix records every card and qualification with its expiry date, and renewals are booked well before they run out. An engineer never does work that needs a qualification they no longer hold.",
    items: [
      { title: "Gas Safe registration with ACS", body: "Gas appliances, gas safety records and commercial boiler work" },
      { title: "F-Gas Category 1", body: "Refrigerant work on air conditioning and split heat pumps" },
      { title: "18th Edition (BS 7671) and inspection and testing", body: "New circuits, consumer units, EICRs and fixed wire testing" },
      { title: "BS 5839-1 and BS 5266", body: "Fire alarm and emergency lighting servicing" },
      { title: "Unvented hot water (G3)", body: "Unvented cylinders and their safety devices" },
      { title: "Legionella awareness (L8)", body: "Water hygiene monitoring and temperature checks" },
      { title: "Manufacturer heat pump training", body: "Mitsubishi Ecodan servicing and Vaillant aroTHERM plus installation" },
      { title: "IPAF and PASMA", body: "Mobile elevating work platforms and mobile towers" },
      { title: "CSCS and ECS cards", body: "Held by every engineer" },
      { title: "Asbestos awareness", body: "Refreshed every year by every engineer" },
      { title: "Enhanced DBS checks", body: "Renewed every 3 years for care home and sheltered housing work" },
    ],
  },
};

export const contact = {
  title: "Contact us",
  intro:
    "Report a repair, ask for a quote or talk to us about a maintenance contract. Email is best for anything that needs a record, and the service desk is on the phone during office hours.",
  panel: {
    emailLabel: "Email",
    hoursLabel: "Office hours",
    outOfHoursNote:
      "For an emergency on a contract site out of hours, call the out-of-hours line. An engineer and an on-call manager are on the rota every night.",
    area: "Based in Harlow, Essex. Travel within 15 miles of the depot is free.",
  },
  formTitle: "Send us a message",
  routes: {
    title: "Who handles what",
    items: [
      {
        id: "report",
        title: "Report a repair",
        body: "Send the site address, what has gone wrong, any access details and your order number. The service desk replies with a job reference and the priority.",
      },
      {
        id: "quotes",
        title: "Quotes and new contracts",
        body: "Tell us about the building, the assets and what you need. Our account management team arranges a site visit and sends a proposal.",
      },
      {
        id: "accounts",
        title: "Accounts",
        body: "For invoice and remittance queries, quote the invoice number and your purchase order number, and our finance team will reply.",
      },
      {
        id: "careers",
        title: "Careers",
        body: "Send your CV with the role in the subject line. We keep speculative applications on file for when we next recruit.",
      },
    ],
  },
  faqsTitle: "Questions",
  faqs: [
    {
      question: "What counts as an emergency?",
      answer:
        "Anything that puts people or the building at risk: a major leak, unsafe electrics, an insecure door, or no heating or hot water in sheltered housing or a care home. Your contract lists the P1 examples for your site.",
    },
    {
      question: "Do you work for customers without a contract?",
      answer:
        "Yes. We take one-off repairs, small works and fixed-price compliance work. Labour is charged at our standard rates, and out-of-hours visits carry a £45.00 callout fee.",
    },
    {
      question: "How far do you travel?",
      answer:
        "Travel within 15 miles of our Harlow depot is free. Beyond that, travel is charged at the labour rate.",
    },
    {
      question: "Can you send RAMS and insurance before we start?",
      answer:
        "Yes. We send our RAMS, insurance certificates and the engineers' training cards for any site that asks, and a job-specific RAMS where the work needs one.",
    },
    {
      question: "Are your engineers DBS checked?",
      answer:
        "Every engineer who attends a care home or sheltered housing scheme holds an enhanced DBS check, renewed every 3 years.",
    },
  ],
  form: {
    name: { label: "Your name", error: "Enter your name." },
    organisation: {
      label: "Organisation",
      hint: "Leave blank if you are a resident",
    },
    email: {
      label: "Email address",
      error: "Enter an email address, like name@company.co.uk.",
    },
    site: { label: "Site address or postcode" },
    need: {
      label: "What do you need?",
      placeholder: "Choose what you need",
      error: "Choose what you need.",
      options: [
        "Report a repair",
        "Ask for a quote",
        "Planned maintenance or a contract",
        "An invoice or account query",
        "Something else",
      ],
    },
    message: { label: "Message", error: "Tell us what you need." },
    submit: "Send message",
    confirmationHeading: "Thanks, {first name}",
    confirmationBody:
      "Your message is with our service desk. We'll reply to {email}.",
    another: "Send another message",
  },
};

export type TermsSection = {
  title: string;
  paragraphs: string[];
  table?: { caption: string; columns: string[]; rows: string[][] };
};

export const terms = {
  title: "Terms and conditions",
  updated: "Last updated 01/04/2026",
  intro:
    "These are the standard terms for work by Ridgeway Facilities Management Ltd. Where a contract customer's service level agreement says something different, the agreement applies.",
  sections: [
    {
      title: "Quotations",
      paragraphs: [
        "Quotes are valid for 30 days from the date on the quote. After that, material prices may change and we will confirm the price before we start.",
        "Every quote sets out the scope line by line and states what is not included, such as making good, decoration or asbestos removal. Any change to the scope is agreed in writing before we carry it out.",
      ],
    },
    {
      title: "Charges",
      paragraphs: [
        "Labour is charged by the hour, with a minimum charge of one hour and then 30-minute steps. Out-of-hours visits carry a £45.00 callout fee. Travel within 15 miles of our Harlow depot is free, and travel beyond that is charged at the labour rate. All prices exclude VAT.",
      ],
      table: {
        caption: "Labour rates from 01/04/2026 to 31/03/2027, per hour, excluding VAT",
        columns: [
          "Engineer",
          "Normal hours (Monday to Friday, 08:00 to 17:00)",
          "Evenings and Saturdays",
          "Sundays and bank holidays",
        ],
        rows: [
          ["Multi-trade engineer", "£58.00", "£87.00", "£116.00"],
          ["Electrical engineer", "£62.00", "£93.00", "£124.00"],
          ["Plumbing and heating engineer", "£62.00", "£93.00", "£124.00"],
          ["Apprentice, with an engineer", "£28.00", "£42.00", "£56.00"],
        ],
      },
    },
    {
      title: "Equipment",
      paragraphs: [
        "Access and specialist equipment is charged as its own line on the quote or invoice.",
      ],
      table: {
        caption: "Equipment charges, excluding VAT",
        columns: ["Item", "Charge"],
        rows: [
          ["Mobile tower (Ridgeway owned)", "£35.00 per day"],
          ["Scissor lift (hired)", "Hire cost plus 10%"],
          ["Dehumidifier", "£20.00 per day"],
          ["Drain camera survey", "£145.00 per visit"],
        ],
      },
    },
    {
      title: "Materials",
      paragraphs: [
        "Materials are charged at cost plus 15%. We quote any item over £500 before we order it.",
      ],
    },
    {
      title: "Access and site rules",
      paragraphs: [
        "You give us safe access to the site and the assets at the agreed time, and tell us about the site rules, any residents or occupants we need to know about, and the asbestos register for the building.",
        "If we cannot get in at the agreed time, we will leave a card, tell you the same day and rebook. A wasted visit may be charged at the minimum labour charge.",
      ],
    },
    {
      title: "Payment",
      paragraphs: [
        "Invoices are due 30 days from the invoice date. Please quote the invoice number when you pay. We charge interest on late payments under the Late Payment of Commercial Debts (Interest) Act 1998.",
      ],
    },
    {
      title: "Guarantee",
      paragraphs: [
        "We guarantee our workmanship for 12 months from completion. Parts and equipment carry the manufacturer's warranty, which we pass on to you.",
      ],
    },
    {
      title: "Health and safety",
      paragraphs: [
        "We work to our health and safety policy and the RAMS for the job. Our engineers may stop work if they think it is unsafe to continue, and we will tell you why and what is needed to restart.",
      ],
    },
    {
      title: "Insurance and liability",
      paragraphs: [
        "We hold public liability and employers' liability insurance, and we send the certificates on request. We are not liable for loss caused by existing defects in the building that we could not reasonably have known about.",
      ],
    },
    {
      title: "Complaints",
      paragraphs: [
        "If something has gone wrong, email info@ridgewayfm.co.uk with the job reference. We will look into it, and a formal response is signed by our account manager or a director.",
      ],
    },
    {
      title: "Your information",
      paragraphs: [
        "We use the details you give us to carry out, record and invoice the work. We share them only with the engineers and subcontractors who need them for the job, and we never sell them. To see or correct what we hold, email info@ridgewayfm.co.uk.",
      ],
    },
    {
      title: "Law",
      paragraphs: [
        "These terms are governed by the law of England and Wales.",
      ],
    },
  ] satisfies TermsSection[],
  contact: { label: "Contact us", href: "/contact" },
};

export const notFoundPage = {
  title: "We can't find that page",
  body: "The page may have moved. Try our services, or email info@ridgewayfm.co.uk.",
  home: { label: "Go to the home page", href: "/" },
};

export const skipLink = "Skip to content";
