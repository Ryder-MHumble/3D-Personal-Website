import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "ChatBI 与 DeepSearch Agent",
  theme: "light",
  tags: ["llm", "ai", "python", "postgresql"],
  videoBorder: false,
  description:
    "两个相关的大模型应用案例：面向气象数据自然语言查询的 ChatBI 产品，以及面向碎片化信息整理的 DeepSearch 研究 Agent。<br/><br/>共同点是把模糊问题转化为可靠的查询计划、工具调用、评估数据与可读答案。",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "动画示意：自然语言分析流程（非内部真实截图）",
      },
    },
    {
      type: "text",
      props: {
        title: "ChatBI 案例",
        text: "区县防汛负责人查询气象数据效率低。我主导设计 ChatBI 自然语言数据查询交互系统，并把高频业务场景拆解为多维 Query 覆盖与微调数据。",
      },
    },
    {
      type: "list",
      props: {
        title: "简历中的真实依据",
        size: "lg",
        items: [
          "构建 2000+ 覆盖多业务场景的数据集。",
          "模型场景选择准确率在评估流程中达到 100%。",
          "参数提取准确率达到 94%。",
          "负责产品方案设计、多维 Query 构造与微调数据建设。",
        ],
      },
    },
    {
      type: "imageText",
      props: {
        imagePosition: "left",
        src: sharkie0,
        alt: "ChatBI 查询拆解脱敏示意",
        component: {
          type: "text",
          props: {
            title: "DeepSearch 案例",
            text: "在美团探索型 LLM 平台工作中，我也参与设计 DeepSearch Agent 体验：围绕 ReAct 与 LLM 研究工作流，让系统完成搜索、爬取、综合、引用与结构化报告生成。",
          },
        },
      },
    },
    {
      type: "list",
      props: {
        title: "产品方法",
        items: [
          "先建设场景库，再优化 Prompt",
          "先规划 Query，再生成答案",
          "先做结果评估，再讲发布故事",
          "把可读报告作为最终产品界面",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "深度研究 Agent 示意",
        caption: "结构示意：ReAct 风格的搜索、爬取、综合闭环",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "评估闭环示意",
        caption: "结构示意：场景数据与评估闭环",
      },
    },
  ],
} as const satisfies ProjectContent;
