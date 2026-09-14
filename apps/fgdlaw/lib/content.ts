export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice Areas" },
  { href: "#team", label: "Our Team" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
] as const;

export const practiceAreas = [
  {
    key: "corporate",
    title: "Corporate & Labor Law",
    body: "Employment counsel, HR compliance, and dispute resolution for corporations operating in the Philippines and abroad.",
    icon: "scale",
  },
  {
    key: "privacy",
    title: "Data Privacy & Security",
    body: "Certified Data Protection Officer-led advisory on information security, compliance audits, and breach response.",
    icon: "docs",
  },
  {
    key: "family",
    title: "Family & Special Proceedings",
    body: "Adoption, guardianship, and other special civil proceedings handled with discretion and compassion.",
    icon: "heart",
  },
  {
    key: "litigation",
    title: "Litigation & Criminal Law",
    body: "Strong background in civil litigation, criminal defense, and military justice proceedings.",
    icon: "star",
  },
  {
    key: "security",
    title: "National Security Advisory",
    body: "Executive-level guidance drawing on National Defense College and AFP command experience.",
    icon: "pulse",
  },
  {
    key: "counsel",
    title: "General Counsel Services",
    body: "Retained counsel arrangements for ongoing legal support across HR, contracts, and governance.",
    icon: "person",
  },
] as const;

export const stats = [
  { num: "2002", lab: "Firm Established" },
  { num: "4+", lab: "Areas of Specialization" },
  { num: "PhD", lab: "Led by Doctorate Holder" },
  { num: "100%", lab: "Client-First Commitment" },
] as const;

export const team = [
  {
    name: "Atty. Frederick G. Dedace, PhD",
    role: "Founder & General Counsel",
    desc: "PhD in Peace & Security Administration; admitted to the Bar in 1999. IBP, ABA, PMAP member.",
  },
  {
    name: "Atty. Carl Ericson John R. Dedace",
    role: "Managing Counsel",
    desc: "MPA, CSP, CSMS. President, Fortitude Global Dimensions Inc. Faculty, Arellano University Law.",
  },
  {
    name: "Atty. Joan Don A. Napay",
    role: "Affiliated Counsel",
    desc: "Focus on adoption, guardianship, and special proceedings. Magna cum laude graduate.",
  },
  {
    name: "Atty. Mary Rose C. Reyes",
    role: "Junior Counsel",
    desc: "Litigation, civil & criminal law. Certified Data Protection Officer and university professor.",
  },
] as const;
