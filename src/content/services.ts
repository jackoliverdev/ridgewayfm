export const servicesIntro = {
  title: "What we do",
  body: "Our engineers cover the hard services most buildings depend on: heating, water, power, fire safety and the building fabric. Most of our work is under contract with agreed response times and a planned maintenance programme, and we take one-off jobs too.",
  jumpTitle: "On this page",
  jumpLinks: [
    { label: "Trades", href: "#trades" },
    { label: "Planned maintenance", href: "#planned-maintenance" },
    { label: "Response times", href: "#response-times" },
    { label: "Out of hours", href: "#out-of-hours" },
    { label: "Small works", href: "#small-works" },
    { label: "Fixed prices", href: "#fixed-prices" },
  ],
};

export type Trade = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  covers: string[];
  tasks: { task: string; frequency: string }[];
  safety: string[];
  records: string;
};

export const trades = {
  title: "Trades",
  intro:
    "Each trade has its own part of the Ridgeway Maintenance Standards, our planned maintenance task library. It sets out what we do to each asset, how often, and the safety steps that come first.",
  link: "Read about this trade",
  back: "All services",
  coversTitle: "What this covers",
  tasksTitle: "Planned maintenance tasks",
  tasksIntro:
    "A selection of the tasks in our standard for this trade. Your programme is agreed against your asset register, and where the manufacturer asks for more, we do what the manufacturer asks.",
  tasksColumns: ["Task", "How often"],
  safetyTitle: "Before we start",
  recordsTitle: "What you get",
  closing: {
    title: "Need this on your site?",
    body: "Tell us about the building and the assets, and we will put together a planned maintenance programme and a price.",
  },
  contact: { label: "Contact us", href: "/contact" },
  items: [
    {
      slug: "heating-and-hot-water",
      title: "Heating and hot water",
      summary:
        "Boilers, cylinders, radiators and controls, including mixing valves in care homes and sheltered housing.",
      image: "/images/trade-heating.jpg",
      imageAlt: "A commercial boiler plant room",
      paragraphs: [
        "We look after domestic and communal heating and hot water: gas boilers, commercial plant rooms, unvented cylinders, calorifiers, radiators, controls and thermostatic mixing valves.",
        "Gas work is carried out by our Gas Safe registered engineer with the right ACS categories for the appliance, domestic or commercial.",
        "In a care home or sheltered scheme we agree with the manager or warden how long the heating or hot water will be off before we isolate it.",
      ],
      covers: [
        "Domestic and communal gas boilers, including landlord gas safety records",
        "Commercial plant rooms, pressurisation units and boiler sequencing",
        "Unvented cylinders, calorifiers and thermostatic mixing valves",
        "Radiators, programmers, room thermostats and thermostatic radiator valves",
      ],
      tasks: [
        { task: "Landlord gas safety check of every gas appliance and flue", frequency: "Annually" },
        { task: "Combustion analysis with a calibrated flue gas analyser", frequency: "Annually" },
        { task: "Plant room ventilation, emergency gas shut-off and flue interlock checks", frequency: "Annually" },
        { task: "Boiler sequencing, weather compensation and flow and return temperatures", frequency: "Every 6 months" },
        { task: "Unvented cylinder safety valves, tundish and expansion vessel", frequency: "Annually" },
        { task: "TMV mixed temperature and fail-safe test", frequency: "Every 6 months, or quarterly in care settings" },
      ],
      safety: [
        "We check the job notes and the asbestos register before opening a boiler room, cupboard or ceiling void.",
        "Appliances are isolated, locked off and proved dead before any cover comes off, and gas pipework is tightness tested before and after the work.",
        "In sheltered housing and care homes, the warden or manager is told before heating or hot water is turned off.",
      ],
      records:
        "A gas safety record or service record for each appliance, with the combustion readings, pressures and temperatures recorded on the worksheet.",
    },
    {
      slug: "heat-pumps",
      title: "Heat pumps",
      summary:
        "Servicing, fault finding and repairs on air source heat pumps, including Ecodan and aroTHERM plus units.",
      image: "/images/trade-heat-pump.jpg",
      imageAlt: "An air source heat pump against a brick wall",
      paragraphs: [
        "We service, find faults on and repair air source heat pumps, including Mitsubishi Ecodan and Vaillant aroTHERM plus systems, and their buffer vessels, pumps and cylinders.",
        "Our engineers hold the manufacturers' service courses. Refrigerant work on split systems is carried out only by our F-Gas qualified engineer. Sealed propane monobloc units are never opened on site and go back to the manufacturer.",
        "We also check the settings. A heat pump that runs long and low on the right weather compensation curve costs far less to run than one that cycles on and off.",
      ],
      covers: [
        "Outdoor units, coils, drains, brackets and fans",
        "Strainers, flow rate, system pressure and the expansion vessel",
        "Controllers, weather compensation and the cylinder legionella cycle",
        "Fault finding from the controller code and the manufacturer's manual",
      ],
      tasks: [
        { task: "Clear the evaporator coil, fins and base, and keep the clearance around the unit", frequency: "Every 6 months, and after autumn" },
        { task: "Check for refrigerant leaks and record the result", frequency: "Annually" },
        { task: "Clean the magnetic filter and the strainer, and check the flow rate against design", frequency: "Annually" },
        { task: "Check the system pressure and the expansion vessel pre-charge", frequency: "Annually" },
        { task: "Check the legionella cycle runs weekly at 60°C or above", frequency: "Annually" },
        { task: "Record the fault history and the seasonal performance figures", frequency: "Annually" },
      ],
      safety: [
        "The unit is isolated at the local isolator and proved dead, and we wait for the inverter to discharge before opening it.",
        "Refrigerant circuits are only opened by an F-Gas qualified engineer, and never on sealed R290 units.",
        "In care homes we agree when the heating can be off, and keep it to the shortest time possible.",
      ],
      records:
        "A service record with flow rates, pressures, temperatures and the fault history, and a note of any setting we changed and why.",
    },
    {
      slug: "air-conditioning-and-ventilation",
      title: "Air conditioning and ventilation",
      summary:
        "Split and multi-split air conditioning, extract fans and ventilation in offices, kitchens and treatment rooms.",
      image: "/images/trade-air-conditioning.jpg",
      imageAlt: "A ceiling air conditioning unit in an office",
      paragraphs: [
        "We look after split and multi-split air conditioning, extract fans, mechanical ventilation and air handling units in offices, kitchens and treatment rooms.",
        "Comms rooms and medication rooms get extra attention. We check the high-temperature alarm works, and that a standby unit takes over where one is fitted. A failure in one of these rooms is a P1 at any time.",
        "We do not carry out TM44 air conditioning energy assessments, and commercial kitchen grease ducts are cleaned by a specialist. We tell you when either is due.",
      ],
      covers: [
        "Indoor and outdoor units, filters, coils and condensate drains",
        "Critical cooling in comms rooms and medication rooms",
        "Extract fans in kitchens and bathrooms, including a check of the extract rate",
        "Air handling units, their filters, fans and dampers",
      ],
      tasks: [
        { task: "Clean or replace the indoor unit filters", frequency: "Quarterly, or monthly in dusty areas and kitchens" },
        { task: "Clean the indoor coil, drain tray and condensate pump, and flush the drain line", frequency: "Every 6 months" },
        { task: "Measure the off-coil temperature and the difference across the coil", frequency: "Every 6 months" },
        { task: "Test the run and standby changeover and the high-temperature alarm on critical rooms", frequency: "Quarterly" },
        { task: "Refrigerant leak check and electrical terminations", frequency: "Annually" },
        { task: "Air handling unit filters, belts and pressure drop", frequency: "Quarterly" },
      ],
      safety: [
        "Units are isolated and proved dead before any cover comes off.",
        "Refrigerant work is only carried out by an F-Gas qualified engineer.",
        "Roof-mounted condensers are only worked on behind fixed edge protection, with a permit where the site needs one.",
      ],
      records:
        "A service record for each unit with temperatures and leak check results, and the refrigerant log updated where the system needs one.",
    },
    {
      slug: "pumps-and-water-systems",
      title: "Pumps and water systems",
      summary:
        "Booster sets, circulation pumps, cold water storage tanks and the routine water hygiene tasks on a site.",
      image: "/images/trade-pumps.jpg",
      imageAlt: "A cold water booster pump set",
      paragraphs: [
        "We look after heating circulators, cold water booster sets, cold water storage tanks and the routine monitoring a building's water hygiene programme needs.",
        "Hot and cold water temperatures are recorded at the sentinel outlets every month, so your legionella records are always up to date. A reading outside the limits is reported the same day.",
        "Where an inspection finds debris in a tank, or your risk assessment asks for it, we arrange a specialist clean and disinfection.",
      ],
      covers: [
        "Heating circulation pumps, including twin-head duty and standby",
        "Cold water booster sets and their pressure vessels",
        "Cold water storage tanks, lids, insulation and overflows",
        "Monthly water hygiene temperature checks and outlet flushing",
      ],
      tasks: [
        { task: "Hot water flow and return temperatures at the calorifier or cylinder", frequency: "Monthly" },
        { task: "Hot and cold sentinel outlet temperatures", frequency: "Monthly" },
        { task: "Booster set pressures, duty rotation and controller alarms", frequency: "Quarterly" },
        { task: "Cold water storage tank inspection: lid, vent, overflow and insulation", frequency: "Every 6 months" },
        { task: "Clean and descale showerheads and hoses", frequency: "Quarterly" },
        { task: "Circulator display, alarm history and duty and standby changeover", frequency: "Every 6 months" },
      ],
      safety: [
        "We check the asbestos register before opening any tank room or riser.",
        "Pumps are isolated electrically and on the water side before they are opened.",
        "We tell the building manager before any planned water shutdown, and 48 hours ahead in sheltered housing.",
      ],
      records:
        "A temperature log for every sentinel outlet, ready for your water hygiene records, and a report of any reading outside the limits.",
    },
    {
      slug: "electrical",
      title: "Electrical",
      summary:
        "Fault finding, small installations, condition reports, fixed wire testing, lighting and door entry systems.",
      image: "/images/trade-electrical.jpg",
      imageAlt: "An electrical distribution board",
      paragraphs: [
        "We carry out fault finding, small installations, Electrical Installation Condition Reports and fixed wire testing, with our own 18th Edition qualified electrical engineers.",
        "A C1 observation, where danger is present, is made safe before the engineer leaves and reported to you straight away. C2 and further investigation items are quoted within 28 days, which in rented homes is a legal deadline.",
        "Communal lighting, door entry, access control and portable appliance testing on contract sites sit in the same trade.",
      ],
      covers: [
        "Electrical Installation Condition Reports and fixed wire testing",
        "Distribution boards, RCDs, earthing and bonding",
        "Communal and external lighting, including failed lamps and drivers",
        "Door entry, access control and portable appliance testing",
      ],
      tasks: [
        { task: "Fixed wire testing (EICR) in housing, offices and care homes", frequency: "Every 5 years" },
        { task: "Distribution board inspection and circuit chart check", frequency: "Annually" },
        { task: "Thermal imaging of distribution boards under load on commercial sites", frequency: "Annually" },
        { task: "RCD test with an instrument", frequency: "Annually" },
        { task: "Communal and external lighting, photocells and timers", frequency: "Quarterly" },
        { task: "Door entry handsets, door release on fire alarm and on power failure", frequency: "Annually" },
      ],
      safety: [
        "Circuits are isolated, locked off and proved dead before work starts. Live electrical work is never done alone.",
        "Isolations in occupied buildings are agreed in advance, and done outside office hours in commercial buildings.",
        "Anything immediately dangerous is made safe and labelled before we leave.",
      ],
      records:
        "An Electrical Installation Certificate, Minor Works Certificate or EICR, issued by the engineer and sent to you when the job closes.",
    },
    {
      slug: "fire-and-emergency-lighting",
      title: "Fire and emergency lighting",
      summary:
        "Emergency lighting tests, repairs and upgrades, fire alarm servicing and the common-part checks on residential blocks.",
      image: "/images/trade-fire.jpg",
      imageAlt: "Emergency lighting in a communal corridor",
      paragraphs: [
        "We test, repair and upgrade emergency lighting to BS 5266, and service fire detection and alarm systems to BS 5839-1, with half the devices tested at each six-monthly visit so every device is tested every year.",
        "On residential blocks we also check the fire doors, escape routes and the dates on the specialist tests for extinguishers and dry risers.",
        "Where another contractor services the fire alarm, we can take the first visit to a fault when they cannot attend within the emergency time.",
      ],
      covers: [
        "Emergency lighting monthly and annual tests, repairs and upgrades",
        "Fire alarm inspection, servicing and fault visits",
        "Fire doors and escape route checks in communal areas",
        "Log book records for every test",
      ],
      tasks: [
        { task: "Emergency lighting functional test of every fitting and exit sign", frequency: "Monthly" },
        { task: "Emergency lighting full-duration test, normally 3 hours", frequency: "Annually" },
        { task: "Fire alarm inspection and service, half the devices each visit", frequency: "Every 6 months" },
        { task: "Fire alarm cause and effect: door releases, lift homing, alarm receiving centre", frequency: "Annually" },
        { task: "Communal fire doors: closers, latches, gaps, strips and seals", frequency: "Quarterly" },
        { task: "Escape routes clear of storage and combustible items", frequency: "Monthly" },
      ],
      safety: [
        "We tell the site and the alarm receiving centre before any test, and put the system back to normal before we leave.",
        "Full-duration tests are planned for a time when the building can manage without emergency lighting while the batteries recharge.",
        "Detector heads are covered under the site's permit during dusty work.",
      ],
      records:
        "The fire alarm and emergency lighting log books completed at every visit, and a service certificate for the system.",
    },
    {
      slug: "building-fabric-and-lifts",
      title: "Building fabric and lifts",
      summary:
        "Doors, locks, windows, roofs, gutters, shutters and gates, plus the checks we make around a passenger lift.",
      image: "/images/trade-fabric.jpg",
      imageAlt: "A communal entrance door and shutter",
      paragraphs: [
        "We repair doors, locks, windows, plaster, flooring and roofs, and we look after gutters, shutters, gates and automatic doors.",
        "Passenger lifts are maintained by the lift contractor and examined by the insurer. We check the alarm, the car lighting and that the LOLER examination is in date, and arrange the lift specialist when something is wrong. We do not enter the shaft, the pit or the motor room.",
        "If a lift is out of service in a block where residents cannot use the stairs, we tell the scheme manager straight away.",
      ],
      covers: [
        "Roofs, gutters, rainwater goods and the external walls",
        "Doors, locks, windows, restrictors and automatic doors",
        "Roller shutters, powered gates and barriers",
        "Lift alarm, lighting and examination dates, with a specialist arranged for the lift itself",
      ],
      tasks: [
        { task: "Clear gutters, outlets and hoppers", frequency: "Every 6 months, or quarterly near trees" },
        { task: "Communal entrance doors: closer, lock and door entry release", frequency: "Quarterly" },
        { task: "Window restrictors above ground floor in care homes and sheltered housing", frequency: "Every 6 months" },
        { task: "Automatic doors: sensors, break-out and opening on power loss", frequency: "Every 6 months" },
        { task: "Powered gates: force testing at the closing edges and safety devices", frequency: "Every 6 months" },
        { task: "Lift alarm, car lighting and LOLER report in date", frequency: "Quarterly" },
      ],
      safety: [
        "Roof work and work above 4 metres get a job-specific RAMS, and roof work stops in high winds.",
        "Towers and platforms are only used by engineers with PASMA or IPAF, and never alone.",
        "We check the asbestos register before drilling or cutting into the fabric.",
      ],
      records:
        "Before and after photos on the worksheet, and a note of any defect or end-of-life item with a quote to put it right.",
    },
  ] satisfies Trade[],
};

