export type TeamMember = {
  name: string;
  role: string;
  image: string;
  line: string;
};

export const team: TeamMember[] = [
  {
    name: "Paul Whitaker",
    role: "Director",
    image: "/team/paul-whitaker.jpg",
    line: "Runs Ridgeway and leads the engineering and back office teams. Paul looks at every complaint and every escalation himself.",
  },
  {
    name: "Sarah Cole",
    role: "Account Manager",
    image: "/team/sarah-cole.jpg",
    line: "Looks after our contract customers: quotes over £1,000, monthly reports, KPIs, quarterly reviews and complaints.",
  },
  {
    name: "Megan Ellis",
    role: "Service Desk and Admin",
    image: "/team/megan-ellis.jpg",
    line: "Runs the service desk. Logs every job that comes in, gives it a reference and a priority, books the engineer and keeps you updated.",
  },
  {
    name: "Rachel Moore",
    role: "Operations Coordinator and H&S Lead",
    image: "/team/rachel-moore.jpg",
    line: "Plans the week's work and the vans, keeps the RAMS library and the compliance tracker, and approves purchase orders.",
  },
  {
    name: "Matt Taylor",
    role: "Engineering Manager",
    image: "/team/matt-taylor.jpg",
    line: "Leads the engineers, checks every worksheet, signs job-specific RAMS and permits, and runs the on-call rota.",
  },
  {
    name: "Dylan Hart",
    role: "Multi-trade Engineer",
    image: "/team/dylan-hart.jpg",
    line: "Plumbing, heat pump and air conditioning servicing and building repairs, so a job that needs more than one trade needs only one visit.",
  },
  {
    name: "Kate Lowe",
    role: "Finance",
    image: "/team/kate-lowe.jpg",
    line: "Runs invoicing, credit control and the purchase ledger, and answers accounts payable queries.",
  },
  {
    name: "Claire Hughes",
    role: "HR and Training",
    image: "/team/claire-hughes.jpg",
    line: "Recruits and trains the team, and keeps the training matrix: every card, qualification and DBS check, with its renewal date.",
  },
];

export const engineers = [
  { name: "Dylan Hart", trade: "Multi-trade: plumbing, heat pump and air conditioning servicing, F-Gas" },
  { name: "Sam Fletcher", trade: "Plumbing and heating: gas, hot water and heat pump installation, Gas Safe registered" },
  { name: "Lewis Byrne", trade: "Electrical, door entry and emergency lighting, and our small works estimator" },
  { name: "Priya Shah", trade: "Electrical: EICRs, fire alarms and emergency lighting" },
  { name: "Tom Akers", trade: "Apprentice engineer, studying plumbing and heating at Harlow College" },
];
