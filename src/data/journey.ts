import type { JourneyStage, SceneMarker } from "@/types";

export const journeyIntro = {
  subtitle: "The Rain-to-Drain Journey",
  title: "Follow water through real",
  highlight: "infrastructure.",
  description:
    "A cinematic cross-section of a working stormwater system across an airport, highway and port. Each stage reveals the engineering challenge, the solution and the specialist partner behind it.",
};

export const journeyScene = {
  image: "/images/rain-to-drain-real-infrastructure.webp",
  width: 1600,
  height: 900,
  flowPath: "M 134 48 L 122 496 Q 122 544 178 544 L 1442 544",
  dropPath: "M 665 406 C 659 445 671 496 665 532",
  depthMarkers: [
    { label: "0.0m", y: 452 },
    { label: "2.0m", y: 572 },
    { label: "5.0m", y: 780 },
  ],
};

// stage 3 shows up twice - the pipe runs under both junctions
export const sceneMarkers: SceneMarker[] = [
  {
    stageId: 1,
    x: 134,
    y: 44,
    partner: "Frost Drainage",
    logo: "/images/frost.webp",
    card: { dx: 102, dy: -34, width: 132 },
  },
  {
    stageId: 2,
    x: 178,
    y: 394,
    partner: "EJ",
    logo: "/images/ej.webp",
    card: { dx: 95, dy: -90, width: 118 },
  },
  {
    stageId: 3,
    x: 300,
    y: 544,
    partner: "VIP Seal",
    logo: "/images/vipseal.webp",
    card: { dx: 0, dy: 30, width: 118 },
  },
  {
    stageId: 4,
    x: 515,
    y: 544,
    partner: "Marsh Industries",
    logo: "/images/marsh.webp",
    card: { dx: 0, dy: 30, width: 148 },
  },
  {
    stageId: 3,
    x: 665,
    y: 544,
    partner: "VIP Seal",
    logo: "/images/vipseal.webp",
    card: { dx: 0, dy: 30, width: 118 },
  },
  {
    stageId: 7,
    x: 665,
    y: 394,
    partner: "EJ",
    logo: "/images/ej.webp",
    card: { dx: 95, dy: -90, width: 118 },
  },
  {
    stageId: 5,
    x: 1148,
    y: 544,
    partner: "Wapro",
    logo: "/images/wapro.webp",
    card: { dx: 0, dy: -185, width: 118 },
  },
  {
    stageId: 6,
    x: 1442,
    y: 544,
    partner: "Wapro",
    logo: "/images/wapro.webp",
    card: { dx: 50, dy: -118, width: 118 },
  },
];

export const journeyStages: JourneyStage[] = [
  {
    id: 1,
    title: "Rainfall",
    summary:
      "Real-time rainfall data informs every drainage decision from the first catchment to the final outfall.",
    challenge:
      "Design storms are intensifying. Sizing a network on average rainfall leaves airports, highways and ports exposed to the critical event.",
    solution:
      "Hydrological modelling, catchment analysis and flow calculations that underpin every downstream decision.",
    expertise:
      "Rainfall modelling, catchment data and design storm selection coordinated with civil works.",
    partner: {
      name: "Frost Solution UK",
      url: "https://www.frostsolution.co.uk/",
      note: "Rainfall modelling and flow calculations for resilient drainage design.",
    },
    components: ["Rainfall Data", "Catchment Analysis", "Design Storms"],
  },
  {
    id: 2,
    title: "Surface Collection",
    summary:
      "Gullies, channels and covers intercept runoff across vast paved areas under heavy traffic loads.",
    challenge:
      "Runoff has to be intercepted quickly across vast paved areas, while carrying aircraft, HGV and crane loading.",
    solution:
      "Load-rated gratings, channel drainage and access covers engineered for each surface and traffic class.",
    expertise:
      "Grating selection, hydraulic inlet design and traffic-load compliance coordinated with pavement works.",
    partner: {
      name: "EJ",
      url: "https://www.ejco.com/",
      note: "Access covers, gratings and channel drainage for heavy-duty surfaces.",
    },
    components: ["Channel Drainage", "Gratings", "Access Covers"],
  },
  {
    id: 3,
    title: "Underground Drainage",
    summary:
      "Engineered pipe networks convey stormwater under load-bearing infrastructure surfaces.",
    challenge:
      "Variable depths, mixed soils and traffic loads above mean joint failure and infiltration are common risks.",
    solution:
      "Specified pipe materials, structured connectors and sealed joints — built for long-term hydraulic and structural performance.",
    expertise:
      "Pipe sizing, gradient design, jointing strategy and materials selection coordinated with civil works.",
    partner: {
      name: "VIP Seal",
      url: "https://www.vipseal.com/",
      note: "Pipe sealing and connection systems for watertight networks.",
    },
    components: ["Stormwater Drainage", "Pipe Connectors & Reducers", "Access Covers"],
  },
  {
    id: 4,
    title: "Oil-Water Separation",
    summary:
      "Coalescing separators strip hydrocarbons and silt before water leaves the site.",
    challenge:
      "Hydrocarbons and silt leave the site with the water unless they are removed first.",
    solution:
      "Oil-water separators using coalescing media and settlement to meet EA and PPG3 discharge consents.",
    expertise:
      "Separator sizing, bypass design and maintenance access coordinated with environmental consents.",
    partner: {
      name: "Marsh Industries",
      url: "https://www.marshindustries.co.uk/",
      note: "Oil-water separators and silt traps for compliant discharge.",
    },
    components: ["Oil-Water Separators", "Coalescing Media", "Silt Traps"],
  },
  {
    id: 5,
    title: "Flow Control",
    summary:
      "Vortex controls and throttles hold back the storm and release it at a controlled rate.",
    challenge: "Unattenuated peak flows overwhelm downstream sewers and watercourses.",
    solution:
      "Vortex flow controls and throttles hold back the storm and release it at a controlled, consented rate.",
    expertise:
      "Attenuation sizing, throttle selection and consent flow rates coordinated with the LLFA.",
    partner: {
      name: "Wapro",
      url: "https://www.wapro.com/",
      note: "Vortex flow controls and throttles for controlled discharge.",
    },
    components: ["Vortex Flow Controls", "Throttle Valves", "Attenuation Tanks"],
  },
  {
    id: 6,
    title: "Non-Return Valves",
    summary:
      "Automatic valves close on reverse flow to protect the site from backflow flooding.",
    challenge:
      "High receiving water levels can push tidal, river or surface water back up the network.",
    solution:
      "Non-return valves close automatically on reverse flow, protecting the site from backflow flooding.",
    expertise:
      "Valve selection, head-loss analysis and maintenance access coordinated with outfall design.",
    partner: {
      name: "Wapro",
      url: "https://www.wapro.com/",
      note: "Non-return valves for reliable backflow protection.",
    },
    components: ["Non-Return Valves", "Flap Valves", "Backflow Prevention"],
  },
  {
    id: 7,
    title: "Safe Discharge",
    summary:
      "Outfalls, headwalls and flap valves deliver controlled, maintainable and consent-ready discharge.",
    challenge:
      "Discharge points are where compliance, access and environmental risk all meet.",
    solution:
      "Outfalls, headwalls and flap valves deliver controlled, maintainable and consent-ready discharge.",
    expertise:
      "Outfall design, erosion protection and environmental consent coordination.",
    partner: {
      name: "EJ",
      url: "https://www.ejco.com/",
      note: "Outfalls, headwalls and flap valves for compliant discharge.",
    },
    components: ["Outfalls", "Headwalls", "Flap Valves"],
  },
];
