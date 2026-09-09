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

const expandedIndexes = ref<Set<number>>(new Set());

const toggleExperience = (index: number) => {
  const next = new Set(expandedIndexes.value);
  if (next.has(index)) {
    next.delete(index);
  } else {
    next.add(index);
  }
  expandedIndexes.value = next;
};
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
          <div
            class="box-services-experience"
            :class="{ 'is-expanded': expandedIndexes.has(index) }"
            v-for="(experience, index) in experiences"
            :key="experience.company"
            :ref="setExperienceRef"
            role="button"
            tabindex="0"
            :aria-expanded="expandedIndexes.has(index)"
            @click="toggleExperience(index)"
            @keydown.enter.prevent="toggleExperience(index)"
            @keydown.space.prevent="toggleExperience(index)"
          >
            <span class="box-services-dot" aria-hidden="true"></span>
            <div class="box-services-experience-main">
              <p class="box-services-company">{{ experience.company }}</p>
              <p class="box-services-period">{{ experience.period }}</p>
            </div>
            <p class="box-services-role">{{ experience.role }}</p>
            <p class="box-services-signal">
              <span class="box-services-signal-text">{{ experience.signal }}</span>
              <span class="box-services-chevron" aria-hidden="true"></span>
            </p>
            <div class="box-services-detail-wrap">
              <p class="box-services-detail">{{ experience.detail }}</p>
            </div>
          </div>
        </div>
        <p class="box-services-footer">{{ t("experience-footer") }}</p>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
