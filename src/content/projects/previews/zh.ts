import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";
import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "DeanAgent 信息引擎",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "AI 信息平台与院长决策系统",
  },
  {
    title: "MCP Server API 层",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "面向内网的 MCP 工具服务网关",
  },
  {
    title: "智能招聘 Multi-Agent",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "HR 流程自动化的 Agentic 系统",
  },
  {
    title: "ChatBI & DeepSearch",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "自然语言数据查询与深度研究 Agent",
  },
  {
    title: "LPS-YOLO 科研项目",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "轻量级无人机遥感小目标检测算法",
  },
] as const satisfies ProjectPreview[];
