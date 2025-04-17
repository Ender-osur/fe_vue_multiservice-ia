<script setup lang="ts">
defineProps<{
  message: string;
  isUser: boolean;
  timestamp: Date;
}>();
</script>

<template>
  <div :class="['flex mb-4', isUser ? 'justify-end' : 'justify-start']">
    <div
      :class="[
        'max-w-[80%] rounded-lg px-4 py-2',
        isUser ? 'bg-user-bubble text-white' : 'bg-bot-bubble text-text',
      ]"
    >
      <p class="text-sm md:text-base">{{ message }}</p>
      <span class="text-xs opacity-70">{{ new Date(timestamp).toLocaleTimeString() }}</span>
    </div>
  </div>
</template>
