export const HOME_AI_WORKFLOW_CARDS = [
  {
    id: "discover-structure",
    title: "Discover & Structure",
    description:
      "Synthesize user interviews, support signals, and analytics into structured problem frames before opening design tools.",
    tools: "Claude · Research · Analytics",
    gradient: "from-[#0f2027] to-[#203a43]",
  },
  {
    id: "design-prototype",
    title: "Design & Prototype",
    description:
      "Build flows and components in Figma with token-based systems. Prototype key paths early to validate with engineers and PMs.",
    tools: "Figma · Design Systems · Prototyping",
    gradient: "from-[#1a1a2e] to-[#16213e]",
  },
  {
    id: "build-validate",
    title: "Build & Validate",
    description:
      "Bridge design and engineering by implementing UI in React. Iterate in production with real metrics instead of waiting for handoff cycles.",
    tools: "React · Cursor · Metrics",
    gradient: "from-[#0f3460] to-[#533483]",
  },
] as const;
