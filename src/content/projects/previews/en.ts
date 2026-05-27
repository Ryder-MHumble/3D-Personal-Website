import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailRealm from "../../../assets/thumbnails/realm-cover.png";
import thumbnailEvolabeler from "../../../assets/thumbnails/evolabeler-cover.png";
import thumbnailScholarSentry from "../../../assets/thumbnails/scholarsentry-cover.png";
import thumbnailGuameow from "../../../assets/thumbnails/guameow-cover.png";
import thumbnailDoc2Brief from "../../../assets/thumbnails/doc2brief.png";
import thumbnailIntelligenceEngineDb from "../../../assets/thumbnails/intelligence-engine-db-cover.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Recruiting Multi-Agent",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Agentic HR workflow automation",
  },
  {
    title: "LPS-YOLO Research",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Lightweight remote-sensing object detection",
  },
  {
    title: "Realm 3D Agent Workspace",
    slug: "realm",
    thumbnail: thumbnailRealm,
    description: "23-star real-time visualization for coding agents",
  },
  {
    title: "EvoLabeler MLOps Engine",
    slug: "evolabeler",
    thumbnail: thumbnailEvolabeler,
    description: "12-star AI Agent loop for remote-sensing models",
  },
  {
    title: "ScholarSentry",
    slug: "scholarsentry",
    thumbnail: thumbnailScholarSentry,
    description: "6-star academic intelligence and scholar graph UI",
  },
  {
    title: "Guameow",
    slug: "guameow",
    thumbnail: thumbnailGuameow,
    description: "4-star Gen-Z AI fortune mobile app",
  },
  {
    title: "Doc2Brief",
    slug: "doc2brief",
    thumbnail: thumbnailDoc2Brief,
    description: "File/text to templated weekly report links",
  },
  {
    title: "Intelligence Engine DB",
    slug: "intelligence-engine-db",
    thumbnail: thumbnailIntelligenceEngineDb,
    description: "Multi-source crawler backend for AI intelligence",
  },
] as const satisfies ProjectPreview[];
