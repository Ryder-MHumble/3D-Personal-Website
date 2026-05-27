<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { previews } from "../../../content/projects/previews";
import { locale } from "../../../i18n/store";
import NotchSection from "../../../components/NotchSection.vue";
import Banner from "../../../components/Banner.vue";
import Button from "../../../components/Button.vue";
import Link from "../../../components/Link.vue";
import { t } from "../../../i18n/utils/translate";
import { isFeatureEnabled } from "../../../utils/features";
import { social } from "../../../content/social";
import ProjectsCarousel from "./ProjectsCarousel.vue";

import type { ProjectPreview } from "../../../content/types";

const loadedPreviews = ref<ProjectPreview[] | null>(null);
const allProjectsUrl = social.find((item) => item.name === "github")?.url ?? "";

const emit = defineEmits<{
  (e: "loaded", previews: ProjectPreview[]): void;
}>();

const loadPreviews = async () => {
  if (!locale.value) return;
  const func = previews[locale.value as keyof typeof previews];
  if (!func) return;
  const module = await func();
  loadedPreviews.value = module.default;
  emit("loaded", module.default);
};

watch(locale, loadPreviews);

onMounted(loadPreviews);
</script>

<template>
  <div class="projects">
    <NotchSection class="projects-notch-start" />
    <NotchSection class="projects-notch-end" />
    <div class="grid">
      <div class="projects-title">
        <Banner class="projects-title-banner" :copy="t('selected')" size="sm" animated />
        <h2 class="projects-title-copy">{{ t("projects") }}</h2>
      </div>
      <Link
        v-if="allProjectsUrl"
        class="projects-all"
        external
        :href="allProjectsUrl"
        data-cursor="arrow-external"
        :aria-label="t('view-all-projects')"
      >
        <Button renderAs="div" variant="accent" size="md" data-hoversound="hover">
          {{ t("view-all-projects") }}
        </Button>
      </Link>
    </div>
    <ProjectsCarousel
      v-if="loadedPreviews"
      :previews="loadedPreviews"
      :show-start-card="isFeatureEnabled('startProject')"
    />
  </div>
</template>

<style scoped lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  background-color: var(--color-beige-400);
  min-height: calc(var(--lvh) * 100 + var(--radius-xxl));
  padding-top: 96px;
  padding-bottom: 96px;

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 8;
    }

    &-copy {
      font-weight: 900;
      letter-spacing: 0.02em;
      font-size: var(--font-size-title-md);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xl);
      }
    }

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-400);
      --icon-color: var(--color-beige-400);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-all {
    grid-column: 1 / 13;
    width: fit-content;

    @include mixins.mq("md") {
      grid-column: 9 / 13;
      align-self: end;
      justify-self: end;
    }

    :deep(.button) {
      box-shadow: 0 16px 36px rgba(255, 132, 0, 0.24);
    }
  }
}
</style>
