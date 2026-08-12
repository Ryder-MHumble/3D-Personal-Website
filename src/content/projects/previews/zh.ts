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
    description: "54 Stars · 持久化本地多 Agent 工作台",
  },
  {
    title: "Realm 3D Agent 工作台",
    slug: "realm",
    thumbnail: thumbnailRealm,
    description: "26 Stars · Coding Agent 实时 3D 可视化",
  },
  {
    title: "EvoLabeler MLOps 引擎",
    slug: "evolabeler",
    thumbnail: thumbnailEvolabeler,
    description: "15 Stars · 自进化遥感 MLOps 引擎",
  },
  {
    title: "ScholarSentry 学术情报",
    slug: "scholarsentry",
    thumbnail: thumbnailScholarSentry,
    description: "9 Stars · 学者图谱与科研监测界面",
  },
  {
    title: "Guameow 卦喵",
    slug: "guameow",
    thumbnail: thumbnailGuameow,
    description: "8 Stars · Z 世代 AI 玄学移动应用",
  },
  {
    title: "TDA-YOLO",
    slug: "tda-yolo",
    thumbnail: thumbnailTdaYolo,
    description: "7 Stars · 自适应无人机遥感目标检测",
  },
] as const satisfies ProjectPreview[];
