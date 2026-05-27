<script setup lang="ts">
import ButtonRound from "./ButtonRound.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";
import { t } from "../i18n/utils/translate";

const handleLangSwitch = () => {
  changeLocale(locale.value === "zh" ? "en" : "zh");
};
</script>

<template>
  <ButtonRound
    class="lang-switch-button"
    variant="theme"
    size="md"
    @click="handleLangSwitch"
    :aria-label="t('switch-language')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <span class="lang-switch-button-label">{{ locale === "zh" ? "EN" : "中" }}</span>
  </ButtonRound>
</template>

<style scoped lang="scss">
.lang-switch-button {
  font-size: var(--font-size-sm);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.04em;

  &-label {
    transform: translateY(-1px);
  }
}
</style>
