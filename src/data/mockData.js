export const listings = [
  {
    id: 1,
    name: "Artisanal Multigrain Sourdough Loaves",
    store: "FreshMart Supermarket — Panvel",
    distance: "1.4 km",
    time: "Before 10 PM",
    originalPrice: 160,
    salePrice: 96,
    unit: "",
    left: 18,
    discount: "50% OFF",
    type: "paid",
    category: "Bakery & Bread",
    id_code: "ZS-2408-003",
    status: "EXECUTED",
  },
  {
    id: 2,
    name: "Sourdough Bread & Masala Puffs",
    store: "OvenFresh Bakery",
    distance: "0.6 km",
    time: "Before 10 PM",
    originalPrice: 160,
    salePrice: 80,
    unit: "",
    left: 15,
    discount: "50% OFF",
    type: "paid",
    category: "Bakery & Bread",
    id_code: "ZS-2408-002",
    status: "PAUSED_HITL",
  },
  {
    id: 3,
    name: "Ripe Alphonso Mangoes & Bananas",
    store: "Raju Fruit Stall Sector 11",
    distance: "0.9 km",
    time: "Before 10 PM",
    originalPrice: 120,
    salePrice: 60,
    unit: "/kg",
    left: 12,
    discount: "50% OFF",
    type: "paid",
    category: "Fruits & Veggies",
    id_code: "ZS-2408-004",
    status: "EXECUTED",
  },
  {
    id: 4,
    name: "Gowardhan Fresh Malai Paneer (25 Packs • Chilled 3.1°C)",
    store: "FreshMart Supermarket",
    distance: "1.4 km",
    time: "Before 10 PM",
    originalPrice: null,
    salePrice: null,
    unit: "",
    left: 25,
    discount: null,
    type: "ngo",
    category: "Dairy",
    id_code: "ZS-2408-001",
    status: "BLOCKED_REROUTED",
    temp: "3.1°C",
  },
];

export const posInventory = [
  { name: "Multigrain Sourdough", price: 96, left: 18, label: "₹96 · 18 left" },
  { name: "Fresh Malai Paneer", price: null, left: 25, label: "Free NGO pickup · 25 packs" },
  { name: "Epigamia Greek Yogurt", price: 30, left: null, label: "₹30 · approval pending" },
];

export const safetyBlocks = [
  {
    type: "BLOCKED · COLD CHAIN",
    name: "Amul Taaza Milk · 8.6°C",
    desc: "Above 4.0°C safe limit. Blocked from resale and donation; automatically rerouted to biogas / compost.",
    color: "red",
  },
  {
    type: "BLOCKED · SAFETY WINDOW",
    name: "Unchilled cooked gravy · 5 hours",
    desc: "Past the 2-hour safety window. Not published; automatically rerouted to biogas / compost.",
    color: "red",
  },
];

export const hitlQueue = [
  {
    name: "Epigamia Greek Yogurt",
    desc: "₹30 proposed price falls below ₹55 wholesale cost.",
    color: "yellow",
  },
];

export const rollbackLog = [
  { name: "Artisanal Multigrain Sourdough Loaves", code: "ZS-2408-003", status: "EXECUTED" },
  { name: "Epigamia Greek Yogurt (40 Tubs)", code: "ZS-2408-002", status: "PAUSED_HTIL" },
  { name: "Amul Taaza Homogenized Milk (30 Packs)", code: "ZS-2408-001", status: "BLOCKED_REROUTED" },
];

export const stats = {
  timeSaved: "85 mins",
  cashRecovered: "₹4,850",
  mealsRescued: "64",
  co2Diverted: "38.4",
};

export const whatsappPresets = [
  {
    label: "PRESET 01 / VOICE",
    title: "Bakery Voice Note (Hindi/English)",
    desc: "Bhai OvenFresh Bakery se bol raha hoon, aaj ke 15 sourdough bread aur 20 masala puffs bache hain. 50% off pe community mein daal do.",
  },
  {
    label: "PRESET 02 / PHOTO + NOTE",
    title: "Fruit Vendor Photo/Note",
    desc: "Raju Fruit Stall Sector 11: 12 kg ripe Alphonso mangoes & bananas at ₹60/kg clearance before 10 PM.",
  },
  {
    label: "PRESET 03 / SAFETY TEST",
    title: "Restaurant 5-Hr Unchilled Gravy Trap",
    desc: "SpiceRoute Kitchen: Leftover paneer gravy buffet tray sitting unchilled since 4 PM (5 hours) — donate to NGO.",
    danger: "Triggers FSSAI 2-Hr Danger-Zone Hard-Lock",
  },
];
