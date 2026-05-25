import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "ChatBI & DeepSearch Agents",
  theme: "light",
  tags: ["llm", "ai", "python", "postgresql"],
  videoBorder: false,
  description:
    "Two related large-model application cases: a ChatBI product for natural-language meteorological data queries, and a DeepSearch-style research Agent for fragmented information gathering.<br/><br/>Both projects were about turning ambiguous user questions into reliable query plans, tool calls, evaluation data, and readable answers.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Animated concept placeholder: natural-language analysis flow",
      },
    },
    {
      type: "text",
      props: {
        title: "ChatBI Case",
        text: "For county-level flood-control users, querying meteorological data was inefficient. I led the interaction and product solution for a natural-language data query system, then translated high-frequency business scenarios into multi-dimensional query coverage and fine-tuning data.",
      },
    },
    {
      type: "list",
      props: {
        title: "Evidence From Resume",
        size: "lg",
        items: [
          "Built 2,000+ training samples covering multiple business scenarios.",
          "Reached 100% model scenario-selection accuracy in the evaluated workflow.",
          "Reached 94% parameter extraction accuracy for structured query execution.",
          "Owned product solution design, query construction, and fine-tuning data design.",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "left",
        src: sharkie0,
        alt: "Privacy-safe concept visual of ChatBI query decomposition",
        component: {
          type: "text",
          props: {
            title: "DeepSearch Case",
            text: "In Meituan's exploratory LLM platform work, I also helped shape a DeepSearch Agent experience inspired by ReAct and LLM research workflows: search, crawl, synthesize, cite, and produce a structured report.",
          },
        },
      },
    },
    {
      type: "list",
      props: {
        title: "Product Pattern",
        items: [
          "Scenario library before prompt polish",
          "Query planning before answer generation",
          "Result evaluation before launch narrative",
          "Human-readable report as the final product surface",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Deep research agent concept visual",
        caption: "Concept visual: ReAct-style search, crawl, synthesize loop",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Evaluation loop concept visual",
        caption: "Concept visual: scenario data and evaluation loop",
      },
    },
  ],
} as const satisfies ProjectContent;
