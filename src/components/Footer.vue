<script setup lang="ts">
import Social from "./Social.vue";
import NotchSection from "./NotchSection.vue";

interface Props {
  withSocial?: boolean;
}

const { withSocial = true } = defineProps<Props>();
</script>

<template>
  <footer class="footer">
    <NotchSection class="footer-notch" />
    <div class="footer-content">
      <Social v-if="withSocial" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--color-background-300, var(--color-beige-400));
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &-content {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: calc(var(--breakpoint-xxxl));
    padding: calc(var(--space-outer) + var(--space-md)) var(--space-outer);
    position: relative;
  }

  &-notch {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-background-300, var(--color-beige-400));
    --icon-color: var(--color-background-300, var(--color-beige-400));
  }
}
</style>
