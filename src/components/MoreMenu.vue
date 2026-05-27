<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import ButtonRound from "./ButtonRound.vue";
import LangSwitch from "./LangSwitch.vue";
import MoreDots from "./icons/MoreDots.vue";
import { t } from "../i18n/utils/translate";
import { social } from "../content/social";
import { soundsEnabled, howlerUnlocked } from "../features/sounds/composables/useHowler";
import { isFeatureEnabled } from "../utils/features";
import { useAgent } from "../composables/useAgent";

const props = defineProps<{
  isDarkTheme: boolean;
}>();

const { isTouch } = useAgent();
const open = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const soundState = computed(() => (soundsEnabled.value && howlerUnlocked.value ? "On" : "Off"));
const githubUrl = computed(() => social.find((item) => item.name === "github")?.url ?? "");
const bilibiliUrl = computed(() => social.find((item) => item.name === "bilibili")?.url ?? "");
const projectReportsUrl = "https://zvwp0lbu2oh.feishu.cn/wiki/HXKxwTvSsiu0W2kuyqnc87QKn95";

const toggleSounds = () => {
  soundsEnabled.value = !soundsEnabled.value;
};

const closeOnOutside = (event: PointerEvent) => {
  if (!menuRef.value || menuRef.value.contains(event.target as Node)) return;
  open.value = false;
};

onMounted(() => {
  window.addEventListener("pointerdown", closeOnOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("pointerdown", closeOnOutside);
});
</script>

<template>
  <div ref="menuRef" :class="['more-menu', { 'more-menu-dark': props.isDarkTheme, 'more-menu-open': open }]">
    <ButtonRound
      variant="theme"
      :aria-label="t('more-menu')"
      :aria-expanded="open"
      aria-haspopup="menu"
      data-cursor="circle-white"
      data-sound="click"
      data-hoversound="hover"
      @click.stop="open = !open"
    >
      <MoreDots />
    </ButtonRound>

    <div v-if="open" class="more-menu-panel" role="menu">
      <div class="more-menu-section">
        <p>{{ t("switch-language") }}</p>
        <LangSwitch />
      </div>

      <button
        v-if="isFeatureEnabled('sounds') && !isTouch"
        class="more-menu-row"
        type="button"
        role="menuitem"
        data-sound="click"
        @click="toggleSounds"
      >
        <span>{{ t("sound") }}</span>
        <strong>{{ soundState }}</strong>
      </button>

      <a v-if="githubUrl" class="more-menu-row" :href="githubUrl" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span>GitHub</span>
        <strong>↗</strong>
      </a>
      <a class="more-menu-row" :href="projectReportsUrl" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span>{{ t("project-reports") }}</span>
        <strong>↗</strong>
      </a>
      <a v-if="bilibiliUrl" class="more-menu-row" :href="bilibiliUrl" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span>Bilibili</span>
        <strong>↗</strong>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.more-menu {
  position: relative;
  color: var(--color-text-400);

  &-dark {
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);

    :deep(.button-wrapper-theme) {
      background: rgba(5, 46, 135, 0.72);
      color: var(--color-white-400);
      --icon-color: var(--color-white-400);
    }
  }

  &-panel {
    position: absolute;
    top: calc(100% + var(--space-sm));
    right: 0;
    min-width: 220px;
    padding: var(--space-sm);
    border: var(--stroke-sm) solid rgba(45, 42, 36, 0.13);
    border-radius: 22px;
    background:
      linear-gradient(145deg, rgba(245, 239, 230, 0.96), rgba(233, 222, 208, 0.92)),
      var(--color-beige-400);
    box-shadow: 0 24px 70px rgba(25, 20, 12, 0.22);
    backdrop-filter: blur(18px);
    transform-origin: top right;
    animation: more-menu-in 0.18s var(--ease-power2-out);
  }

  &-dark &-panel {
    border-color: rgba(255, 255, 255, 0.14);
    background:
      linear-gradient(145deg, rgba(5, 46, 135, 0.96), rgba(0, 36, 116, 0.9)),
      var(--color-dark-blue-500);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
  }

  &-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
    padding: var(--space-xs);

    p {
      color: currentColor;
      font-size: var(--font-size-xs);
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
  }

  &-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
    margin-top: var(--space-xxs);
    padding: 12px 13px;
    border: none;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.3);
    color: currentColor;
    font: inherit;
    font-size: var(--font-size-sm);
    font-weight: 800;
    text-decoration: none;
    cursor: pointer;
    transition:
      background-color 0.14s ease,
      transform 0.14s ease;

    strong {
      font-size: var(--font-size-xs);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    @include mixins.hover {
      &:hover {
        background: rgba(255, 132, 0, 0.18);
        transform: translateX(-2px);
      }
    }
  }
}

@keyframes more-menu-in {
  from {
    opacity: 0;
    transform: translateY(-6px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