export const plannedMaintenance = {
  title: "Planned maintenance",
  intro:
    "We build each programme from your asset register, the law and the manufacturers' instructions, then book the visits so you never chase a certificate. This is what a typical compliance calendar looks like.",
  caption: "A typical compliance calendar",
  columns: ["Task", "How often", "Standard or regulation"],
  rows: [
    ["Emergency lighting functional test", "Monthly", "BS 5266-1"],
    ["Emergency lighting full-duration test", "Annually", "BS 5266-1"],
    ["Fire alarm inspection and service", "Every 6 months", "BS 5839-1"],
    ["Hot and cold water temperature checks", "Monthly", "HSE ACOP L8"],
    ["TMV service and temperature check", "Every 6 months, quarterly in care settings", "Manufacturer's instructions"],
    ["Landlord gas safety check", "Annually", "Gas Safety (Installation and Use) Regulations 1998"],
    ["Air conditioning service", "Every 6 months", "F-Gas Regulation for leak checks"],
    ["Cold water storage tank inspection", "Every 6 months", "Water Supply (Water Fittings) Regulations 1999"],
    ["Automatic door and powered gate safety checks", "Every 6 months", "BS EN 16005 and BS EN 12453"],
    ["Fixed wire testing (EICR)", "Every 5 years", "BS 7671"],
  ],
  gradesTitle: "How we grade each task",
  grades: [
    {
      title: "C1: statutory or life safety",
      body: "Never skipped, and never deferred without the engineering manager's written agreement.",
    },
    {
      title: "C2: keeps the building running",
      body: "Done to the programme, and moved only by agreement with you.",
    },
    {
      title: "C3: extends the life of the asset",
      body: "Done on the visit where it makes sense, and noted on the worksheet.",
    },
  ],
};

