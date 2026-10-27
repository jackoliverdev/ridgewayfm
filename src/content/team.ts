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
    line: "Runs Ridgeway and leads the engineering and back office teams. Paul signs every formal complaint response himself.",
  },
  {
    name: "Sarah Cole",
    role: "Account Manager",
    image: "/team/sarah-cole.jpg",
    line: "Your contact for Halden Housing, Riverside Care and Northgate Offices. Sarah handles quotes, contract reviews and anything that needs a decision.",
  },
  {
    name: "Megan Ellis",
    role: "Service Desk and Admin",
    image: "/team/megan-ellis.jpg",
    line: "Logs every job that comes in, gives it a reference and a priority, and books the engineer.",
  },
  {
    name: "Rachel Moore",
    role: "Operations Coordinator",
    image: "/team/rachel-moore.jpg",
    line: "Plans the engineers' week and the vans, and leads on health and safety, including every risk assessment and method statement.",
  },
  {
    name: "Matt Taylor",
    role: "Engineering Manager",
    image: "/team/matt-taylor.jpg",
    line: "Leads the engineers and is the person to ask about anything technical on your site.",
  },
  {
    name: "Dylan Hart",
    role: "Multi-trade Engineer",
    image: "/team/dylan-hart.jpg",
    line: "Covers heating, plumbing and building repairs, so a job that needs more than one trade still needs only one visit.",
  },
  {
    name: "Kate Lowe",
    role: "Finance",
    image: "/team/kate-lowe.jpg",
    line: "Raises the invoices, answers accounts payable queries and keeps the rate card up to date.",
  },
  {
    name: "Claire Hughes",
    role: "HR and Training",
    image: "/team/claire-hughes.jpg",
    line: "Recruits and trains the team, and keeps track of every certificate, DBS check and site card the engineers need.",
  },
];

export const engineersLine =
  "On the tools with Dylan: Sam Fletcher (gas and heating, Gas Safe registered), Lewis Byrne (electrical and estimating), Priya Shah (electrical and fire) and Tom Akers, our apprentice, who studies plumbing and heating at Harlow College on Thursdays.";
