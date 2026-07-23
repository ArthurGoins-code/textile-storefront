import type {
  FaqItem,
  MachineCategory,
  SupportContract,
  Testimonial,
  Tier,
} from "./types";

export const categories: MachineCategory[] = [
  {
    slug: "tensile-compression",
    name: "Tensile & Compression Testers",
    shortName: "Tensile & Compression",
    description:
      "Universal testing machines used to measure fabric and yarn tensile strength, elongation, and seam slippage.",
    icon: "Gauge",
  },
  {
    slug: "abrasion-pilling",
    name: "Abrasion & Pilling Testers",
    shortName: "Abrasion & Pilling",
    description:
      "Martindale-style abrasion and pilling testers used to evaluate fabric durability and surface wear.",
    icon: "RotateCw",
  },
  {
    slug: "colour-fastness",
    name: "Colour Fastness & Crocking Testers",
    shortName: "Colour Fastness",
    description:
      "Crockmeters and light/wash fastness chambers used to assess dye transfer and colour stability.",
    icon: "Palette",
  },
  {
    slug: "air-permeability",
    name: "Air Permeability Testers",
    shortName: "Air Permeability",
    description:
      "Precision airflow instruments used to measure fabric breathability for technical and outdoor textiles.",
    icon: "Wind",
  },
  {
    slug: "gsm-weight",
    name: "GSM & Fabric Weight Testers",
    shortName: "GSM & Weight",
    description:
      "Round sample cutters and precision balances used to determine fabric weight per unit area.",
    icon: "Scale",
  },
  {
    slug: "bursting-strength",
    name: "Bursting Strength Testers",
    shortName: "Bursting Strength",
    description:
      "Hydraulic and pneumatic burst testers used to measure fabric and nonwoven rupture resistance.",
    icon: "Activity",
  },
  {
    slug: "flammability",
    name: "Flammability Testers",
    shortName: "Flammability",
    description:
      "Vertical and horizontal flame chambers used for safety-critical flammability compliance testing.",
    icon: "Flame",
  },
];

const compatibleMachinesByCategory: Record<string, string[]> = {
  "tensile-compression": ["TenTech TT-5000", "TenTech TT-8000 Pro", "FlexCore FC-200"],
  "abrasion-pilling": ["AbraCyclone AC-9", "PillGuard PG-450", "AbraCyclone AC-12 Duo"],
  "colour-fastness": ["ColorLock CL-100", "CrockMaster CM-3", "ColorLock CL-200 UV"],
  "air-permeability": ["PermeaFlow PF-1", "AeroTex AT-500", "PermeaFlow PF-2 HD"],
  "gsm-weight": ["WeighTex WT-10", "FabriScale FS-1", "WeighTex WT-20 Auto"],
  "bursting-strength": ["BurstMax BM-700", "PressurePro PP-3", "BurstMax BM-900 XL"],
  flammability: ["FlameGuard FG-1", "IgniTest IT-450", "FlameGuard FG-2 Vertical"],
};

const basePriceByCategory: Record<string, number> = {
  "tensile-compression": 449,
  "abrasion-pilling": 349,
  "colour-fastness": 299,
  "air-permeability": 379,
  "gsm-weight": 249,
  "bursting-strength": 399,
  flammability: 599,
};

interface TierDefinition {
  tier: Tier;
  tagline: string;
  multiplier: number;
  responseTime: string;
  calibrationVisits: number;
  addedFeatures: string[];
  popular?: boolean;
}

