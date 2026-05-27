import image0 from "../../../assets/images/projects/guameow/guameow-cover.png";
import image1 from "../../../assets/images/projects/guameow/guameow-welcome.png";
import image2 from "../../../assets/images/projects/guameow/guameow-report.png";
import image3 from "../../../assets/images/projects/guameow/guameow-detail.png";

import type { ProjectContent } from "../../types";

export default {
  "title": "Guameow AI Fortune App",
  "theme": "light",
  "tags": [
    "flutter",
    "dart",
    "ai",
    "product"
  ],
  "videoBorder": false,
  "source": "https://github.com/Ryder-MHumble/Guameow",
  "description": "Guameow is a Gen-Z AI fortune mobile app that packages daily cat fortunes, destiny analysis, luck prediction, guidance, and companion-like cat interaction into a lightweight entertainment product. It explores how AI can deliver emotional value, ritual, and consumer-facing play.<br/><br/>GitHub API check on 2026-05-27: 4 stars, 3 forks, Dart. The project focus is mobile visual design, character-led interaction, and how AI-generated explanations can become a repeatable daily use case.",
  "components": [
    {
      "type": "text",
      "props": {
        "title": "Context",
        "text": "Guameow is intentionally different from enterprise Agent projects: it is not about productivity, but about a cute, low-pressure ritual users may want to revisit. My product focus is how a cat persona, daily cards, personalized explanations, and mobile feedback can make an AI entertainment experience feel durable."
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Product Ingredients",
        "size": "lg",
        "items": [
          "Uses Flutter and Dart to package the experience as a cross-platform mobile app.",
          "Centers the interaction on daily fortune cards, cat-themed guidance, and personalized AI explanations.",
          "Builds a kawaii visual language that reduces the distance of metaphysical content for Gen-Z users.",
          "Frames AI as a lightweight companion for entertainment, mood, and micro-rituals."
        ]
      }
    },
    {
      "type": "imageText",
      "props": {
        "imagePosition": "right",
        "src": image0,
        "alt": "Guameow mobile app cover visual",
        "component": {
          "type": "list",
          "props": {
            "title": "Experience Modules",
            "items": [
              "Daily cat fortune",
              "AI destiny explanation",
              "Luck forecast cards",
              "Playful guidance feed",
              "Mobile-first visual system"
            ]
          }
        }
      }
    },
    {
      "type": "list",
      "props": {
        "title": "Product Read",
        "size": "lg",
        "items": [
          "Tests whether AI-generated interpretation can become a repeatable consumer ritual.",
          "Shows range beyond enterprise Agent tools into emotional and entertainment products.",
          "Combines mobile UX, character design, and LLM content into one coherent app concept."
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": image1,
        "alt": "Guameow mobile app cover visual",
        "caption": "Explanation visual: magical cat mobile fortune app flow"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": image2,
        "alt": "Guameow fortune card visual",
        "caption": "Explanation visual: daily fortune card generation loop"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": image3,
        "alt": "Guameow AI guidance visual",
        "caption": "Explanation visual: personalized AI guidance and playful ritual flow"
      }
    }
  ]
} as const satisfies ProjectContent;
