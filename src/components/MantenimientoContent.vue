<template>
  <div class="row">
    <div class="col-md-12 col-lg-12">
      <div class="row">
        <div class="col-md-6 col-lg-6 container-img">
          <q-img src="~assets/3x/Recurso11@3x.png" class="fill" />
          <div
            class="div-overlay3 bg-secondary text-primary text-left q-pa-lg"
            :class="bounceInLeft"
            ref="elementToObserve2"
          >
            <p class="text-h4 text-weight-bold q-ma-none">
              MÁS DE 15 AÑOS DE EXPERIENCIA
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 center-vertical-div">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <p
                class="text-h2 text-weight-bold text-secondary text-left q-mx-md q-px-lg text-uppercase"
              >
                Mantenimiento y operación
              </p>
            </div>
            <div class="col-md-12 col-lg-12">
              <p
                class="text-h4 text-weight-bold text-white text-left q-ma-md q-px-lg"
              >
                Nuestra solución:
              </p>
            </div>
            <div class="col-md-12 col-lg-12 q-pa-lg">
              <div class="text-left">
                <div class="number-text-inline-short" ref="elementToObserve">
                  <q-img
                    :class="wobble"
                    class="q-my-md"
                    src="~assets/3x/Recurso24@3x.png"
                    fit="scale-down"
                    style="max-width: 12vh; height: 12vh"
                  />
                  <span class="text-h4 text-white q-mx-lg">
                    Contrato por el 100% de las actividades de O&M.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-12 q-pa-lg">
              <div class="text-left">
                <div class="number-text-inline-short" ref="elementToObserve">
                  <q-img
                    :class="wobble"
                    class="q-my-md"
                    src="~assets/3x/Recurso25@3x.png"
                    fit="scale-down"
                    style="max-width: 12vh; height: 12vh"
                  />
                  <span class="text-h4 text-white q-mx-lg">
                    Personal propio con dedicación completa al proyecto.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-12 q-pa-lg">
              <div class="text-left">
                <div class="number-text-inline-short" ref="elementToObserve">
                  <q-img
                    :class="wobble"
                    class="q-my-md"
                    src="~assets/3x/Recurso25@3x.png"
                    fit="scale-down"
                    style="max-width: 12vh; height: 12vh"
                  />
                  <span class="text-h4 text-white q-mx-lg">
                    Plataforma web para entrega de informes e indicadores.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-12 bg-white">
      <div
        class="row justify-center q-my-xl q-py-xl"
        :class="bounceIn"
        ref="elementToObserve3"
      >
        <div class="col-md-4 col-lg-4">
          <span class="text-h4 text-primary"> O&M en más de </span>
          <p class="text-h1 text-weight-bold text-primary" style="margin: 0%">
            1000km
          </p>
          <span class="text-h4 text-primary"> de vía consecionada </span>
        </div>
        <div class="col-md-4 col-lg-4">
          <span class="text-h4 text-primary"> Operación de </span>
          <p class="text-h1 text-weight-bold text-primary" style="margin: 0%">
            32 peajes
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

const bounceIn = ref("");
const wobble = ref("");
const bounceInLeft = ref("");
const fadeInRight = ref("");
const animateElement = () => {
  bounceIn.value = "animate__animated animate__bounceIn";
  wobble.value = "animate__animated animate__wobble";
  bounceInLeft.value = "animate__animated animate__bounceInLeft";
  fadeInRight.value = "animate__animated animate__fadeInRight";
  setTimeout(() => {
    bounceIn.value = "";
    wobble.value = "";
    bounceInLeft.value = "";
    fadeInRight.value = "";
  }, 1000);
};

const elementToObserve = ref(null);
const elementToObserve2 = ref(null);
const elementToObserve3 = ref(null);
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
  observer.observe(elementToObserve2.value);
  observer.observe(elementToObserve3.value);
});

const handleElementVisible = (target) => {
  animateElement();
  console.log("Elemento visible:", target);
  // Lógica para manejar cuando el elemento es visible cada vez que se muestra
};
</script>
