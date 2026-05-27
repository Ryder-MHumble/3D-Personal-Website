import image0 from "../../../assets/images/projects/guameow/guameow-cover.png";
import image1 from "../../../assets/images/projects/guameow/guameow-welcome.png";
import image2 from "../../../assets/images/projects/guameow/guameow-report.png";
import image3 from "../../../assets/images/projects/guameow/guameow-detail.png";

import type { ProjectContent } from "../../types";

export default {
  "title": "Guameow Z 世代 AI 玄学乐园",
  "theme": "light",
  "tags": [
    "flutter",
    "dart",
    "ai",
    "product"
  ],
  "videoBorder": false,
  "source": "https://github.com/Ryder-MHumble/Guameow",
  "description": "Guameow 是一个面向 Z 世代的 AI 玄学移动应用，把每日喵签、命理分析、运势预测、开运指南和猫咪陪伴感包装成轻娱乐产品。它探索的是 AI 在情绪价值、仪式感和消费级互动中的表达方式。<br/><br/>GitHub API 于 2026-05-27 核验：4 Stars、3 Forks、Dart。项目重点在于移动端视觉、人格化交互和 AI 生成解释如何形成可重复的每日使用场景。",
  "components": [
    {
      "type": "text",
      "props": {
        "title": "项目背景",
        "text": "Guameow 和企业 Agent 项目完全不同：它不是提高工作效率，而是制造轻松、可爱、可持续回访的小仪式。我的产品关注点是如何让用户通过猫咪角色、每日卡片、个性化解释和移动端反馈，愿意持续打开这个 AI 娱乐体验。"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "产品构成",
        "size": "lg",
        "items": [
          "使用 Flutter 与 Dart 将体验打包为跨平台移动应用。",
          "以每日喵签、猫咪引导和个性化 AI 解读作为核心交互。",
          "通过 kawaii 风视觉降低玄学内容的距离感，更贴近 Z 世代娱乐语境。",
          "把 AI 定位成服务情绪、娱乐和微型仪式的轻陪伴产品。"
        ]
      }
    },
    {
      "type": "imageText",
      "props": {
        "imagePosition": "right",
        "src": image0,
        "alt": "Guameow 移动应用封面图",
        "component": {
          "type": "list",
          "props": {
            "title": "体验模块",
            "items": [
              "每日喵签",
              "AI 命理解释",
              "运势预测卡片",
              "开运建议 Feed",
              "移动端视觉系统"
            ]
          }
        }
      }
    },
    {
      "type": "list",
      "props": {
        "title": "产品判断",
        "size": "lg",
        "items": [
          "验证 AI 生成式解释是否能形成可重复的消费级使用仪式。",
          "展示从企业 Agent 工具到情绪娱乐产品的能力跨度。",
          "把移动 UX、角色视觉和 LLM 内容整合为一致的 App 概念。"
        ]
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": image1,
        "alt": "Guameow 移动应用封面图",
        "caption": "解释图：魔法猫咪与移动端运势 App 体验流"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": image2,
        "alt": "Guameow 喵签卡片图",
        "caption": "解释图：每日喵签卡片生成闭环"
      }
    },
    {
      "type": "media",
      "props": {
        "type": "image",
        "src": image3,
        "alt": "Guameow AI 指引图",
        "caption": "解释图：个性化 AI 指引与轻娱乐仪式"
      }
    }
  ]
} as const satisfies ProjectContent;
