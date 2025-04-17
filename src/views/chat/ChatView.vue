<script setup lang="ts">
import { ref } from 'vue';
import {t} from 'vue-i18n'

import ChatMessages from '@/components/ChatMessages.vue';
import ChatInput from '@/components/ChatInput.vue';


interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const messages = ref<Message[]>([
  {
    id: 1,
    text: '¡Hola! ¿Cómo puedo ayudarte?',
    isUser: false,
    timestamp: new Date(),
  },
]);

const handleSend = (text: string) => {
  messages.value.push({
    id: Date.now(),
    text,
    isUser: true,
    timestamp: new Date(),
  });
};
</script>

<template>
  <div class="flex flex-col flex-1 bg-background dark:bg-background-dark">
    <header class="bg-white dark:bg-surface-dark shadow-sm flex items-center w-full">
      <div class="cabecera h-15 flex gap-4 items-center">
        <div class="avatar w-11 h-11 overflow-hidden bg-white rounded-full">
          <img class="w-[100%] h-[100%] object-cover"  src="/bot.png" alt="Esta imagen es el avatar" />
        </div>
        <div class="titulo1">
          <span>{{ $t('chat.header') }}</span>
          <span id="spn-subtitle" class="titulo2"> Bienvenido </span>
        </div>
      </div>
    </header>

    <main class="chat-body  overflow-y-auto">
      <div class="max-w-3xl mx-auto">
        <ChatMessages
          v-for="message in messages"
          :key="message.id"
          :message="message.text"
          :is-user="message.isUser"
          :timestamp="message.timestamp"
        />
      </div>
    </main>

    <ChatInput @send="handleSend" />
  </div>
</template>

<style scoped>

.cabecera {
  padding-left: 8px;
}

.chat-body {
  padding: 0.5rem 1rem 0 1rem;
}

.cabecera .avatar {
  padding: 2px;
}
.cabecera .avatar img {

}

.cabecera .titulo1 {

}

.cabecera .titulo2 {

}
</style>
