<script setup lang="ts">

</script>

<template>
  <main class="bg-gray-100 min-h-screen">
    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Servicios de Inteligencia Artificial</h1>
        <p class="text-lg">Explora nuestras herramientas impulsadas por IA para facilitar tu vida.</p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Translator Service -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 class="text-xl font-bold mb-4">Traductor Inteligente</h3>
            <p class="text-gray-600 mb-4">
              Traduce textos con precisión utilizando OpenAI y DeepSeek.
            </p>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explorar
            </button>
          </div>

          <!-- Image Generator Service -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 class="text-xl font-bold mb-4">Generador de Imágenes</h3>
            <p class="text-gray-600 mb-4">
              Crea imágenes únicas con nuestra herramienta de generación de imágenes.
            </p>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Explorar
            </button>
          </div>

          <!-- Future Services -->
          <div class="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 class="text-xl font-bold mb-4">Próximos Servicios</h3>
            <p class="text-gray-600 mb-4">
              Estamos trabajando en nuevas herramientas para ti. ¡Espéralos pronto!
            </p>
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Más Información
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 Servicios de IA. Todos los derechos reservados.</p>
      </div>
    </footer>
  </main>
</template>

<style lang="css" scoped></style>