const tierDefinitions: TierDefinition[] = [
  {
    tier: "Essential",
    tagline: "Essential coverage to stay audit-ready",
    multiplier: 1,
    responseTime: "5 business days",
    calibrationVisits: 1,
    addedFeatures: [
      "Unlimited email & ticketing support",
      "1 annual calibration visit with ISO certificate",
      "Software & firmware updates included",
      "5 business day on-site response",
      "Access to online knowledge base & manuals",
    ],
  },
  {
    tier: "Standard",
    tagline: "Our most popular plan for busy labs",
    multiplier: 2.1,
    responseTime: "48 hours",
    calibrationVisits: 2,
    popular: true,
    addedFeatures: [
      "Business-hours phone support",
      "2 calibration visits per year",
      "48-hour on-site response for hardware faults",
      "Priority spare parts shipping",
      "10% discount on spare parts",
    ],
  },
  {
    tier: "Premium",
    tagline: "Maximum uptime with white-glove service",
    multiplier: 3.6,
    responseTime: "24 hours",
    calibrationVisits: 4,
    addedFeatures: [
      "24/7 emergency phone support",
      "4 calibration visits per year",
      "24-hour on-site response + next-business-day loaner unit",
      "Free annual preventive maintenance visit",
      "20% discount on spare parts",
      "Dedicated account manager",
    ],
  },
];

function buildContracts(): SupportContract[] {
  const contracts: SupportContract[] = [];

  for (const category of categories) {
    const basePrice = basePriceByCategory[category.slug];
    let cumulativeFeatures: string[] = [];

    for (const def of tierDefinitions) {
      cumulativeFeatures = [...cumulativeFeatures, ...def.addedFeatures];
      const price = Math.round((basePrice * def.multiplier) / 10) * 10 - 1;

      contracts.push({
        id: `${category.slug}-${def.tier.toLowerCase()}`,
        slug: `${category.slug}-${def.tier.toLowerCase()}`,
        name: `${def.tier} Care — ${category.shortName}`,
        tier: def.tier,
        categorySlug: category.slug,
        price,
        billingPeriod: "year",
        tagline: def.tagline,
        description: `Keep your ${category.name.toLowerCase()} calibrated, certified, and audit-ready with our ${def.tier} Care plan.`,
        features: cumulativeFeatures,
        responseTime: def.responseTime,
        calibrationVisits: def.calibrationVisits,
        compatibleMachines: compatibleMachinesByCategory[category.slug],
        popular: def.popular,
      });
    }
  }

  return contracts;
}

export const contracts: SupportContract[] = buildContracts();

export function getCategory(slug: string): MachineCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getContract(slug: string): SupportContract | undefined {
  return contracts.find((c) => c.slug === slug);
}

export function getContractsByCategory(categorySlug: string): SupportContract[] {
  return contracts.filter((c) => c.categorySlug === categorySlug);
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our tensile tester went down two days before an audit. Their engineer had it certified and running again in under 24 hours.",
    author: "Priya Nandakumar",
    role: "Lab Manager",
    company: "Meridian Textile Labs",
  },
  {
    quote:
      "Switching every machine in our QC lab to Standard Care cut our unplanned downtime by more than half in the first year.",
    author: "Daniel Osei",
    role: "Quality Director",
    company: "Northfield Mills",
  },
  {
    quote:
      "The dedicated account manager on our Premium plan knows our fleet better than we do. Calibration reminders, parts, everything is handled.",
    author: "Elena (Lena) Kovac",
    role: "Plant Engineer",
    company: "Adria Fabrics Group",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What is a machine support contract?",
    answer:
      "A support contract bundles preventive maintenance, calibration, software updates, and repair coverage for your textile testing equipment into a single predictable annual fee.",
  },
  {
    question: "Can I cover multiple machines under one order?",
    answer:
      "Yes. Add a separate plan for each machine to your cart, or contact our fleet team for a custom multi-machine agreement with volume pricing.",
  },
  {
    question: "Are calibrations traceable and certified?",
    answer:
      "Every calibration visit includes a traceable certificate aligned to ISO/IEC 17025 practices, ready to hand to your auditors.",
  },
  {
    question: "What happens if my machine model isn't listed?",
    answer:
      "We support most major textile testing machine brands and models. Contact us with your machine's make and model and we'll confirm coverage before you order.",
  },
  {
    question: "Can I upgrade my plan mid-term?",
    answer:
      "Absolutely. You can upgrade from Essential to Standard or Premium at any time; we prorate the remaining term automatically.",
  },
];

export const stats = [
  { label: "Machines under contract", value: "1,200+" },
  { label: "Avg. on-site response (Premium)", value: "< 24 hrs" },
  { label: "First-time fix rate", value: "98%" },
  { label: "Certified field engineers", value: "60+" },
];
