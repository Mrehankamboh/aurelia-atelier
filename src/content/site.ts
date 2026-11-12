export const hero = {
  eyebrow: "Private architecture and interiors",
  titleLead: "Spaces composed with",
  titleAccent: "quiet certainty.",
  body: "Aurelia Atelier draws houses and the rooms inside them. Few projects, a short list of materials, and drawings that stay with the building until it is finished.",
  primaryCta: { href: "#contact", label: "Start a project" },
  secondaryCta: { href: "#services", label: "View services" },
  card: {
    kicker: "Current study",
    title: "House on the ridge",
    detail: "Lisbon · Study 04",
  },
} as const;

export const studio = {
  name: "Aurelia",
  legal: "Aurelia Atelier",
  email: "studio@aurelia-atelier.example",
  address: "Calçada do Atelier 12, Lisbon",
  note: "A fictional studio. Drawings, names, and figures on this page are original.",
  year: 2026,
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#faq", label: "FAQ" },
] as const;

export const footer = {
  intro:
    "A private studio for houses and the rooms inside them. Few projects, drawn through to the last sample on site.",
  links: [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Pinterest", href: "https://www.pinterest.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
} as const;

export const services = [
  {
    icon: "house",
    title: "Residential architecture",
    summary:
      "Houses planned as a sequence of rooms, light, and outlook, from the first measured survey.",
  },
  {
    icon: "interior",
    title: "Interior architecture",
    summary:
      "Interiors drawn with the building, so joinery, stairs, and rooms belong to the same idea.",
  },
  {
    icon: "material",
    title: "Material and finish",
    summary:
      "Stone, timber, plaster, and metal chosen for how they are made, and how they will age.",
  },
  {
    icon: "heritage",
    title: "Renovation and heritage",
    summary:
      "Existing fabric kept where it is sound, and new work set against it with a clear joint.",
  },
  {
    icon: "garden",
    title: "Garden rooms",
    summary:
      "Courts, terraces, and planted rooms treated as part of the plan, not a border around it.",
  },
  {
    icon: "furnishing",
    title: "Furnishing curation",
    summary:
      "A short list of pieces, art, and textiles, chosen once the rooms are already calm.",
  },
] as const;

export const principles = [
  {
    title: "Proportion",
    summary: "Rooms sized for how they are used, not for how they photograph.",
  },
  {
    title: "Material",
    summary: "A small palette, specified in full, and left to weather.",
  },
  {
    title: "Light",
    summary: "Openings placed for the day, the season, and the view beyond.",
  },
] as const;

export const stats = [
  { value: "46", label: "Projects" },
  { value: "38", label: "Clients" },
  { value: "18", label: "Years" },
] as const;

export const projects = [
  {
    id: "ridge",
    title: "House on the ridge",
    category: "Residential",
    place: "Lisbon",
  },
  {
    id: "court",
    title: "Court of lime",
    category: "Interior",
    place: "Cascais",
  },
  {
    id: "annex",
    title: "The stone annex",
    category: "Renovation",
    place: "Évora",
  },
  {
    id: "garden",
    title: "Rooms in the garden",
    category: "Garden",
    place: "Sintra",
  },
] as const;

export const faqs = [
  {
    question: "How does a project start?",
    answer:
      "With a conversation and a visit. If the brief and the site suit the studio, we prepare a short proposal that sets scope, fee, and the first drawing phase.",
  },
  {
    question: "How long does a typical house take?",
    answer:
      "A new house is usually eighteen to thirty months from the first sketch to handover. A careful renovation is often twelve to twenty-four, depending on the existing building and the approvals.",
  },
  {
    question: "Where do you work?",
    answer:
      "The studio is in Lisbon. We take projects elsewhere in Europe when we can visit the site through construction.",
  },
  {
    question: "How are fees set?",
    answer:
      "Fees follow the scope: survey, design, technical drawings, and site attendance. We state the figure in the proposal, before any drawing begins.",
  },
  {
    question: "How do you work with builders?",
    answer:
      "We tender a clear set of drawings, stay through construction, and review samples and workmanship on site. The builder is a partner in the room, not a recipient of a file.",
  },
  {
    question: "What do you decline?",
    answer:
      "Speculative commercial fit-outs, projects that need a large team overnight, and work where the brief is only to copy another house.",
  },
] as const;
