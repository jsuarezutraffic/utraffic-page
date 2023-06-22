<template>
  <q-page class="bg-primary">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="container-img bg-white">
          <q-img src="~assets/3x/Recurso8@3x.png" fit="fill" />
          <div class="text-overlay2 q-my-xl">
            <p class="text-h3 text-weight-bold text-white">
              SOMOS EL
              <span class="text-italic text-weight-regular">ONE STOP SHOP </span
              >DE LAS CONCESIONES VIALES
            </p>
          </div>
          <div class="row justify-center div-overlay">
            <div
              class="col-md-2 col-lg-2 bg-primary flex flex-center clickeable"
            >
              <div
                :class="'text-center manito ' + bounceIn"
                @click="clikArea('peaje')"
              >
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso4@3x.png"
                  fit="scale-down"
                  style="max-width: 150px; height: 150px"
                />
                <p
                  class="text-weight-bold text-white text-center q-mx-xl text-uppercase"
                >
                  Peajes
                </p>
              </div>
            </div>
            <div
              class="col-md-2 col-lg-2 bg-secondary flex flex-center clickeable"
              @click="clikArea('its')"
            >
              <div :class="'text-center manito ' + bounceIn">
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso4(2)@3x.png"
                  fit="scale-down"
                  style="max-width: 150px; height: 150px"
                />
                <p
                  class="text-weight-bold text-primary text-center q-mx-lg text-uppercase"
                >
                  INTELLIGENT TRANSPORTATION SYSTEMS (ITS)
                </p>
              </div>
            </div>
            <div
              class="col-md-2 col-lg-2 bg-accent flex flex-center clickeable"
              @click="clikArea('seguridad')"
            >
              <div :class="'text-center manito ' + bounceIn">
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso5@3x.png"
                  fit="scale-down"
                  style="max-width: 150px; height: 150px"
                />
                <p
                  class="text-weight-bold text-white text-center q-mx-lg text-uppercase"
                >
                  SEGURIDAD Y SEÑALIZACIÓN
                </p>
              </div>
            </div>
            <div
              class="col-md-2 col-lg-2 bg-primary flex flex-center clickeable"
              @click="clikArea('mantenimiento')"
            >
              <div :class="'text-center manito ' + bounceIn">
                <q-img
                  class="q-my-md"
                  src="~assets/3x/Recurso6@3x.png"
                  fit="scale-down"
                  style="max-width: 150px; height: 150px"
                />
                <p
                  class="text-weight-bold text-white text-center q-mx-lg text-uppercase"
                >
                  MANTENIMIENTO Y OPERACIÓN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 col-lg-12 bg-white" style="height: 25vh"></div>

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

const animateElement = () => {
  bounceInLeft.value = "animate__animated animate__bounceInLeft";
  bounceIn.value = "animate__animated animate__bounceIn";
  setTimeout(() => {
    bounceInLeft.value = "";
    bounceIn.value = "";
  }, 1000);
};

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
<style lang="scss">
// .animate__animated.animate__backOutUp {
//   --animate-duration: 2s;
//   transform: translateY(-100px) scale(1);
// }
.div-rounded {
  border-radius: 0 0 30px 0;
}
.div-center {
  margin-left: auto;
  margin-right: auto;
}
.title {
  margin: 0%;
  font-size: 40px;
}

.sub-title {
  margin: 0%;
  font-size: 25px;
}

.sub-title2 {
  font-size: 20px;
}
.container-img {
  position: relative;
  width: 100%;
}
.contenedor {
  position: relative;
}
.manito {
  cursor: pointer;
}
.text-overlay2 {
  //centrar un objeto absoluto orizontalmente
  position: absolute;
  top: 3%;
  left: 0%;
  right: 0%;
  text-align: center;
  padding: auto;
}
.container-div {
  position: relative;
}
.div-overlay {
  //centrar un objeto absoluto orizontalmente
  position: absolute;
  // top: 0%;
  left: 0%;
  right: 0%;
  bottom: -10%;
  text-align: center;
  padding: auto;
}

.div-overlay2 {
  border-radius: 0 0 40px 0;
  //centrar un objeto absoluto orizontalmente
  position: absolute;
  // top: 0%;
  left: 10%;
  right: 55%;
  bottom: 10%;
  padding: auto;
}
.div-overlay3 {
  border-radius: 0 0 40px 0;
  //centrar un objeto absoluto orizontalmente
  position: absolute;
  // top: 0%;
  left: 10%;
  right: -5%;
  bottom: -5vh;
  padding: auto;
  z-index: 1;
}
.numero-text2 {
  // padding: top right buttom left;
  padding: 0% 5% 0% 5%;
  display: flex;
  align-items: center;
  justify-content: left;
}
.numero-text {
  // padding: top right buttom left;
  padding: 0% 10% 0% 10%;
  display: flex;
  align-items: center;
  justify-content: left;
}
//centrar div verticalmente   --- LOS hijos se centraran verticalmente
.center-vertical-div {
  display: flex;
  align-items: center;
}

//centrar div verticalmente   --- LOS hijos se centraran verticalmente
.center-vertical-horzontal-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

//efecto de click
.clickeable {
  position: relative;
  overflow: hidden;
}

.clickeable::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.clickeable:active::after {
  transform: translate(-50%, -50%) scale(2);
  opacity: 1;
}
</style>
