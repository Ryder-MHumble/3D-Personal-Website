import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";
import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "DeanAgent Info Engine",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "AI information platform and decision cockpit",
  },
  {
    title: "MCP Server API Layer",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Internal tool gateway for MCP services",
  },
  {
    title: "Recruiting Multi-Agent",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Agentic HR workflow automation",
  },
  {
    title: "ChatBI & DeepSearch",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "Natural language data query and research agents",
  },
  {
    title: "LPS-YOLO Research",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Lightweight remote-sensing object detection",
  },
] as const satisfies ProjectPreview[];
