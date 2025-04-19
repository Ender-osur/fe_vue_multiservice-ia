<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ServiceCard from '@/components/ServiceCard.vue'

const { t } = useI18n();

const services = [0, 1, 2].map((index) => ({
  title: t(`services.list[${index}].title`),
  description: t(`services.list[${index}].description`),
  button: t(`services.list[${index}].button`),
}));

const handleClick = () => {
  console.log('Explorar Traductor')
}
</script>

<template>
  <main class="dark:bg-dark bg-light min-h-screen">
    <section class="bg-[transparent] text-white py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl dark:text-osur text-osur-dark font-bold mb-4">{{ t('services.heroTitle') }}</h1>
        <p class="text-lg text-ptd dark:text-ptd-light">{{ t('services.heroDescription') }}</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center dark:text-osur text-osur-dark mb-8">{{ t('services.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :description="service.description"
            :buttonText="service.button"
            :onClick="handleClick"
          />
        </div>
      </div>
    </section>
  </main>
</template>

