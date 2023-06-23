<template>
  <div>
    <div style="background-color: aqua; height: 1000px"></div>
    <div
      ref="elementToObserve"
      style="background-color: rgb(255, 81, 0); height: 1000px"
    >
      <!-- Contenido del elemento a observar -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

const elementToObserve = ref(null);
onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Porcentaje del elemento visible en el área de observación para disparar la intersección
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // El elemento es visible en el área de observación
        handleElementVisible(entry.target);
      }
    });
  }, options);

  observer.observe(elementToObserve.value);
});

const handleElementVisible = (target) => {
  console.log("Elemento visible:", target);
  // Lógica para manejar cuando el elemento es visible cada vez que se muestra
};
</script>