// 全新视觉：深色磨砂玻璃 + 极简编辑感时间轴
// accent 单色，白灰做层次；无扫描线 / 网格 / 脉冲等 HUD 元素
.box-services {
  --line-length: min(48px, calc(var(--svw) * 5));

  // 时间轴几何：圆点尺寸 / 圆点到文案的间距 / 卡片左内边距
  --accent: #67e8f9;
  --dot-size: 7px;
  --rail-gap: 14px;
  --card-pad-left: 12px;

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
    width: 9px;
    height: 9px;
    background-color: var(--accent);
    border-radius: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 0;
    border-top: var(--stroke-sm) solid rgba(103, 232, 249, 0.6);

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  &-content {
    border: var(--stroke-sm) solid rgba(255, 255, 255, 0.09);
    border-radius: 16px;
    background: rgba(7, 12, 20, 0.6);
    backdrop-filter: blur(20px) saturate(1.25);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
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
    color: var(--color-white-400);
    letter-spacing: -0.01em;

    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }

  &-eyebrow,
  &-footer,
  &-status {
    font-size: var(--font-size-xs);
  }

  &-eyebrow {
    margin-bottom: 4px;
    color: rgba(255, 255, 255, 0.42);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  // 极简状态：小圆点 + 文字，无描边无辉光
  &-status {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-size: 10px;

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 8px rgba(103, 232, 249, 0.7);
      animation: experience-live-blink 2.6s ease-in-out infinite;
    }
  }

  &-timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;

    &::before {
      content: "";
      position: absolute;
      top: 12px;
      bottom: 12px;
      left: calc(var(--card-pad-left) + var(--dot-size) / 2);
      width: 1px;
      background: rgba(255, 255, 255, 0.08);
    }
  }

  &-experience {
    position: relative;
    display: grid;
    grid-template-columns: var(--dot-size) minmax(0, 1fr);
    column-gap: var(--rail-gap);
    row-gap: 3px;
    padding: 10px 12px 11px var(--card-pad-left);
    border: var(--stroke-sm) solid transparent;
    border-radius: 12px;
    cursor: pointer;
    opacity: 0;
    transition:
      border-color 0.22s ease,
      background-color 0.22s ease,
      transform 0.2s ease;

    // hover / 展开的表面层：中性白，微弱即可
    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 0;
      border-radius: inherit;
      background: rgba(255, 255, 255, 0.055);
      opacity: 0;
      transition: opacity 0.22s ease;
      pointer-events: none;
    }

    // 展开态的 accent 左轨
    &::before {
      content: "";
      position: absolute;
      top: 10px;
      bottom: 10px;
      left: 0;
      width: 2px;
      border-radius: 2px;
      background: var(--accent);
      opacity: 0;
      transition: opacity 0.22s ease;
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.07);
      background-color: rgba(255, 255, 255, 0.04);

      &::after {
        opacity: 1;
      }

      &::before {
        opacity: 0.45;
      }

      .box-services-dot {
        border-color: var(--accent);
        transform: scale(1.2);

        &::after {
          opacity: 1;
        }
      }

      .box-services-chevron {
        opacity: 0.9;
      }
    }

    &:active {
      transform: scale(0.995);
    }

    &:focus-visible {
      outline: 1px solid rgba(103, 232, 249, 0.7);
      outline-offset: 2px;
    }

    &.is-expanded {
      border-color: rgba(255, 255, 255, 0.09);
      background-color: rgba(255, 255, 255, 0.05);

      &::after {
        opacity: 1;
      }

      &::before {
        opacity: 1;
      }

      .box-services-dot {
        border-color: var(--accent);
        transform: scale(1.1);

        &::after {
          opacity: 1;
        }
      }

      .box-services-chevron {
        transform: rotate(225deg);
        opacity: 0.9;
      }

      .box-services-detail-wrap {
        max-height: 280px;
        opacity: 1;
        -webkit-mask-image: none;
        mask-image: none;
      }

      .box-services-detail {
        -webkit-line-clamp: unset;
      }
    }
  }

  // 时间轴节点：静态小圆点，hover / 展开点亮
  &-dot {
    position: relative;
    z-index: 1;
    grid-column: 1;
    width: var(--dot-size);
    height: var(--dot-size);
    margin-top: 6px;
    border: 1.5px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    background: rgba(7, 12, 20, 0.9);
    box-shadow: 0 0 0 3px rgba(7, 12, 20, 0.9);
    transition:
      border-color 0.22s ease,
      transform 0.22s ease;

    &::after {
      content: "";
      position: absolute;
      inset: 1.5px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 8px rgba(103, 232, 249, 0.8);
      opacity: 0;
      transition: opacity 0.22s ease;
    }
  }

  &-experience-main {
    grid-column: 2;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--space-xs);
    min-width: 0;
  }

  &-company {
    flex: 1;
    overflow: hidden;
    min-width: 0;
    color: var(--color-white-400);
    font-size: var(--font-size-sm);
    font-weight: 600;
    letter-spacing: -0.005em;
    text-overflow: ellipsis;
    white-space: nowrap;

    @include mixins.landscape-large {
      font-size: var(--font-size-md);
    }
  }

  &-period {
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.4);
    font-size: 10.5px;
    letter-spacing: 0.06em;
    font-variant-numeric: tabular-nums;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &-role {
    grid-column: 2;
    color: rgba(255, 255, 255, 0.62);
    font-size: var(--font-size-xxs);
    line-height: 1.35;
  }

  // 关键指标：accent 单色文字，前面加短线引导，不再用底色 chip
  &-signal {
    grid-column: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
    color: var(--accent);
  }

  &-signal-text {
    flex: 0 1 auto;
    max-width: 100%;
    color: rgba(103, 232, 249, 0.92);
    font-size: 11px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.01em;
  }

  &-signal::before {
    content: "";
    flex-shrink: 0;
    width: 10px;
    height: 1px;
    background: rgba(103, 232, 249, 0.55);
  }

  &-chevron {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    margin-left: auto;
    margin-top: -2px;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    opacity: 0.45;
    transform: rotate(45deg);
    transition:
      transform 0.3s ease,
      opacity 0.2s ease;
  }

  &-detail-wrap {
    grid-column: 2;
    overflow: hidden;
    max-height: 3em; // 收起时显示两行（12px × 1.55 ≈ 37px，此处按 12px 计）
    font-size: 12px;
    opacity: 0.9;
    -webkit-mask-image: linear-gradient(to bottom, #000 55%, rgba(0, 0, 0, 0.15) 100%);
    mask-image: linear-gradient(to bottom, #000 55%, rgba(0, 0, 0, 0.15) 100%);
    transition:
      max-height 0.34s ease,
      opacity 0.3s ease;
  }

  &-detail {
    display: -webkit-box;
    overflow: hidden;
    color: rgba(255, 255, 255, 0.52);
    font-size: 12px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.55;
  }

  &-footer {
    color: rgba(255, 255, 255, 0.42);
    line-height: 1.4;
  }

  @media (prefers-reduced-motion: reduce) {
    .box-services-status::before {
      animation: none;
    }

    .box-services-experience,
    .box-services-dot,
    .box-services-detail-wrap,
    .box-services-chevron {
      transition: none;
    }
  }
}

@keyframes experience-live-blink {
  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
}
</style>
