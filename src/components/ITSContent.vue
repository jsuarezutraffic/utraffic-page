<template>
  <div class="row bg-white">
    <div class="col-md-12 col-lg-12">
      <div class="row">
        <div class="col-md-12 col-lg-12 container-img">
          <q-img src="~assets/3x/Recurso10@3x.jpeg" fit="fill" />
        </div>
        <div class="col-md-12 col-lg-12 center-vertical-div text-primary">
          <div class="row justify-between q-pa-xl">
            <div class="col-md-12 col-lg-12">
              <p
                class="text-h2 negrita text-left q-px-lg text-uppercase text-primary"
              >
                ITS
              </p>

              <p class="text-h4 text-left q-px-lg text-primary">
                Solución para el cumplimiento con el contrato ITS de los
                <span class="negrita">proyectos en concesión 4G y 5G.</span>
              </p>
            </div>
            <div class="col div-box-its" ref="elementToObserve" :class="swing">
              <div
                class="div-rounded-bottom-right text-left bg-secondary q-pa-lg center-vertical-horzontal-div"
                style="height: 100%"
              >
                <div class="text-center">
                  <q-img
                    class="q-my-md img-icon-its"
                    src="~assets/3x/Recurso17@3x.png"
                    fit="scale-down"
                  />
                  <span class="text-h4 text-center">
                    Suministro de equipos
                  </span>
                </div>
              </div>
            </div>
            <div class="col div-box-its" ref="elementToObserve" :class="swing">
              <div
                class="div-rounded-bottom-right text-left bg-secondary q-pa-lg center-vertical-horzontal-div"
                style="height: 100%"
              >
                <div class="text-center">
                  <q-img
                    class="q-my-md img-icon-its"
                    src="~assets/3x/Recurso18@3x.png"
                    fit="scale-down"
                  />
                  <span class="text-h4 text-center">
                    Equipo humano certificado
                  </span>
                </div>
              </div>
            </div>
            <div class="col div-box-its" ref="elementToObserve" :class="swing">
              <div
                class="div-rounded-bottom-right text-left bg-secondary q-pa-lg center-vertical-horzontal-div"
                style="height: 100%"
              >
                <div class="text-center">
                  <q-img
                    class="q-my-md img-icon-its"
                    src="~assets/3x/Recurso19@3x.png"
                    fit="scale-down"
                  />
                  <span class="text-h4 text-center">
                    Suministro de SCADA abierto
                  </span>
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
      <div class="div-overlay-its bg-accent text-left q-pa-lg">
        <p class="text-h4 text-weight-bold q-ma-none aptos-black text-white">
          MÁS DE 15 AÑOS DE EXPERIENCIA
        </p>
      </div>
    </div>

    <div class="col-md-12 col-lg-12 q-py-xl hide-etiquetas-its">
      <div
        class="row justify-center q-my-xl"
        :class="bounceIn"
        ref="elementToObserve3"
      >
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="number-text-inline show-etiquetas-its">
            <p class="text-h1 text-weight-bold text-primary font-number">
              {{ counter1 }}km
            </p>
            <span class="text-h4 text-primary q-mx-lg">
              de túneles en 36 proyectos
            </span>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="number-text-inline show-etiquetas-its">
            <p class="text-h1 text-weight-bold text-primary font-number">
              {{ counter2 }}+
            </p>
            <span class="text-h4 text-primary q-mx-lg">
              proyectos entregados
            </span>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="number-text-inline show-etiquetas-its">
            <p class="text-h1 text-weight-bold text-primary font-number">
              {{ counter3 }}+
            </p>
            <span class="text-h4 text-primary q-mx-lg">
              Km de ITS de cielo abierto
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-12 q-py-xl show-etiquetas-its">
      <div
        class="row justify-center q-my-xl"
        :class="bounceIn"
        ref="elementToObserve3"
      >
        <div class="col-md-3 col-lg-3 q-mx-lg">
          <p
            class="text-h1 text-weight-bold text-primary font-number"
            style="margin: 0%"
          >
            {{ counter1 }}km
          </p>
          <span class="text-h4 text-primary">de túneles en 36 proyectos </span>
        </div>
        <div class="col-md-3 col-lg-3 q-mx-lg">
          <p
            class="text-h1 text-weight-bold text-primary font-number"
            style="margin: 0%"
          >
            {{ counter2 }}+
          </p>
          <span class="text-h4 text-primary">proyectos entregados </span>
        </div>
        <div class="col-md-3 col-lg-3 q-mx-lg">
          <p
            class="text-h1 text-weight-bold text-primary font-number"
            style="margin: 0%"
          >
            {{ counter3 }}+
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
import { gsap } from "gsap";

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

const counter1 = ref(0);
const counter2 = ref(0);
const counter3 = ref(0);
const targetNumber1 = 35; // Número final del contador
const targetNumber2 = 10; // Número final del contador
const targetNumber3 = 500; // Número final del contador

const count = () => {
  gsap.to(counter1, {
    value: targetNumber1,
    duration: 2,
    onUpdate: () => {
      counter1.value = Math.ceil(counter1.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });

  gsap.to(counter2, {
    value: targetNumber2,
    duration: 2,
    onUpdate: () => {
      counter2.value = Math.ceil(counter2.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });

  gsap.to(counter3, {
    value: targetNumber3,
    duration: 1,
    onUpdate: () => {
      counter3.value = Math.ceil(counter3.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });
};

const handleElementVisible = (target) => {
  count();
  animateElement();
  // Lógica para manejar cuando el elemento es visible cada vez que se muestra
};
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
        counter1.value = 0;
        counter2.value = 0;
        counter3.value = 0;
        handleElementVisible(entry.target);
      }
    });
  }, options);

  observer.observe(elementToObserve.value);
  observer.observe(elementToObserve2.value);
  observer.observe(elementToObserve3.value);
});
</script>