export const responseTimes = {
  title: "Response times",
  intro:
    "Every job gets a priority from your contract when the service desk logs it. These are the attendance times in our current contracts, by type of building.",
  caption: "Attendance times by priority and type of building",
  columns: [
    "Priority",
    "For example",
    "Housing associations",
    "Care homes",
    "Commercial offices",
  ],
  rows: [
    [
      "P1 Emergency",
      "A major leak, unsafe electrics, an insecure door, no heating or hot water for vulnerable residents",
      "4 hours, 24 hours a day",
      "2 hours, 24 hours a day",
      "4 hours in the working day, 6 hours at other times",
    ],
    [
      "P2 Urgent",
      "Partial loss of heating, the only toilet blocked, a broken window, a fire door closer failed",
      "24 hours",
      "8 hours",
      "1 working day",
    ],
    [
      "P3 Routine",
      "A dripping tap, a sticking door, a small plaster repair",
      "5 working days",
      "3 working days",
      "3 working days",
    ],
    ["P4 Planned", "Programmed works", "As agreed", "As agreed", "As the planned maintenance programme"],
  ],
  note: "P1 jobs are made safe within 24 hours. Each contract sets its own times, its own KPIs and its own reporting.",
};

export const outOfHours = {
  title: "Out of hours",
  body: [
    "An engineer is on call every evening, night and weekend for our contract customers' emergencies, with an on-call manager behind them.",
    "Call the out-of-hours line with the site and the fault. The engineer calls you back to confirm they are on the way, makes the job safe on the first visit, and the service desk picks up any follow-on work the next working day.",
  ],
  lineLabel: "Out-of-hours line",
  note: "For customers without a contract, out-of-hours visits carry a £45.00 callout fee.",
};

