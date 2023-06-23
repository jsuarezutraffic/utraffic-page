<template>
  <div class="row">
    <div class="col-md-12 col-lg-12">
      <div class="row">
        <div class="col-md-6 col-lg-6 container-img">
          <q-img src="~assets/3x/Recurso9@3x.png" fit="fill" />
          <div
            class="div-overlay-box-utoll q-my-xl bg-accent text-secondary text-left q-pa-lg"
            :class="fadeInRight"
            ref="elementToObserve3"
          >
            <p class="text-h4 text-weight-bold">U TOLL</p>
            <span class="text-weight-regular"
              >Software propio para la gestión, control de tráfico y recaudo en
              peajes. Soporta diferentes modelos de operación y tecnología, así
              como las exigencias y normatividades emitidas por las entidades
              del estado.
            </span>
          </div>
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
                class="text-h2 text-weight-bold text-secondary text-left q-ma-xl q-px-lg text-uppercase"
              >
                Peajes
              </p>
            </div>
            <div class="col-md-6 col-lg-6 q-pa-lg">
              <div class="text-center">
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso13@3x.png"
                  fit="scale-down"
                  style="max-width: 100px; height: 100px"
                />
                <div class="number-text-inline text-white">
                  <p class="text-h3 text-weight-bold text-secondary">1.</p>
                  <span class="text-h5 q-mx-lg text-left">
                    Diseño de la solución
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 q-pa-lg">
              <div class="text-center">
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso14@3x.png"
                  fit="scale-down"
                  style="max-width: 100px; height: 100px"
                />
                <div class="number-text-inline text-white">
                  <p class="text-h3 text-weight-bold text-secondary">2.</p>
                  <span class="text-h5 q-mx-lg text-left">
                    Instalación de hardware
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 q-pa-lg">
              <div class="text-center">
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso15@3x.png"
                  fit="scale-down"
                  style="max-width: 100px; height: 100px"
                />
                <div class="number-text-inline text-white">
                  <p class="text-h3 text-weight-bold text-secondary">3.</p>
                  <span class="text-h5 q-mx-lg text-left">
                    Suministro de software Utoll
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 q-pa-lg">
              <div class="text-center">
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso16@3x.png"
                  fit="scale-down"
                  style="max-width: 100px; height: 100px"
                />
                <div class="number-text-inline text-white">
                  <p class="text-h3 text-weight-bold text-secondary">4.</p>
                  <span class="text-h5 q-mx-lg text-left">
                    Puesta en marcha
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
        class="row justify-center q-my-xl"
        :class="bounceIn"
        ref="elementToObserve"
      >
        <div class="col-md-12 col-lg-12">
          <div style="padding: 4% 0% 3% 4%" class="text-primary">
            <p class="text-h2 text-weight-bold text-uppercase">EXPERIENCIA</p>
            <p class="sub-title">
              Integrador para soluciones
              <span class="text-weight-bold"> IP REV.</span>
            </p>
          </div>
        </div>
        <div class="col-md-3 col-lg-3">
          <div class="number-text-inline">
            <p class="text-h1 text-weight-bold text-primary">36</p>
            <span class="text-h4 text-primary q-mx-lg">
              Carriles manuales
            </span>
          </div>
        </div>
        <div class="col-md-3 col-lg-3">
          <div class="number-text-inline">
            <p class="text-h1 text-weight-bold text-primary">14</p>
            <span class="text-h4 text-primary q-mx-lg">
              Telepeajes en el extranjero
            </span>
          </div>
        </div>
        <div class="col-md-5 col-lg-5">
          <div class="number-text-inline">
            <p class="text-h1 text-weight-bold text-primary">92</p>
            <span class="text-h4 text-primary q-mx-lg">
              Carriles manuales y 32 carroles telepeaje en Colombia
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

const bounceIn = ref("");
const bounceInLeft = ref("");
const fadeInRight = ref("");
const animateElement = () => {
  bounceIn.value = "animate__animated animate__pulse";
  bounceInLeft.value = "animate__animated animate__bounceInLeft";
  fadeInRight.value = "animate__animated animate__fadeInRight";
  setTimeout(() => {
    bounceInLeft.value = "";
    bounceIn.value = "";
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
