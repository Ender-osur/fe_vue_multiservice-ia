<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import NavLink from './NavLink.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const isLangMenuOpen = ref(false);
const scrollY = ref(0);
const isMobile = ref(window.innerWidth < 700);
const isMobileMenuOpen = ref(false);

// Internationalization
const { locale, availableLocales } = useI18n();
const currentLocale = ref(locale.value);

const changeLocale = (newLocale: string) => {
  locale.value = newLocale;
  currentLocale.value = newLocale;
  isLangMenuOpen.value = false;
};

const handleScroll = () => {
  scrollY.value = window.scrollY;
  const navbar = document.getElementById('navbar');

  if (navbar) {
    if (scrollY.value > 0) {
      navbar.classList.add('bg-slate-300', 'dark:bg-gray-800/80');
      navbar.classList.remove('bg-slate-200', 'dark:bg-gray-900/80');
    } else {
      navbar.classList.add('bg-slate-200', 'dark:bg-gray-900/80');
      navbar.classList.remove('bg-slate-300', 'dark:bg-gray-800/80');
    }
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 700;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});

watch(isMobile, (newValue) => {
  console.log('isMobile cambiado:', newValue);
});
function handleMenuToggle() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
function handleCloseMenu() {
  isMobileMenuOpen.value = false;
}

const navItems = [
  { href: '/chat', label: 'nav.chat' },
  { href: '/imagesgeneration', label: 'nav.imagesGeneration' },
  { href: 'https://github.com/Ender-osur/be_node-express_multiservice-ai', label: 'nav.github' },
  { href: '/aboutus', label: 'nav.aboutUs' },
];
</script>

<template>
  <nav
    id="navbar"
    class="w-full backdrop-blur-sm z-50 transition-colors duration-300 dark:bg-surface-dark bg-light"
  >
    <div class="subcontainer-navbar w-full">
      <div class="flex items-center justify-around">
        <RouterLink to="/home">
          <div class="flex flex-row w-full items-center gap-2 bg-dark dark:bg-light pr-4 rounded-xl">
            <img src="/favicon.webp" alt="icono" height="40px" width="42px" />
            <span class=" dark:text-osur-dark text-osur font-bold">Multiservice</span>
          </div>
        </RouterLink>

        <!-- Navlinks -->

        <NavLink
          :navItems="navItems"
          :isMobile="isMobile"
          :isMobileMenuOpen="isMobileMenuOpen"
          @toggle-menu="handleMenuToggle"
          @close-menu="handleCloseMenu"
        />

        <!-- Language button -->
        <div class="relative flex flex-row gap-4">
          <button
            @click="isLangMenuOpen = !isLangMenuOpen"
            class="lang-button flex items-center space-x-1 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            :style="{
              borderColor: isDark ? 'var(--color-hover-dark)' : '#ccc',
              backgroundColor: isDark ? 'transparent' : 'white'
            }"
          >
            <span class="text-osur-dark dark:text-osur">
              {{ currentLocale.toUpperCase() }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-osur-dark dark:text-osur"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            v-if="isLangMenuOpen"
            class="select-language-button absolute top-12 right-10 mt-2 py-2 w-32 bg-light dark:bg-gray-800 rounded-lg shadow-lg dark::shadow-black border border-gray-200 dark:border-gray-700 cursor-pointer"
          >
            <button
              v-for="locale in availableLocales"
              :key="locale"
              @click="changeLocale(locale)"
              class="block w-full text-left px-4 py-2 hover:bg-primary-hover text-slate-900 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <span class="text-osur-dark dark:text-osur">{{ locale.toUpperCase() }}</span>
            </button>
          </div>

          <!-- ThemeButton -->
          <button
            @click="toggleDark()"
            class="p-2 rounded-lg hover:bg-primary-hover dark:hover:bg-gray-800 transition-colors cursor-pointer"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-osur-dark dark:text-osur"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-osur-dark dark:text-osur"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
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

.lang-button {
  padding-inline: 10px;
}

.subcontainer-navbar {
  padding-block: 4px;
}
</style>