export const smallWorks = {
  title: "Small works",
  intro:
    "Jobs too big for a repair and too small for a main contractor, carried out by the same engineers who maintain the building.",
  examplesTitle: "Recent examples",
  examples: [
    "Communal lighting upgrade in a six-storey block",
    "Replacement plant room circulation pumps",
    "Comms room air conditioning replacement",
    "Fire door and entrance door replacements",
    "Emergency lighting upgrades",
  ],
  stepsTitle: "How we quote",
  steps: [
    {
      title: "Survey",
      body: "An engineer or our estimator visits, measures up and checks the asbestos register and access.",
    },
    {
      title: "Quote",
      body: "A line-by-line scope, access equipment on its own line, and a clear list of what is not included. Valid for 30 days.",
    },
    {
      title: "Approval",
      body: "We start once you approve the quote in writing, quoting your order number.",
    },
    {
      title: "RAMS",
      body: "A job-specific RAMS for roof work, work above 4 metres, hot works and any job over £5,000.",
    },
    {
      title: "Handover",
      body: "Photos, certificates and any manufacturer's warranty, sent with the completion summary.",
    },
  ],
};

export const fixedPrices = {
  title: "Fixed-price compliance work",
  intro:
    "For customers without a maintenance contract, the common compliance jobs have a fixed price.",
  items: [
    {
      job: "Electrical Installation Condition Report, domestic, up to 10 circuits",
      price: "£180.00",
    },
    {
      job: "Landlord gas safety record, one appliance",
      price: "£75.00, then £25.00 for each extra appliance",
    },
    {
      job: "Emergency lighting annual test, per building, up to 30 fittings",
      price: "£220.00",
    },
    {
      job: "Fixed wire testing, commercial",
      price: "£14.00 per circuit",
    },
  ],
  note: "Prices exclude VAT. Contract customers' rates are set in their service level agreement.",
};
