import image0 from "../../../assets/images/projects/scholarsentry/scholarsentry-cover.png";

import type { ProjectContent } from "../../types";

export default {
  "title": "ScholarSentry 学术情报哨兵",
  "theme": "dark",
  "tags": [
    "research",
    "react",
    "typescript",
    "ai"
  ],
  "videoBorder": false,
  "source": "https://github.com/Ryder-MHumble/Scholars-System",
  "description": "ScholarSentry 是面向学者画像、论文成果、机构关系和研究动态的学术情报前端，用来把论文仓与学者知识图谱转化为可检索、可监测、可提醒的产品界面。<br/><br/>Ryder-MHumble/ScholarSentry 在公开 GitHub API 中返回 404，因此页面使用可访问的匹配仓库 Scholars-System；GitHub API 于 2026-05-27 核验该公开仓库为 6 Stars、TypeScript。",
  "components": [
    {
      "type": "text",
      "props": {
        "title": "项目背景",
        "text": "学术情报不是把论文列表堆出来，而是帮助用户理解“谁在做什么、成果之间如何关联、哪些信号值得跟踪”。ScholarSentry 的定位是作为 Intelligence Engine 的可视化层，把学者、论文、机构、主题和提醒规则组织成连续的研究监测体验。"
      }
    },
    {
      "type": "list",
      "props": {
        "title": "产品重点",
        "size": "lg",
        "items": [
          "以研究监测界面展示学者、论文、机构与主题信息。",
          "作为前端层承接论文仓、学者知识图谱与信息引擎数据。",
          "围绕提醒机制组织信息架构，让新增成果能转化为及时信号。",
          "在公开仓库 Scholars-System 的基础上保留 ScholarSentry 的产品定位。"
        ]
      }
    },
    {
      "type": "imageText",
      "props": {
        "imagePosition": "right",
        "src": image0,
        "alt": "ScholarSentry 学术情报封面图",
        "component": {
          "type": "list",
          "props": {
            "title": "体验模块",
            "items": [
              "学者画像卡片",
              "论文与机构关系",
              "主题筛选与研究信号",
              "监测提醒",
              "知识图谱式导航"
            ]
          }
        }
      }
    },
    {
      "type": "list",
      "props": {
        "title": "项目价值",
        "size": "lg",
        "items": [
          "把学术数据转化为人才跟踪和研究扫描的决策界面。",
          "与 Intelligence Engine 数据服务形成前后端组合。",
          "让学者与论文检索从临时搜索变成可复用产品流程。"
        ]
      }
    },
  ]
} as const satisfies ProjectContent;
