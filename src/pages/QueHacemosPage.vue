<template>
  <q-page class="bg-primary">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="container-img bg-white">
          <q-img src="~assets/3x/Recurso8@3x.jpeg" fit="fill" />
          <div class="text-overlay-title q-my-xl">
            <p class="text-h3 text-weight-bold text-white">
              SOMOS EL
              <span class="text-italic text-weight-regular">ONE STOP SHOP </span
              >DE LAS CONCESIONES VIALES
            </p>
          </div>
          <div
            class="row justify-center div-overlay-four-items"
            :class="zoomInDown"
          >
            <div
              class="div-big col-sm-3 col-xs-3 col-md-2 col-lg-2 bg-primary flex flex-center clickeable"
            >
              <div
                :class="'text-center manito ' + bounceIn"
                @click="clikArea('peaje')"
              >
                <q-img
                  class="q-my-md img-icon"
                  src="~assets/3x/Recurso4@3x.png"
                  fit="scale-down"
                />
                <p
                  class="text-h6 text-weight-bold text-white text-center q-mx-xl text-uppercase"
                >
                  Peajes
                </p>
              </div>
            </div>
            <div
              class="div-big col-xs-3 col-md-2 col-lg-2 bg-secondary flex flex-center clickeable"
              @click="clikArea('its')"
            >
              <div :class="'text-center manito ' + bounceIn">
                <q-img
                  class="q-my-md img-icon"
                  src="~assets/3x/Recurso4(2)@3x.png"
                  fit="scale-down"
                />
                <p
                  class="text-h6 text-weight-bold text-primary text-center q-mx-lg text-uppercase"
                >
                  INTELLIGENT TRANSPORTATION SYSTEMS (ITS)
                </p>
              </div>
            </div>
            <div
              class="div-big col-xs-3 col-md-2 col-lg-2 bg-accent flex flex-center clickeable"
              @click="clikArea('seguridad')"
            >
              <div :class="'text-center manito ' + bounceIn">
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
              class="div-big col-xs-3 col-md-2 col-lg-2 bg-primary flex flex-center clickeable"
              @click="clikArea('mantenimiento')"
            >
              <div :class="'text-center manito ' + bounceIn">
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
      </div>

      <div
        class="col-md-12 col-lg-12 bg-white div-espaciado"
        style="height: 25vh"
      ></div>

      <!-- Contenedor de Peaje -->
      <div class="col-md-12 col-lg-12" :class="bounceInLeft">
        <Peaje v-show="peaje" />
        <Mantenimiento v-show="mantenimiento" />
        <Seguridad v-show="seguridad" />
        <Its v-show="its" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import Peaje from "src/components/PeajeContent.vue";
import Mantenimiento from "src/components/MantenimientoContent.vue";
import Seguridad from "src/components/SeguridadContent.vue";
import Its from "src/components/ITSContent.vue";
import { ref } from "vue";

const peaje = ref(true);
const its = ref(false);
const seguridad = ref(false);
const mantenimiento = ref(false);

const verDiv = ref(false);
const bounceInLeft = ref("");
const bounceIn = ref("");
const zoomInDown = ref("");

const classIconos = ref({
  peaje: "",
  its: "",
  seguridad: "",
  mantenimiento: "",
});

const animateElement = () => {
  bounceInLeft.value = "animate__animated animate__bounceInLeft";
  bounceIn.value = "animate__animated animate__bounceIn";
  zoomInDown.value = "animate__animated animate__bounceIn";
  setTimeout(() => {
    bounceInLeft.value = "";
    bounceIn.value = "";
    // zoomInDown.value = "";
  }, 1000);
};

onMounted(() => {
  animateElement();
});

const clikArea = (key) => {
  animateElement();
  switch (key) {
    case "peaje":
      peaje.value = true;
      its.value = false;
      seguridad.value = false;
      mantenimiento.value = false;
      break;
    case "its":
      peaje.value = false;
      its.value = true;
      seguridad.value = false;
      mantenimiento.value = false;
      break;

    case "seguridad":
      peaje.value = false;
      its.value = false;
      seguridad.value = true;
      mantenimiento.value = false;
      break;
    case "mantenimiento":
      peaje.value = false;
      its.value = false;
      seguridad.value = false;
      mantenimiento.value = true;
      break;

    default:
      break;
  }
};
</script>
