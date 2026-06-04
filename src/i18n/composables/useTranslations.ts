import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";

export const useTranslations = () => {
  watch(
    locale,
    async (newLocale) => {
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
