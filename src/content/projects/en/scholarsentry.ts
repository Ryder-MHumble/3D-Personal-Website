import image0 from "../../../assets/images/projects/scholarsentry/scholarsentry-cover.png";

import type { ProjectContent } from "../../types";

export default {
  "title": "ScholarSentry Academic Intelligence",
  "theme": "dark",
  "tags": [
    "research",
    "react",
    "typescript",
    "ai"
  ],
  "videoBorder": false,
  "source": "https://github.com/Ryder-MHumble/Scholars-System",
  "description": "ScholarSentry is an academic-intelligence frontend for scholar profiles, paper outputs, institution relationships, and research movement. It turns paper repositories and scholar graphs into a searchable, monitorable, alert-oriented product surface.<br/><br/>Ryder-MHumble/ScholarSentry returned 404 from the public GitHub API, so this page uses the matched accessible repository Scholars-System; GitHub API check on 2026-05-27: 6 stars, TypeScript.",
  "components": [
    {
      "type": "text",
      "props": {
        "title": "Context",
        "text": "Academic intelligence is not just a list of papers; it should help users understand who is doing what, how outputs connect, and which signals deserve monitoring. ScholarSentry is positioned as the visualization layer for Intelligence Engine data, organizing scholars, papers, institutions, topics, and alert rules into a continuous research-monitoring experience."
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Product Focus",
        "size": "lg",
        "items": [
          "Presents scholars, papers, institutions, and topics as a research-monitoring interface.",
          "Provides a frontend layer that can pair with paper warehouses and scholar knowledge graphs.",
          "Uses alert-oriented information architecture so new outputs can become timely signals.",
          "Keeps the case aligned with the public Scholars-System repository while preserving the ScholarSentry product concept."
        ]
      }
    },
    {
      "type": "imageText",
      "props": {
        "imagePosition": "right",
        "src": image0,
        "alt": "ScholarSentry academic intelligence cover visual",
        "component": {
          "type": "list",
          "props": {
            "title": "Experience Modules",
            "items": [
              "Scholar profile cards",
              "Paper and institution relationships",
              "Topic filters and research signals",
              "Monitoring alerts",
              "Knowledge-graph style navigation"
            ]
          }
        }
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Why It Matters",
        "size": "lg",
        "items": [
          "Turns academic data into a decision surface for talent tracking and research scanning.",
          "Complements Intelligence Engine data services with a user-facing research interface.",
          "Shows how scholarly data can become a repeatable product workflow rather than ad-hoc search."
        ]
      }
    },
  ]
} as const satisfies ProjectContent;
