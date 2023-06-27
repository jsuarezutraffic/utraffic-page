<template>
  <q-page class="bg-primary">
    <div class="row">
      <!-- contenedor de imagen Carretera -->
      <div class="col-sm-12 col-xs-12 col-md-7 col-lg-6 flex flex-center">
        <q-img
          class="rounded-img-bottom-left"
          src="~assets/3x/Recurso3@3x.png"
          fit="fill"
        />
      </div>

      <!-- contenedor Somos U Traffic -->
      <div class="col-md-5 col-lg-6 div-somos-index">
        <p class="title text-weight-bold text-secondary">SOMOS U TRAFFIC</p>

        <p class="sub-title text-weight-bold text-white text-uppercase">
          SOMOS EL
          <span class="text-italic text-weight-regular text-secondary"
            >ONE STOP SHOP </span
          >de las CONCESIONES VIALES
        </p>

        <p
          class="sub-title2 text-weight-bold text-secondary"
          style="margin: 5% 0% 5% 0%"
        >
          Solución integral para peajes, ITS y operación de concesiones viales
        </p>

        <p class="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed mi
          posuere, pretium velit sit amet, maximus felis. Ut molestie consequat
          porta. Sed vitae elit at dui congue semper id mattis massa.
        </p>
        <p class="text-white">
          Nam a lectus quis augue pellentesque feugiat. Mauris condimentum
          egestas lacus. Nulla interdum ut nulla eleifend dapibus. Aliquam
          gravida justo dolor, ultricies
        </p>
      </div>

      <!-- Contenedot Iconos Peajes, ITS, Seguridad, Mantenimiento -->
      <div class="col-md-12 col-lg-12">
        <div class="row">
          <div
            class="col-sm-12 col-xs-12 col-md-4 col-lg-4 bg-white"
            style="padding: 5% 5% 5% 5%"
          >
            <div class="col-md-4 col-lg-6">
              <p class="sub-title2 text-primary" style="margin: 0% 0% 0% 0%">
                ¿Qué hacemos?
              </p>

              <p class="text-h4 text-weight-bold text-primary q-my-md">
                EL PROPÓSITO QUE
                <span class="text-italic text-weight-regular text-accent"
                  >NOS MUEVE</span
                >
              </p>
              <p class="text-primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                mi posuere, pretium velit sit amet, maximus felis. Ut molestie
                consequat porta. Sed vitae elit at dui congue semper id mattis
                massa.
              </p>
              <q-btn no-caps size="sm" color="accent" label="más info" />
            </div>
          </div>

          <div
            class="col-sm-3 col-xs-3 col-md-2 col-lg-2 bg-primary flex flex-center"
          >
            <div class="text-center">
              <q-img
                class="q-my-md img-icon"
                src="~assets/3x/Recurso4@3x.png"
                fit="scale-down"
              />
              <p
                class="text-h6 text-weight-bold text-white text-center q-mx-xl text-uppercase"
              >
                PEAJES
              </p>
            </div>
          </div>

          <div class="q-px-md col-sm-3 col-xs-3 col-md-2 col-lg-2 bg-secondary">
            <div class="text-center">
              <q-img
                class="q-my-md img-icon"
                src="~assets/3x/Recurso4(2)@3x.png"
                fit="scale-down"
              />
              <p
                class="text-h6 text-weight-bold text-primary text-center text-uppercase"
              >
                INTELLIGENT TRANSPORTATION SYSTEMS (ITS)
              </p>
            </div>
          </div>

          <div
            class="q-px-md col-sm-3 col-xs-3 col-md-2 col-lg-2 bg-accent flex flex-center"
          >
            <div class="text-center">
              <q-img
                class="q-my-md img-icon"
                src="~assets/3x/Recurso5@3x.png"
                fit="scale-down"
              />
              <p
                class="text-h6 text-weight-bold text-white text-center q-mx-lg text-uppercase"
              >
                SEGURIDAD Y SEÑALIZACIÓN
              </p>
            </div>
          </div>

          <div
            class="q-px-md col-sm-3 col-xs-3 col-md-2 col-lg-2 bg-primary flex flex-center"
          >
            <div class="text-center">
              <q-img
                class="q-my-md img-icon"
                src="~assets/3x/Recurso6@3x.png"
                fit="scale-down"
              />
              <p
                class="text-h6 text-weight-bold text-white text-center q-mx-lg text-uppercase"
              >
                MANTENIMIENTO Y OPERACIÓN
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
        <div class="container-img">
          <div
            class="div-overlay4 bg-secondary text-primary text-left"
            :class="bounceInLeft"
            ref="elementToObserve2"
          >
            <p class="text-h4 text-weight-bold q-ma-none">
              MÁS DE 15 AÑOS DE EXPERIENCIA
            </p>
          </div>
          <q-img src="~assets/3x/Recurso7@3x.png" fit="fill" />

          <div class="text-overlay q-my-md">
            <p class="text-h3 text-weight-bold text-white text-left">
              SOMOS EL
              <span class="text-italic text-weight-regular text-primary"
                >ONE STOP SHOP </span
              ><br />DE LAS CONCESIONES VIALES
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-12 bg-white q-py-xl" ref="etiquetas">
        <div class="row">
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div class="number-text-inline">
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter1 }}
              </p>
              <span class="text-h4 text-primary q-mx-lg">
                Carriles manuales
              </span>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div class="number-text-inline">
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter2 }}+
              </p>
              <span class="text-h4 text-primary q-mx-lg">
                proyectos entregados
              </span>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div class="number-text-inline">
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter3 }}
              </p>
              <span class="text-h4 text-primary q-mx-lg">
                Telepeajes en el extranjero
              </span>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div class="number-text-inline">
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter4 }}+
              </p>
              <span class="text-h4 text-primary q-mx-lg">
                Km de ITS de cielo abierto
              </span>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div class="number-text-inline">
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter5 }}
              </p>
              <span class="text-h4 text-primary q-mx-lg">
                Carriles manuales y 32 carriles de telepeaje en Colombia
              </span>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div style="margin: 0 0 0 10%">
              <span class="text-h4 text-primary"> O&M en más de </span>
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter6 }}km
              </p>
              <span class="text-h4 text-primary"> de vía consecionada </span>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div class="number-text-inline">
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter7 }}
              </p>
              <span class="text-h4 text-primary q-mx-lg">
                Peajes en operación
              </span>
            </div>
          </div>
          <div class="col-sm-6 col-xs-12 col-sm-6 col-md-6 marginy-etiquetas">
            <div class="number-text-inline">
              <p class="text-h2 text-weight-bold text-primary">
                {{ counter8 }}km
              </p>
              <span class="text-h4 text-primary q-mx-lg">
                Peajes en operación
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { gsap } from "gsap";

