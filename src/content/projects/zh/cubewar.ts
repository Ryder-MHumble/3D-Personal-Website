import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "MCP Server API 层",
  theme: "dark",
  tags: ["mcp", "node", "typescript", "product"],
  videoBorder: false,
  description:
    "美团内部平台项目：将外部热门 Local 类型 MCP Server 封装为可通过 HTTP 调用的内部 API 服务，方便内网业务系统安全复用工具能力。<br/><br/>真实工作重点在工具边界、请求响应规范、内网安全约束，以及可复用 MCP Server 能力的评估。",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "动画示意：MCP 服务调用流程（非内部真实截图）",
      },
    },
    {
      type: "text",
      props: {
        title: "问题定义",
        text: "Local MCP Server 能力很强，但在企业内网环境中直接依赖本地运行时不利于治理。产品目标是在保留工具能力的同时，把调用方式标准化为更安全的 HTTP 接口。",
      },
    },
    {
      type: "list",
      props: {
        title: "我的工作范围",
        size: "lg",
        items: [
          "根据内部业务需求封装 8 个 MCP Server、35 个 Tool 为内部 API 服务。",
          "设计每个工具服务的 endpoint 边界、参数 schema、响应约定与验收检查项。",
          "协助定义内网安全模型，让业务系统可以调用 MCP 能力，同时减少本地执行暴露风险。",
          "调研 MCP Server 平台形态、未来趋势与热门 Server 基础能力，为平台路线提供输入。",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "left",
        src: cubewar0,
        alt: "MCP 工具封装的脱敏结构示意",
        component: {
          type: "list",
          props: {
            title: "产品决策",
            items: [
              "用 HTTP 服务替代 local-only 调用",
              "为异构 Tool 提供统一 schema 层",
              "沉淀新 Server 接入检查清单",
              "以安全优先作为内部运行时默认策略",
            ],
          },
        },
      },
    },
    {
      type: "text",
      props: {
        title: "测试框架探索",
        text: "我同步调研了行业与学术界针对 MCP Server 的评估方法，并提出以 Agent 为载体、外部工具为参照的测试思路：让 Agent 真实调用工具完成任务，从而比静态接口检查更容易观察活性与结果质量。",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "内部网关示意",
        caption: "结构示意：内部 API 网关与工具边界",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "内网安全边界示意",
        caption: "结构示意：MCP 服务的内网安全边界",
      },
    },
  ],
} as const satisfies ProjectContent;
