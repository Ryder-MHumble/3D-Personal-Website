import thumbnailMeldwork from "../../../assets/images/projects/meldwork/meldwork-cover.webp";
import thumbnailRealm from "../../../assets/images/projects/realm/realm-cover.webp";
import thumbnailEvolabeler from "../../../assets/images/projects/evolabeler/evolabeler-cover.webp";
import thumbnailScholarSentry from "../../../assets/images/projects/scholarsentry/scholarsentry-cover.webp";
import thumbnailGuameow from "../../../assets/images/projects/guameow/guameow-cover.webp";
import thumbnailTdaYolo from "../../../assets/images/projects/tda-yolo/tda-yolo-cover.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Meldwork",
    slug: "meldwork",
    thumbnail: thumbnailMeldwork,
    description: "54 stars · persistent local multi-Agent workspace",
  },
  {
    title: "Realm 3D Agent Workspace",
    slug: "realm",
    thumbnail: thumbnailRealm,
    description: "26 stars · real-time 3D visualization for coding agents",
  },
  {
    title: "EvoLabeler MLOps Engine",
    slug: "evolabeler",
    thumbnail: thumbnailEvolabeler,
    description: "15 stars · self-evolving remote-sensing MLOps engine",
  },
  {
    title: "ScholarSentry",
    slug: "scholarsentry",
    thumbnail: thumbnailScholarSentry,
    description: "9 stars · academic intelligence and scholar graph UI",
  },
  {
    title: "Guameow",
    slug: "guameow",
    thumbnail: thumbnailGuameow,
    description: "8 stars · Gen-Z AI fortune mobile app",
  },
  {
    title: "TDA-YOLO",
    slug: "tda-yolo",
    thumbnail: thumbnailTdaYolo,
    description: "7 stars · adaptive UAV remote-sensing detection",
  },
] as const satisfies ProjectPreview[];
