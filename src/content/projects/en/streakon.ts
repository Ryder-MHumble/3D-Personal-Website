import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "DeanAgent Information Engine",
  theme: "dark",
  tags: ["agent", "fastapi", "python", "postgresql"],
  videoBorder: false,
  source: "https://github.com/Ryder-MHumble/DeanAgent-Backend",
  description:
    "A data-intelligence product stack for Zhongguancun AI Institute: information crawling, decision cockpit, scholar knowledge base, and assistant access in one loop.<br/><br/>This case is based on my real resume project. Visuals on this page are privacy-safe concept scenes that preserve the project structure without exposing internal data.",
  components: [
    {
      type: "text",
      props: {
        title: "Context",
        text: "The institute needed a unified way to monitor policies, frontier research, talent movements, personnel signals, and internal paper knowledge. I turned scattered sources into a productized information engine that could feed Dean-Agent, ScholarDB, Athena, and NanoBot through one REST API layer.",
      },
    },
    {
      type: "list",
      props: {
        title: "What I Shipped",
        size: "lg",
        items: [
          "Built DeanAgent-Backend / OpenClaw with FastAPI, APScheduler, Playwright, and multi-mode crawling: static, dynamic, RSS, and snapshot.",
          "Covered 9 information dimensions, 134 configured sources, and 109 enabled sources for daily intelligence monitoring.",
          "Designed the Dean-Agent decision cockpit with 8 modules: daily briefing, policy intelligence, frontier signals, personnel dynamics, and more.",
          "Integrated Dean-NanoBot as a natural-language assistant layer so the information engine could be used directly by non-technical stakeholders.",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: streakon0,
        alt: "Privacy-safe concept visual of the information cockpit",
        component: {
          type: "list",
          props: {
            title: "Product Modules",
            items: [
              "Multi-section daily push",
              "Talent map and scholar profile graph",
              "Internal paper atlas",
              "Source health and crawling status",
              "Cross-system REST API layer",
            ],
          },
        },
      },
    },
    {
      type: "list",
      props: {
        title: "Delivery Ownership",
        size: "lg",
        items: [
          "Defined iteration plans, acceptance criteria, and cross-team requirements for external implementation partners.",
          "Balanced product information architecture with hands-on engineering delivery, reducing ambiguity between data, frontend, and assistant layers.",
          "Kept the case privacy-safe: the portfolio explains workflow and metrics, not internal screenshots or confidential content.",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Daily briefing flow concept visual",
        caption: "Concept visual: daily briefing and source-to-insight flow",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Talent map concept visual",
        caption: "Concept visual: talent map and paper-knowledge graph",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Assistant integration concept visual",
        caption: "Concept visual: NanoBot assistant entry for the same engine",
      },
    },
  ],
} as const satisfies ProjectContent;
