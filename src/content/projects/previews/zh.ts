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
    title: "智能招聘 Multi-Agent",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "HR 流程自动化的 Agentic 系统",
  },
  {
    title: "LPS-YOLO 科研项目",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "轻量级无人机遥感小目标检测算法",
  },
  {
    title: "Realm 3D Agent 工作台",
    slug: "realm",
    thumbnail: thumbnailRealm,
    description: "23 Star 的 Coding Agent 实时可视化项目",
  },
  {
    title: "EvoLabeler MLOps 引擎",
    slug: "evolabeler",
    thumbnail: thumbnailEvolabeler,
    description: "12 Star 的遥感模型 Agent 闭环系统",
  },
  {
    title: "ScholarSentry 学术情报",
    slug: "scholarsentry",
    thumbnail: thumbnailScholarSentry,
    description: "6 Star 的学者图谱与科研监测界面",
  },
  {
    title: "Guameow 卦喵",
    slug: "guameow",
    thumbnail: thumbnailGuameow,
    description: "4 Star 的 Z 世代 AI 玄学移动应用",
  },
  {
    title: "Doc2Brief",
    slug: "doc2brief",
    thumbnail: thumbnailDoc2Brief,
    description: "文件/文本转模板化周报链接的平台",
  },
  {
    title: "Intelligence Engine DB",
    slug: "intelligence-engine-db",
    thumbnail: thumbnailIntelligenceEngineDb,
    description: "多维信源爬虫与情报数据后端",
  },
] as const satisfies ProjectPreview[];
