<template>
  <div>
    <button
      @click="
        animateElement();
        verDiv = true;
      "
    >
      Animate Element
    </button>
    <h1
      v-if="verDiv"
      :class="animatedClass"
      style="transform: translateY(20vh); transition: transform 1s"
    >
      An animated element
    </h1>
    <h1 v-if="verDiv" :class="animatedClass2">An animated element</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const verDiv = ref(false);
const animatedClass = ref("");
const animatedClass2 = ref("");

const animateElement = () => {
  animatedClass.value = "animate__animated animate__backOutUp";
  animatedClass2.value = "animate__animated animate__backInUp";
  setTimeout(() => {
    animatedClass.value = "";
    animatedClass2.value = "";
  }, 1000);
};
</script>

<style>
h1 {
  /* Estilos adicionales para el elemento h1 */
}
</style>
