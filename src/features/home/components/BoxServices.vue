<script setup lang="ts">
import { computed, ref, watchEffect, onBeforeUnmount, onBeforeUpdate } from "vue";
import gsap from "gsap";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import { BREAKPOINTS } from "../../../utils/sizes";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";

const point = new Vector3(0.75, 2.75, 6.75);

const wrapperRef = ref<HTMLDivElement | null>(null);
const timelines = ref<{ timeline: gsap.core.Timeline; delay: number }[]>([]);
const subRefs = ref<HTMLElement[]>([]);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
    },
    (context) => {
      const { conditions } = context;
      const { isMobile } = conditions as { isMobile: boolean; isDesktop: boolean };

      const tl = gsap.timeline({
        paused: true,
      });

      // Only animate clipPath on desktop
      if (!isMobile) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "none" },
          0,
        );
      } else {
        // On mobile, ensure clipPath is set to visible immediately
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      for (let i = 0; i < timelines.value.length; i++) {
        const item = timelines.value[i];
        if (!item) continue;
        tl.add(() => {
          item.timeline.restart(true);
        }, item.delay + 0.25);
      }

      // Only fade in on desktop
      if (!isMobile && subRefs.value.length > 0) {
        const subItems = subRefs.value.filter((ref) => ref !== null && ref !== undefined);
        if (subItems.length > 0) {
          tl.fromTo(
            subItems,
            { opacity: 0, x: 18, filter: "blur(6px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.24, stagger: 0.08, ease: "power2.out" },
            0.28,
          );
        }
      } else if (isMobile && subRefs.value.length > 0) {
        // On mobile, ensure opacity is 1 immediately
        const subItems = subRefs.value.filter((ref) => ref !== null && ref !== undefined);
        if (subItems.length > 0) {
          gsap.set(subItems, { opacity: 1, x: 0, filter: "blur(0px)" });
        }
      }

      emit("timeline:created", tl);

      // Return cleanup function
      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
  }
});

onBeforeUpdate(() => {
  subRefs.value = [];
});

const handleTimelineCreated = (timeline: gsap.core.Timeline, delay: number) => {
  const updatedTimelines = [...timelines.value, { timeline, delay }];
  timelines.value = updatedTimelines;
};

const setExperienceRef = (el: unknown) => {
  if (el instanceof HTMLElement) {
    subRefs.value.push(el);
  }
};

const EXPERIENCE_EN = [
  {
    period: "2025.8 - Now",
    company: "ZGC AI Institute",
    role: "AI PM Intern",
    signal: "DeanAgent stack · 9 dimensions / 134 sources",
    detail: "Defined source scoring, crawler acceptance checks, API contracts, daily push workflows, scholar graph views, and NanoBot access so 109 active sources became reusable decision assets.",
  },
  {
    period: "2025.6 - 2025.8",
    company: "Meituan Infrastructure",
    role: "Product Manager Intern",
    signal: "8 MCP Servers · 35 internal tools",
    detail: "Wrapped local MCP Servers into auditable intranet APIs, normalized request and error contracts, then designed Agent-based vitality tests for whether tools truly solve tasks.",
  },
  {
    period: "2024.4 - 2025.6",
    company: "Zhipu AI",
    role: "Product Manager Intern",
    signal: "Recruiting flow 3h -> under 20min",
    detail: "Designed recruiting Agents across Boss, Feishu, OA, and Qingyan with checkpoints, exception recovery, HR review surfaces, plus ChatBI query datasets with 100% scenario selection accuracy.",
  },
  {
    period: "2024.11 - 2025.4",
    company: "Meituan AI Product",
    role: "LLM Platform PM Intern",
    signal: "AIPC assistant · 20K+ internal usage",
    detail: "Shipped MCP client interaction, server configuration flows, and DeepSearch research loops that connected local device actions, tool calls, citations, and LLM execution.",
  },
  {
    period: "2024.5 - 2024.11",
    company: "JIDU / Zhongke Huizhou",
    role: "AI Product & Algorithm PM",
    signal: "Data platform, CV labeling, YOLO research",
    detail: "Owned PRDs, prototypes, tests, customer feedback, active-learning labeling, data-platform migration, and lightweight YOLO research with measurable annotation and training outcomes.",
  },
] as const satisfies { period: string; company: string; role: string; signal: string; detail: string }[];