const bounceInLeft = ref("");
const animateElement = () => {
  bounceInLeft.value = "animate__animated animate__bounceInLeft";
  setTimeout(() => {
    bounceInLeft.value = "";
  }, 1000);
};

const etiquetas = ref(null);

const counter1 = ref(0);
const counter2 = ref(0);
const counter3 = ref(0);
const counter4 = ref(0);
const counter5 = ref(0);
const counter6 = ref(0);
const counter7 = ref(0);
const counter8 = ref(0);
const targetNumber1 = 36; // Número final del contador
const targetNumber2 = 10; // Número final del contador
const targetNumber3 = 14; // Número final del contador
const targetNumber4 = 500; // Número final del contador
const targetNumber5 = 92; // Número final del contador
const targetNumber6 = 10000; // Número final del contador
const targetNumber7 = 32; // Número final del contador
const targetNumber8 = 35; // Número final del contador

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
    duration: 2,
    onUpdate: () => {
      counter3.value = Math.ceil(counter3.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });

  gsap.to(counter4, {
    value: targetNumber4,
    duration: 1,
    onUpdate: () => {
      counter4.value = Math.ceil(counter4.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });

  gsap.to(counter5, {
    value: targetNumber5,
    duration: 1,
    onUpdate: () => {
      counter5.value = Math.ceil(counter5.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });

  gsap.to(counter6, {
    value: targetNumber6,
    duration: 1,
    onUpdate: () => {
      counter6.value = Math.ceil(counter6.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });

  gsap.to(counter7, {
    value: targetNumber7,
    duration: 1,
    onUpdate: () => {
      counter7.value = Math.ceil(counter7.value);
    },
    onComplete: () => {
      // Lógica después de completar el contador
    },
    ease: "circ.out",
  });

  gsap.to(counter8, {
    value: targetNumber8,
    duration: 1,
    onUpdate: () => {
      counter8.value = Math.ceil(counter8.value);
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
  counter4.value = 0;
  counter5.value = 0;
  counter6.value = 0;
  counter7.value = 0;
  counter8.value = 0;
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

  observer.observe(etiquetas.value);
});
</script>
