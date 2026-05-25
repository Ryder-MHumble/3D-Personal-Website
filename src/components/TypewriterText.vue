<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    phrases: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    holdMs?: number;
  }>(),
  {
    typeSpeed: 42,
    deleteSpeed: 24,
    holdMs: 1400,
  },
);

const displayed = ref("");
const phrasesKey = computed(() => props.phrases.filter(Boolean).join("\u0001"));
const normalizedPhrases = computed(() => props.phrases.map((phrase) => phrase.trim()).filter(Boolean));
const longestPhrase = computed(() => {
  return normalizedPhrases.value.reduce((longest, phrase) => (phrase.length > longest.length ? phrase : longest), "");
});

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
let timer: number | null = null;

const clearTimer = () => {
  if (timer !== null) {
    window.clearTimeout(timer);
    timer = null;
  }
};

const tick = () => {
  const phrases = normalizedPhrases.value;
  if (phrases.length === 0) return;

  const phrase = phrases[phraseIndex % phrases.length] ?? "";

  if (deleting) {
    charIndex = Math.max(0, charIndex - 1);
    displayed.value = phrase.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timer = window.setTimeout(tick, 120);
      return;
    }
  } else {
    charIndex = Math.min(phrase.length, charIndex + 1);
    displayed.value = phrase.slice(0, charIndex);

    if (charIndex === phrase.length) {
      deleting = true;
      timer = window.setTimeout(tick, props.holdMs);
      return;
    }
  }

  timer = window.setTimeout(tick, deleting ? props.deleteSpeed : props.typeSpeed);
};

const restart = () => {
  clearTimer();
  displayed.value = "";
  phraseIndex = 0;
  charIndex = 0;
  deleting = false;
  timer = window.setTimeout(tick, 90);
};

watch(phrasesKey, restart, { immediate: true });

onBeforeUnmount(clearTimer);
</script>

<template>
  <span class="typewriter">
    <span class="typewriter-sizer" aria-hidden="true">{{ longestPhrase }}</span>
    <span class="typewriter-live" aria-live="polite">
      <span>{{ displayed }}</span>
      <span class="typewriter-caret" aria-hidden="true"></span>
    </span>
  </span>
</template>

<style scoped lang="scss">
.typewriter {
  display: inline-grid;
  align-items: start;
  min-height: 1.2em;
  max-width: 100%;
  vertical-align: top;

  &-sizer,
  &-live {
    grid-area: 1 / 1;
  }

  &-sizer {
    visibility: hidden;
    pointer-events: none;
  }

  &-live {
    display: inline-flex;
    align-items: center;
    min-width: 1ch;
    will-change: contents;
  }
}

.typewriter-caret {
  display: inline-block;
  flex: 0 0 auto;
  width: 0.08em;
  height: 0.95em;
  margin-left: 0.12em;
  background: currentColor;
  border-radius: 999px;
  animation: typewriter-caret-blink 0.85s steps(2, jump-none) infinite;
}

@keyframes typewriter-caret-blink {
  0%,
  45% {
    opacity: 1;
  }

  46%,
  100% {
    opacity: 0;
  }
}
</style>