const EXPERIENCE_ZH = [
  {
    period: "2025.8 - 至今",
    company: "中关村人工智能研究院",
    role: "AI 产品经理实习生",
    signal: "DeanAgent 项目簇 · 9维度 / 134信源",
    detail: "定义信源评分、爬虫验收、API 契约、日报推送、人才图谱与 NanoBot 入口，让 109 个启用信源沉淀为可复用的决策资产。",
  },
  {
    period: "2025.6 - 2025.8",
    company: "美团基础技术部",
    role: "产品经理实习生",
    signal: "8个 MCP Server · 35个内部 Tool",
    detail: "把 Local MCP Server 封装成可审计的内网 API，统一请求、错误与权限边界，并设计 Agent 化活性测试判断工具是否真正完成任务。",
  },
  {
    period: "2024.4 - 2025.6",
    company: "北京智谱科技",
    role: "产品经理实习生",
    signal: "招聘流程 3h -> 20min 内",
    detail: "设计 Boss、飞书、OA、智谱清言间的招聘 Agent 链路，补齐节点校验、异常回退、HR 复核，并构造 ChatBI 查询数据集。",
  },
  {
    period: "2024.11 - 2025.4",
    company: "美团智能产品部",
    role: "LLM 平台产品经理实习生",
    signal: "AIPC 助手 · 2W+ 内部使用量",
    detail: "落地 MCP 客户端交互、Server 配置流与 DeepSearch 研究链路，把本地设备操作、工具调用、引用生成和 LLM 执行连接起来。",
  },
  {
    period: "2024.5 - 2024.11",
    company: "集度汽车 / 中科汇洲",
    role: "AI 产品与算法产品实习",
    signal: "数据平台、CV 标注、YOLO 科研",
    detail: "覆盖 PRD、原型、测试、客户反馈、主动学习标注、数据平台迁移与轻量化 YOLO 研究，用指标闭环推动标注和训练效率提升。",
  },
] as const satisfies { period: string; company: string; role: string; signal: string; detail: string }[];

