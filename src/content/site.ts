export const email = "info@ridgewayfm.co.uk";

export const header = {
  brand: "Ridgeway",
  descriptor: "Facilities Management",
  emailLabel: "Email us",
  openMenu: "Open menu",
  closeMenu: "Close menu",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footer = {
  legalName: "Ridgeway Facilities Management Ltd",
  blurb:
    "Reactive repairs, planned maintenance and small works for housing associations, care homes and offices in and around Harlow.",
  links: [
    { label: "Services", href: "/services" },
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
  ],
  copyright: "© 2026 Ridgeway Facilities Management Ltd",
};

export const home = {
  hero: {
    title: "Repairs and maintenance for the buildings people live and work in.",
    body: "Ridgeway Facilities Management looks after reactive repairs, planned maintenance and small works for housing associations, care homes and commercial offices, from our depot in Harlow.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "See our services", href: "/services" },
    photoNames: ["Megan Ellis", "Dylan Hart", "Sarah Cole", "Matt Taylor"],
    caption:
      "Megan logs your job, Dylan or one of the engineers attends, and Sarah looks after your account.",
  },
  lookAfter: {
    title: "What we look after",
    items: [
      {
        title: "Reactive repairs",
        body: "Heating, hot water, leaks, lighting, doors and locks. You report it, we reply with a job reference, and an engineer attends within the priority in your contract.",
      },
      {
        title: "Planned maintenance",
        body: "Servicing and testing on a schedule we agree with you: boilers, heat pumps, air conditioning, emergency lighting and water systems. The certificates come to you when each visit is done.",
      },
      {
        title: "Small works",
        body: "Jobs too big for a repair and too small for a main contractor, such as a communal lighting upgrade or a new plant room pump. We quote first and start once you approve.",
      },
    ],
    link: { label: "See our services", href: "/services" },
  },
  whoWeWorkFor: {
    title: "Who we work for",
    items: [
      {
        title: "Housing associations",
        body: "Homes and communal areas for Halden Housing, including Kingsway Court, 72 flats over six storeys, and Merchant House, sheltered housing for residents aged 60 and over.",
      },
      {
        title: "Care homes",
        body: "Riverside Care, a 42-bed home with a 12-bed dementia unit. Every engineer who attends holds an enhanced DBS check, and we plan our visits around the home's routine.",
      },
      {
        title: "Commercial offices",
        body: "Northgate Offices, a three-storey multi-let building at Northgate Park. Job requests come to us by email, and each one gets a reference in the reply.",
      },
    ],
  },
  howAJobRuns: {
    title: "How a job runs",
    steps: [
      {
        number: 1,
        title: "You tell us",
        body: "Email us the address and what has gone wrong. A photo helps.",
      },
      {
        number: 2,
        title: "We log it",
        body: "The service desk raises the job, sets the priority from your contract and replies with the job reference.",
      },
      {
        number: 3,
        title: "An engineer attends",
        body: "The engineer has the site notes, the access details and the asset history before they arrive.",
      },
      {
        number: 4,
        title: "You get the paperwork",
        body: "A summary of the work, and any certificate, comes to you by email. Anything else we find comes as a separate quote.",
      },
    ],
  },
  closing: {
    title: "Looking for a contractor near Harlow?",
    body: "Tell us about the building and what you need. Sarah Cole, our account manager, will reply.",
    primary: { label: "Contact us", href: "/contact" },
  },
};

export const about = {
  title: "About Ridgeway",
  paragraphs: [
    "Ridgeway is a building maintenance company based in Harlow, with two divisions. Ridgeway Facilities Management looks after housing associations, care homes and offices. Ridgeway Property Maintenance looks after rented homes for housing providers and letting agents.",
    "Our engineers start their first job by 08:00. Before they arrive, they have the site notes, the access rules and the asset register for the building, and every job ends with a written summary to the customer.",
  ],
  teamTitle: "The team",
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
};

export const contact = {
  title: "Contact us",
  paragraphs: [
    "For a repair on a contract site, include the site address and what has gone wrong. For a quote or a new contract, tell us about the building.",
    "For an emergency out of hours, use the number in your contract.",
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

export const terms = {
  title: "Terms and conditions",
  updated: "Last updated 01/04/2026",
  intro:
    "These are the standard terms for work by Ridgeway Facilities Management Ltd. Where a contract customer's service level agreement says something different, the agreement applies.",
  sections: [
    {
      title: "Charges",
      body: "Labour is charged by the hour, with a minimum charge of one hour and then 30-minute steps. Out-of-hours visits carry a £45.00 callout fee. Travel within 15 miles of our Harlow depot is free, and travel beyond that is charged at the labour rate. All prices exclude VAT.",
    },
    {
      title: "Materials",
      body: "Materials are charged at cost plus 15%. We quote any item over £500 before we order it.",
    },
    {
      title: "Payment",
      body: "Invoices are due 30 days from the invoice date. We charge interest on late payments under the Late Payment of Commercial Debts (Interest) Act 1998.",
    },
  ],
  contact: { label: "Contact us", href: "/contact" },
};

export const notFoundPage = {
  title: "We can't find that page",
  body: "The page may have moved. Try our services, or email info@ridgewayfm.co.uk.",
  home: { label: "Go to the home page", href: "/" },
};

export const skipLink = "Skip to content";
