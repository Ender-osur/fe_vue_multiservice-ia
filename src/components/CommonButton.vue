<script setup lang="ts">
import { useRouter } from 'vue-router';

// Definir las props con tipos
const props = defineProps<{
  text: string;
  onClick?: () => void;
  styles?: string;
}>();

const router = useRouter();

// Manejar el click (usando onClick si existe, si no, navegar)
const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  } else {
    router.push('/chat'); // Ruta por defecto si no se pasa onClick
  }
};
</script>

<template>
  <button
    @click="handleClick"
    class="px-4 py-2 rounded transition-colors duration-200 hover:opacity-80 font-semibold dark:text-dark text-light dark:bg-osur bg-osur-dark"
    :class="props.styles"
  >
    {{ props.text }}
  </button>
</template>
