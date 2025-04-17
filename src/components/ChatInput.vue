<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const message = ref('');

const emit = defineEmits<{
  (e: 'send', message: string): void;
}>();

const sendMessage = () => {
  if (message.value.trim()) {
    emit('send', message.value);
    message.value = '';
  }
};
</script>

<template>
  <div class="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-surface-dark">
    <div class="flex gap-2">
      <input
        v-model="message"
        type="text"
        :placeholder="t('chat.placeholder')"
        class="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-osur-dark focus:dark:border-osur dark:bg-hover-dark dark:text-p-text-input-light text-p-text-input"
        @keyup.enter="sendMessage"
      />
      <select id="cmb-idioma" class="text-osur-dark dark:text-osur focus:text-osur-dark focus:bg-osur focus:dark:text-osur focus:dark:bg-osur-dark rounded-xl">
        <option value="ingles" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Inglés</option>
        <option value="español" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Español</option>
        <option value="frances" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Francés</option>
        <option value="aleman" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Alemán</option>
        <option value="italiano" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Italiano</option>
        <option value="portugues" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Portugués</option>
        <option value="ruso" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Ruso</option>
        <option value="chino" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Chino</option>
        <option value="japones" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Japonés</option>
        <option value="arabe" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Árabe</option>
        <option value="coreano" class="hover:dark:bg-osur-dark-hover hover:bg-osur-hover">Coreano</option>
      </select>
      <button
        @click="sendMessage"
        class="px-6 py-2 dark:bg-osur bg-osur-dark text-osur dark:text-osur-dark font-bold tracking-[1px] rounded-full transition-colors duration-200"
      >
        {{ t('chat.send') }}
      </button>
    </div>
  </div>
</template>
