<template>
  <div class="row">
    <div class="col-md-12 col-lg-12">
      <div class="row">
        <div class="col-md-12 col-lg-12 container-img">
          <div class="row q-pa-xl justify-center" style="margin-bottom: 5%">
            <div class="col-xs-12 col-md-12 col-lg-12 q-my-xl">
              <p
                class="text-h2 text-white text-weight-bold text-left q-px-lg text-uppercase"
              >
                SEGURIDAD Y SEÑALIZACIÓN
              </p>
            </div>

            <div
              class="col-xs-12 col-md-3 col-lg-3 q-pa-lg padding-cero"
              ref="elementToObserve3"
              :class="swing"
            >
              <div
                class="bg-accent text-left q-pa-lg center-vertical-horzontal-div"
                style="height: 100%"
              >
                <div class="text-center">
                  <p class="text-h5 text-white text-left text-uppercase">
                    DISEÑO DE LA<span class="text-h5 text-weight-bold">
                      SOLUCIÓN DE SEÑALIZACIÓN Y SEGURIDAD VÍAL
                    </span>
                  </p>

                  <q-img
                    class="q-my-md"
                    src="~assets/3x/Recurso5@3x.png"
                    fit="scale-down"
                    style="max-width: 200px; height: 200px"
                  />
                </div>
              </div>
            </div>

            <div
              class="col-md-1 col-lg-1 center-vertical-horzontal-div"
              style="padding: 0%; margin: 0%"
            >
              <q-img
                src="~assets/3x/Recurso16@3x.png"
                fit="scale-down"
                style="max-width: 50px; height: 50px"
              />
            </div>
            <div
              class="col-xs-12 col-md-3 col-lg-3 q-pa-lg padding-cero"
              ref="elementToObserve3"
              :class="swing"
            >
              <div
                class="bg-secondary text-left q-pa-lg center-vertical-div"
                style="height: 100%"
              >
                <div class="text-center">
                  <q-img
                    class="q-my-md"
                    src="~assets/3x/Recurso20@3x.png"
                    fit="scale-down"
                    style="max-width: 200px; height: 200px"
                  />
                  <p class="text-h5 text-primary text-left text-uppercase">
                    TALLERES PROPIOS PARA LA FABRICACIÓN Y SEÑALIZACIÓN<span
                      class="text-h5 text-weight-bold"
                    >
                      VERTICAL Y HORIZONTAL
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div
              class="col-md-1 col-lg-1 center-vertical-horzontal-div"
              style="padding: 0%; margin: 0%"
            >
              <q-img
                src="~assets/3x/Recurso16@3x.png"
                fit="scale-down"
                style="max-width: 50px; height: 50px"
              />
            </div>
            <div
              class="col-xs-12 col-md-3 col-lg-3 q-pa-lg padding-cero"
              :class="swing"
            >
              <div
                class="bg-white text-left q-pa-lg center-vertical-div"
                style="height: 100%"
              >
                <div class="text-center">
                  <p class="text-h5 text-primary text-left text-uppercase">
                    IMPORTADORES DIRECTOS DE<span
                      class="text-h5 text-weight-bold"
                    >
                      BARANDAS DE SEGURIDAD
                    </span>
                  </p>
                  <q-img
                    class="q-my-md"
                    src="~assets/3x/Recurso21@3x.png"
                    fit="scale-down"
                    style="max-width: 200px; height: 200px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="div-overlay-security bg-accent text-white text-left q-pa-lg"
            :class="bounceInLeft"
            ref="elementToObserve2"
          >
            <p class="text-h4 text-weight-bold q-ma-none">
              MÁS DE 15 AÑOS DE EXPERIENCIA
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-12 bg-white q-py-xl q-my-lg">
      <div class="row text-secondary">
        <div class="col-md-6 col-lg-6 center-vertical-div">
          <div class="row">
            <div class="col-md-12 col-lg-12 q-pa-lg">
              <div class="text-left">
                <div class="number-text-inline-short" ref="elementToObserve">
                  <p class="text-h1 text-weight-bold text-accent">
                    {{ counter1 }}km
                  </p>
                  <span class="text-h4 text-primary q-mx-lg">
                    de vías intervenidas
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-12 q-pa-lg">
              <div class="text-left">
                <div class="number-text-inline-short" ref="elementToObserve">
                  <p class="text-h1 text-weight-bold text-accent">
                    +{{ counter2 }}K
                  </p>
                  <span class="text-h4 text-primary q-mx-lg">
                    Metros lineales de defensas instaladas
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-12 q-pa-lg">
              <div class="text-left">
                <div class="number-text-inline-short" ref="elementToObserve">
                  <p class="text-h1 text-weight-bold text-accent">
                    +{{ counter3.toLocaleString() }}
                  </p>
                  <span class="text-h4 text-primary q-mx-lg">
                    Señales verticales instaladas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-6 container-img center-vertical-horzontal-div"
        >
          <q-img
            class="rounded-img-bottom-right"
            src="~assets/3x/Recurso22@3x.png"
            fit="fill"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { gsap } from "gsap";

const swing = ref("");
const bounceIn = ref("");
const bounceInLeft = ref("");
const animateElement = () => {
  bounceIn.value = "animate__animated animate__pulse";
  swing.value = "animate__animated animate__swing";
  bounceInLeft.value = "animate__animated animate__bounceInLeft";
  setTimeout(() => {
    bounceIn.value = "";
    swing.value = "";
    bounceInLeft.value = "";
  }, 1000);
};

const elementToObserve = ref(null);
const elementToObserve2 = ref(null);
const elementToObserve3 = ref(null);

const counter1 = ref(0);
const counter2 = ref(0);
const counter3 = ref(0);
const targetNumber1 = 1000; // Número final del contador
const targetNumber2 = 10; // Número final del contador
const targetNumber3 = 10000; // Número final del contador

const count = () => {
  gsap.to(counter1, {
    value: targetNumber1,
    duration: 1,
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
    duration: 3,
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
  counter1.value = 0;
  counter2.value = 0;
  counter3.value = 0;
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
        handleElementVisible(entry.target);
      }
    });
  }, options);

  observer.observe(elementToObserve.value);
  observer.observe(elementToObserve2.value);
  observer.observe(elementToObserve3.value);
});
</script>
