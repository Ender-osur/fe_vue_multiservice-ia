<script setup lang="ts">
import { RouterLink } from 'vue-router';

const emit = defineEmits<{
  (e: 'toggle-menu'): void;
  (e: 'close-menu'): void;
}>();
defineProps<{
  navItems: { href: string; label: string }[];
  isMobile?: boolean;
  isMobileMenuOpen: boolean;
}>();
</script>

<template>
  <!-- Mobile -->
  <div v-if="isMobile">
    <button
      @click="emit('toggle-menu')"
      class="p-2 rounded-lg transition-colors text-2xl"
    >
      ☰
    </button>

    <div
      v-if="isMobileMenuOpen"
      class="absolute left-[40%] shadow-lg shadow-black rounded-lg z-50 w-48 p-2"
    >
      <template v-for="item in navItems" :key="item.href">
        <RouterLink
          v-if="!item.href.startsWith('http')"
          :to="item.href"
          class="block px-4 py-2 text-osur-dark dark:text-osur transition-colors rounded-md"
          @click="emit('close-menu')"
        >
          {{ $t(item.label) }}
        </RouterLink>
        <a
          v-else
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="block px-4 py-2 text-osur-dark dark:text-osur transition-colors rounded-md"
          @click="emit('close-menu')"
        >
          {{ $t(item.label) }}
        </a>
      </template>
    </div>
  </div>

  <!-- Desktop -->
  <div v-else class="flex gap-6 justify-center items-center">
    <template v-for="item in navItems" :key="item.href">
      <RouterLink
        v-if="!item.href.startsWith('http')"
        :to="item.href"
        class="group relative inline-block text-osur-dark dark:text-osur transition-colors duration-200"
        v-tippy="{ content: $t(item.label) }"
      >
        {{ $t(item.label) }}
        <div
          class="absolute bottom-0 left-0 h-[1px] w-0 bg-osur-dark dark:bg-osur transition-all duration-200 group-hover:w-full"
        ></div>
      </RouterLink>
      <a
        v-else
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        class="group relative inline-block text-osur-dark dark:text-osur transition-colors duration-200"
        v-tippy="{ content: $t(item.label) }"
      >
        {{ $t(item.label) }}
        <div
          class="absolute bottom-0 left-0 h-[1px] w-0 bg-osur-dark dark:bg-osur transition-all duration-200 group-hover:w-full"
        ></div>
      </a>
    </template>
  </div>
</template>

<style scoped>
.underline {
  height: 2px;
  width: 0px;
  transition: width 200ms;
  position: absolute;
  bottom: 0;
  left: 0;
}
.underline-container {
  position: relative;
  display: inline-block;
}
.underline-container:hover .underline {
  width: 100%;
}
.menu-container-mobile {
  padding: 6px;
}
</style>
