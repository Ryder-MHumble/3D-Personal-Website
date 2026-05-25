import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Recruiting Multi-Agent System",
  theme: "dark",
  tags: ["agent", "llm", "product", "react"],
  description:
    "A Zhipu AI delivery project that connected Boss, Feishu, OA workflows, and Zhipu Qingyan into a full-process intelligent recruiting system.<br/><br/>The system used rule constraints plus LLM planning to make HR workflows more automated, auditable, and exception-aware.",
  components: [
    {
      type: "text",
      props: {
        title: "Why It Mattered",
        text: "Recruiting operations involved repeated screening, scheduling, status syncing, and cross-platform handoffs. The product challenge was not just prompting an LLM, but designing a dependable Agent workflow with checkpoints, failure handling, and human override.",
      },
    },
    {
      type: "list",
      props: {
        title: "Real Contributions",
        size: "lg",
        items: [
          "Designed the product framework for the recruiting Multi-Agent system and mapped each Agent role to a concrete HR workflow step.",
          "Connected Boss, Feishu, OA systems, and Zhipu Qingyan into one agentic execution chain.",
          "Used rules to constrain risky behavior while allowing LLM planning for flexible task execution.",
          "Added anomaly detection and handling paths so interrupted workflows could be diagnosed instead of silently failing.",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: quibbo0,
        alt: "Privacy-safe concept visual of recruiting agent workflow",
        component: {
          type: "list",
          props: {
            title: "Measured Impact",
            items: [
              "HR processing time: about 3 hours to under 20 minutes",
              "Candidate satisfaction: +12%",
              "Cross-platform execution: Boss, Feishu, OA, Qingyan",
              "Workflow safety: rule guardrails plus human checkpoints",
            ],
          },
        },
      },
    },
    {
      type: "text",
      props: {
        title: "Design Principle",
        text: "I treated the Agent as an operational product, not a demo. Each autonomous step needed a clear trigger, permission boundary, fallback path, and review surface so HR users could trust the system during real work.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Recruiting interaction concept visual",
        caption: "Concept visual: recruiting interaction and review surface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Cross-platform orchestration concept visual",
        caption: "Concept visual: cross-platform orchestration map",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Human checkpoint concept visual",
        caption: "Concept visual: human-in-the-loop checkpoint",
      },
    },
  ],
} as const satisfies ProjectContent;
