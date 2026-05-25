import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "DeanAgent 信息引擎",
  theme: "dark",
  tags: ["agent", "fastapi", "python", "postgresql"],
  videoBorder: false,
  source: "https://github.com/Ryder-MHumble/DeanAgent-Backend",
  description:
    "面向中关村人工智能研究院的数据智能产品栈：信息采集、院长决策前端、学者知识库与智能助理入口形成同一个闭环。<br/><br/>该案例基于我原本简历中的真实项目改写；页面视觉为脱敏后的结构示意，用来表达产品形态与流程，不展示内部数据截图。",
  components: [
    {
      type: "text",
      props: {
        title: "项目背景",
        text: "研究院需要统一监测政策信号、科技前沿、人才动态、人事信息与内部论文知识。我把分散信源抽象成信息引擎，通过统一 REST API 支撑 Dean-Agent、ScholarDB、Athena 与 NanoBot 等上层应用。",
      },
    },
    {
      type: "list",
      props: {
        title: "我实际交付的内容",
        size: "lg",
        items: [
          "独立开发 DeanAgent-Backend / OpenClaw 数据中台，基于 FastAPI、APScheduler、Playwright 支持 static、dynamic、rss、snapshot 四种采集模式。",
          "覆盖 9 大信息维度、134 个配置源，其中 109 个启用源用于日常情报监测。",
          "独立设计 Dean-Agent 院长决策前端，围绕院长早报、政策情报、科技前沿、人事动态等 8 大模块组织信息架构。",
          "推进 Dean-NanoBot 智能助理接入，让信息引擎进一步转化为自然语言入口。",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: streakon0,
        alt: "信息决策系统的脱敏结构示意",
        component: {
          type: "list",
          props: {
            title: "业务模块",
            items: [
              "多板块每日推送",
              "人才地图与学者画像",
              "内部论文图谱",
              "信源健康与采集状态",
              "跨系统 REST API 服务层",
            ],
          },
        },
      },
    },
    {
      type: "list",
      props: {
        title: "交付方式",
        size: "lg",
        items: [
          "负责迭代计划、验收口径与外部项目组需求对接，确保数据层、前端层、助理层目标一致。",
          "在产品信息架构与工程实现之间来回校准，降低多团队协作中的需求歧义。",
          "页面仅保留流程、指标和结构，不暴露内部截图或敏感内容。",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "院长早报流程示意",
        caption: "结构示意：院长早报与 source-to-insight 流程",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "人才地图示意",
        caption: "结构示意：人才地图与论文知识图谱",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "智能助理接入示意",
        caption: "结构示意：NanoBot 作为同一信息引擎的自然语言入口",
      },
    },
  ],
} as const satisfies ProjectContent;