const experiences = computed(() => {
  return locale.value === "zh" ? EXPERIENCE_ZH : EXPERIENCE_EN;
});
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-services">
      <div class="box-services-content">
        <div class="box-services-header">
          <div>
            <p class="box-services-eyebrow">{{ t("experience-meta") }}</p>
            <div class="box-services-title">
              <AppearingText
                :text="t('experience-title')"
                :steps="1"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
              />
            </div>
          </div>
          <span class="box-services-status">LIVE</span>
        </div>
        <div class="box-services-timeline">
          <div class="box-services-scan" aria-hidden="true"></div>
          <div
            class="box-services-experience"
            v-for="experience in experiences"
            :key="experience.company"
            :ref="setExperienceRef"
          >
            <span class="box-services-dot" aria-hidden="true"></span>
            <div class="box-services-experience-main">
              <p class="box-services-period">{{ experience.period }}</p>
              <p class="box-services-company">{{ experience.company }}</p>
              <p class="box-services-role">{{ experience.role }}</p>
            </div>
            <p class="box-services-signal">{{ experience.signal }}</p>
            <p class="box-services-detail">{{ experience.detail }}</p>
          </div>
        </div>
        <p class="box-services-footer">{{ t("experience-footer") }}</p>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-services {
  --line-length: min(48px, calc(var(--svw) * 5));

  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    width: 520px;
    max-width: calc(var(--svw) * 40);
    padding-left: var(--line-length);
    position: relative;
    left: 0;
    bottom: 0;
    padding-top: 3px;
    transform: translate(0, -42%);
  }

  @include mixins.landscape-large {
    width: 460px;
    max-width: calc(var(--svw) * 39);
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 0;
    border-top: var(--stroke-sm) solid var(--color-cyan-400);

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background:
      linear-gradient(180deg, rgba(4, 28, 36, 0.72) 0%, rgba(13, 49, 57, 0.42) 100%),
      repeating-linear-gradient(90deg, rgba(92, 255, 243, 0.08) 0 1px, transparent 1px 12px),
      linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    overflow: hidden;
    padding: var(--space-sm) var(--space-md);

    @include mixins.landscape {
      padding: var(--space-xs) var(--space-sm);
    }

    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    gap: var(--space-sm);
    align-items: flex-start;
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;

    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }

  &-eyebrow,
  &-period,
  &-role,
  &-signal,
  &-detail,
  &-footer,
  &-status {
    font-size: var(--font-size-xs);
  }

  &-eyebrow {
    margin-bottom: 3px;
    color: rgba(212, 255, 251, 0.66);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &-status {
    padding: 3px 7px;
    border: var(--stroke-sm) solid rgba(100, 255, 244, 0.48);
    border-radius: 999px;
    color: var(--color-text-cyan-400);
    box-shadow: 0 0 18px rgba(0, 255, 234, 0.28);
    letter-spacing: 0.1em;
  }

  &-timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-left: 8px;

    &::before {
      content: "";
      position: absolute;
      top: 6px;
      bottom: 6px;
      left: 14px;
      width: 1px;
      background: linear-gradient(to bottom, transparent, rgba(107, 255, 246, 0.86), transparent);
    }
  }

  &-scan {
    position: absolute;
    left: 0;
    right: 0;
    height: 28px;
    border-top: var(--stroke-sm) solid rgba(107, 255, 246, 0.72);
    background: linear-gradient(to bottom, rgba(107, 255, 246, 0.18), transparent);
    opacity: 0.76;
    animation: experience-scan 3.6s linear infinite;
    pointer-events: none;
  }

  &-experience {
    position: relative;
    display: grid;
    grid-template-columns: 12px minmax(0, 1fr);
    gap: 4px var(--space-xs);
    padding: 7px 8px 8px 0;
    border: var(--stroke-sm) solid rgba(107, 255, 246, 0.14);
    border-radius: var(--radius-sm);
    background: rgba(2, 19, 26, 0.24);
    backdrop-filter: blur(8px);
    opacity: 0;
  }

  &-dot {
    position: relative;
    z-index: 1;
    grid-row: 1 / 4;
    width: 9px;
    height: 9px;
    margin-top: 5px;
    border-radius: 50%;
    background-color: var(--color-cyan-400);
    box-shadow: 0 0 0 4px rgba(107, 255, 246, 0.12), 0 0 18px rgba(107, 255, 246, 0.72);
    animation: experience-dot-pulse 1.8s ease-in-out infinite;
  }

  &-experience-main {
    min-width: 0;
  }

  &-period {
    color: rgba(212, 255, 251, 0.64);
  }

  &-company {
    overflow: hidden;
    color: var(--color-white-400);
    font-size: var(--font-size-sm);
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;

    @include mixins.landscape-large {
      font-size: var(--font-size-md);
    }
  }

  &-role {
    color: rgba(212, 255, 251, 0.76);
  }

  &-signal {
    grid-column: 2;
    color: var(--color-text-cyan-400);
    line-height: 1.25;
  }

  &-detail {
    grid-column: 2;
    display: -webkit-box;
    overflow: hidden;
    color: rgba(212, 255, 251, 0.72);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 1.32;
  }

  &-footer {
    color: rgba(212, 255, 251, 0.62);
    line-height: 1.35;
  }
}

@keyframes experience-scan {
  0% {
    transform: translateY(-18px);
  }

  100% {
    transform: translateY(248px);
  }
}

@keyframes experience-dot-pulse {
  0%,
  100% {
    transform: scale(0.92);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.12);
    opacity: 1;
  }
}
</style>
