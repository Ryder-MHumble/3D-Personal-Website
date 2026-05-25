import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "智能招聘 Multi-Agent 系统",
  theme: "dark",
  tags: ["agent", "llm", "product", "react"],
  description:
    "智谱交付项目：将 Boss、飞书、OA 系统与智谱清言串联成智能招聘全流程系统。<br/><br/>系统通过规则约束与 LLM 自主规划结合，让 HR 流程自动化、可追踪，并具备异常检测与处理能力。",
  components: [
    {
      type: "text",
      props: {
        title: "为什么重要",
        text: "招聘流程中存在大量筛选、排期、状态同步和跨平台交接。这个项目的难点不是写一个 Prompt，而是把 Agent 设计成可靠的业务执行系统：有节点、有权限、有兜底、有人工确认。",
      },
    },
    {
      type: "list",
      props: {
        title: "真实贡献",
        size: "lg",
        items: [
          "负责设计智能招聘 Multi-Agent 系统的产品框架，将每个 Agent 角色映射到具体 HR 流程节点。",
          "打通 Boss、飞书、OA 系统与智谱清言，形成跨平台 Agentic 执行链路。",
          "通过规则约束降低高风险行为，同时保留 LLM 自主规划处理复杂任务的能力。",
          "设计异常检测与处理路径，让中断流程可定位、可恢复，而不是静默失败。",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "right",
        src: quibbo0,
        alt: "招聘 Agent 工作流脱敏示意",
        component: {
          type: "list",
          props: {
            title: "项目效果",
            items: [
              "HR 流程处理时间：约 3 小时降至 20 分钟以内",
              "面试者满意度：提升 12%",
              "跨平台执行：Boss、飞书、OA、清言",
              "流程安全：规则护栏与人工确认节点",
            ],
          },
        },
      },
    },
    {
      type: "text",
      props: {
        title: "设计原则",
        text: "我把 Agent 当成运营型产品来设计，而不是 Demo。每个自动化步骤都需要明确触发条件、权限边界、失败兜底和审核界面，这样 HR 才能在真实工作中信任系统。",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "招聘交互示意",
        caption: "结构示意：招聘交互与审核界面",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "跨平台编排示意",
        caption: "结构示意：跨平台编排关系图",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "人机协同节点示意",
        caption: "结构示意：人机协同确认节点",
      },
    },
  ],
} as const satisfies ProjectContent;
