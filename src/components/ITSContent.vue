<template>
  <div class="row">
    <div class="col-md-12 col-lg-12">
      <div class="row">
        <div class="col-md-12 col-lg-12 container-img">
          <q-img src="~assets/3x/Recurso10@3x.png" fit="fill" />
        </div>
        <div
          class="col-md-12 col-lg-12 center-vertical-div text-primary bg-white"
        >
          <div class="row justify-between q-pa-xl">
            <div class="col-md-12 col-lg-12">
              <p
                class="text-h2 text-weight-bold text-left q-px-lg text-uppercase"
              >
                ITS
              </p>

              <p class="text-h4 text-left q-px-lg">
                Solución para el cumplimiento con el contrato ITS de los
                <span class="text-weight-bold"
                  >proyectos en concesión 4G y 5G.</span
                >
              </p>
            </div>
            <div
              class="col-md-3 col-lg-3 q-pa-lg"
              ref="elementToObserve"
              :class="swing"
            >
              <div
                class="div-rounded-bottom-right q-my-xl bg-secondary text-left q-pa-lg"
              >
                <div class="text-center">
                  <q-img
                    class="q-my-md"
                    src="~assets/3x/Recurso17@3x.png"
                    fit="scale-down"
                    style="max-width: 200px; height: 200px"
                  />
                  <div class="">
                    <span class="text-h5 text-center">
                      Suministro de equipos
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-lg-3 q-pa-lg"
              ref="elementToObserve"
              :class="swing"
            >
              <div
                class="div-rounded-bottom-right q-my-xl bg-secondary text-left q-pa-lg"
              >
                <div class="text-center">
                  <q-img
                    class="q-my-md"
                    src="~assets/3x/Recurso18@3x.png"
                    fit="scale-down"
                    style="max-width: 200px; height: 200px"
                  />
                  <div class="">
                    <span class="text-h5 text-center">
                      Suministro de equipos
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-3 col-lg-3 q-pa-lg"
              ref="elementToObserve"
              :class="swing"
            >
              <div
                class="div-rounded-bottom-right q-my-xl bg-secondary text-left q-pa-lg"
              >
                <div class="text-center">
                  <q-img
                    class="q-my-md"
                    src="~assets/3x/Recurso19@3x.png"
                    fit="scale-down"
                    style="max-width: 200px; height: 200px"
                  />
                  <div class="">
                    <span class="text-h5 text-center">
                      Suministro de equipos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col-md-12 col-lg-12 container-img"
      :class="bounceInLeft"
      ref="elementToObserve2"
    >
      <div
        class="div-overlay3 bg-accent text-white text-left q-pa-lg"
        style="right: 40%; left: 5%"
      >
        <p class="text-h4 text-weight-bold q-ma-none">
          MÁS DE 15 AÑOS DE EXPERIENCIA
        </p>
      </div>
    </div>

    <div class="col-md-12 col-lg-12 bg-white q-py-xl">
      <div
        class="row justify-center q-my-xl"
        :class="bounceIn"
        ref="elementToObserve3"
      >
        <div class="col-md-3 col-lg-3 q-mx-lg">
          <p class="text-h1 text-weight-bold text-primary" style="margin: 0%">
            35km
          </p>
          <span class="text-h4 text-primary">de túneles en 36 proyectos </span>
        </div>
        <div class="col-md-3 col-lg-3 q-mx-lg">
          <p class="text-h1 text-weight-bold text-primary" style="margin: 0%">
            10+
          </p>
          <span class="text-h4 text-primary">proyectos entregados </span>
        </div>
        <div class="col-md-3 col-lg-3 q-mx-lg">
          <p class="text-h1 text-weight-bold text-primary" style="margin: 0%">
            500+
          </p>
          <span class="text-h4 text-primary">Km de ITS de cielo abierto </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from "vue";

const bounceIn = ref("");
const swing = ref("");
const bounceInLeft = ref("");
const fadeInRight = ref("");
const animateElement = () => {
  bounceIn.value = "animate__animated animate__bounceIn";
  swing.value = "animate__animated animate__swing";
  bounceInLeft.value = "animate__animated animate__bounceInLeft";
  fadeInRight.value = "animate__animated animate__fadeInRight";
  setTimeout(() => {
    bounceIn.value = "";
    swing.value = "";
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
