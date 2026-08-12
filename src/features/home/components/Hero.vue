<script setup lang="ts">
import { computed } from "vue";
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import TypewriterText from "../../../components/TypewriterText.vue";

const typedPhrases = computed(() => [t("hero-typed-1"), t("hero-typed-2"), t("hero-typed-3")]);
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <h1 class="hero-title" v-html="t('full-name')"></h1>
          <Banner class="hero-banner" :copy="t('job-title')" v-if="!preloaderVisible" animated />
          <p class="hero-type">
            <TypewriterText :phrases="typedPhrases" />
          </p>
          <p class="hero-summary">{{ t("hero-summary") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    align-items: center;
    justify-content: center;
    height: 46%;

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      gap: var(--space-xxl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      @include mixins.landscape {
        left: 0;
        transform: translateX(0);
        grid-column: 2 / 13;
        width: fit-content;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      max-width: min(510px, calc(var(--svw) * 84));

      @include mixins.mq("md") {
        gap: var(--space-sm);
      }
    }

    &-button {
      width: fit-content;
    }
  }

  &-title {
    position: relative;
    width: fit-content;
    font-family: "Bodoni 72", "Didot", "Iowan Old Style", Georgia, serif;
    font-style: italic;
    font-weight: 700;
    letter-spacing: -0.082em;
    font-size: clamp(68px, 8vw, 128px);
    line-height: 0.88;
    font-feature-settings: "kern", "liga", "swsh";
    color: #241d18;
    text-shadow: 0 18px 46px rgba(61, 42, 23, 0.16);
    overflow: visible;

    &::after {
      content: "";
      position: absolute;
      right: -0.12em;
      bottom: -0.06em;
      width: 0.82em;
      height: 0.07em;
      border-radius: 999px;
      background: linear-gradient(90deg, rgba(255, 132, 0, 0), rgba(255, 132, 0, 0.72));
      transform: rotate(-7deg);
      transform-origin: right center;
    }

    :deep(.hero-title-accent) {
      font: inherit;
      letter-spacing: inherit;
    }

    @include mixins.landscape {
      font-size: clamp(72px, 6.8vw, 128px);
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: clamp(78px, 7vw, 128px);
      }

      @include mixins.mq("xl") {
        font-size: clamp(92px, 7.2vw, 132px);
      }
    }
  }

  &-banner {
    position: absolute;
    bottom: 0;
    right: 4px;
    z-index: 10;
    transform: rotate(-5deg) translate(0, 65%);

    @include mixins.mq("sm") {
      right: 0;
      transform: rotate(-5deg) translate(0, 70%);
    }

    @include mixins.mq("lg") {
      right: 8px;
      transform: rotate(-5deg) translate(0, 80%);
    }
  }

  &-type {
    min-height: 2.45em;
    max-width: 510px;
    color: var(--color-orange-400);
    font-size: var(--font-size-xl);
    font-weight: 900;
    letter-spacing: 0.01em;
    line-height: 1.15;

    @include mixins.mq("md") {
      min-height: 1.25em;
      font-size: var(--font-size-xxl);
    }
  }

  &-summary {
    max-width: 480px;
    color: var(--color-text-300);
    font-size: var(--font-size-md);
    line-height: var(--line-height-copy);
  }

}
</style>
