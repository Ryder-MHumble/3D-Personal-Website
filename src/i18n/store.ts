import { ref } from "vue";

import { LOCALE_DEFAULT } from "./constants";
import type { Locale } from "./types";

export const locale = ref<Locale>(LOCALE_DEFAULT);
export const translations = ref<Record<string, string>>({});
