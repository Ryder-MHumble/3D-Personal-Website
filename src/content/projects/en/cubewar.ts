import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MCP Server API Layer",
  theme: "dark",
  tags: ["mcp", "node", "typescript", "product"],
  videoBorder: false,
  description:
    "An internal Meituan platform project that wrapped popular local MCP Servers into HTTP-callable API services for intranet business systems.<br/><br/>The real work focused on tool boundary design, request/response normalization, security constraints, and evaluation of reusable MCP Server capabilities.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "Animated concept placeholder: MCP service invocation flow",
      },
    },
    {
      type: "text",
      props: {
        title: "Problem",
        text: "Local MCP Servers are powerful, but direct local runtime access is hard to govern inside an enterprise environment. The product goal was to preserve tool capability while exposing it through a safer, standardized HTTP interface.",
      },
    },
    {
      type: "list",
      props: {
        title: "My Scope",
        size: "lg",
        items: [
          "Encapsulated 8 MCP Servers and 35 Tools into internal API services based on business requirements.",
          "Designed endpoint boundaries, parameter schemas, response conventions, and acceptance checks for each tool service.",
          "Helped define the intranet security model so business systems could invoke MCP capabilities without exposing local execution risk.",
          "Researched MCP Server platform patterns, future trends, and popular server capabilities to guide platform roadmap decisions.",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "left",
        src: cubewar0,
        alt: "Privacy-safe concept visual of MCP tool encapsulation",
        component: {
          type: "list",
          props: {
            title: "Product Decisions",
            items: [
              "HTTP service instead of local-only calls",
              "Consistent schema layer for heterogeneous tools",
              "Operational checklist for onboarding new servers",
              "Security-first defaults for internal runtime access",
            ],
          },
        },
      },
    },
    {
      type: "text",
      props: {
        title: "Testing Framework Exploration",
        text: "In parallel, I researched industry and academic evaluation methods for MCP Servers and proposed an Agent-as-carrier testing approach: use an Agent to exercise a tool against reference external tools, making liveliness and result quality easier to observe than static interface checks.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Internal gateway concept visual",
        caption: "Concept visual: internal API gateway and tool boundary",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Security boundary concept visual",
        caption: "Concept visual: intranet security boundary for MCP services",
      },
    },
  ],
} as const satisfies ProjectContent;
