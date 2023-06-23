<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white q-pa-sm text-white">
      <q-toolbar>
        <q-btn
          dense
          round
          icon="drag_handle"
          @click="toggleLeftDrawer"
          color="accent"
          size="md"
        />
        <q-toolbar-title>
          <q-img
            @click="inicio()"
            class="q-mx-sm manito"
            src="../assets/1x/Recurso1.png"
            fit="scale-down"
            style="max-width: 60px; height: 70px"
          />
        </q-toolbar-title>
        <div class="">
          <q-btn
            size="15px"
            no-caps
            flat
            color="primary"
            label="Nosotros"
            to="/nosotros"
          />
          <q-btn
            size="15px"
            no-caps
            flat
            color="primary"
            label="Qué hacemos"
            to="/quehacemos"
          />
          <q-btn
            size="15px"
            no-caps
            flat
            color="primary"
            label="Contacto"
            to="/nosotros"
          />
          <q-btn
            no-caps
            size="15px"
            class="q-mx-md"
            color="primary"
            label="Hablemos"
            to="/nosotros"
          />
          <!-- <q-btn no-caps flat>
            <div class="text-right">
              <div
                class="text-secondary text-weight-bold"
                style="display: block; margin-bottom: -8px"
              >
                03
              </div>
              <div class="text-primary" style="display: block">Contacto</div>
            </div>
          </q-btn> -->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- footer -->
    <div class="text-white footer-container">
      <div class="row bg-accent q-py-lg">
        <div class="col text-center" :class="swing">
          <a
            href="https://es-la.facebook.com/"
            target="_blank"
            class="custom-link"
            ><q-icon
              @mouseover="handleMouseOver"
              class="fa-brands fa-facebook manito"
              size="md"
          /></a>
        </div>
        <div class="col text-center" :class="swing">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="custom-link"
            ><q-icon
              @mouseover="handleMouseOver"
              class="fa-brands fa-instagram manito"
              size="md"
          /></a>
        </div>
        <div class="col text-center" :class="swing">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            class="custom-link"
            ><q-icon
              @mouseover="handleMouseOver"
              class="fa-brands fa-linkedin manito"
              size="md"
          /></a>
        </div>
      </div>
      <div class="row bg-primary q-pa-lg justify-center">
        <div class="col-2 text-center">
          <q-img
            class="q-mx-sm"
            src="../assets/3x/Recurso12@3x.png"
            fit="scale-down"
            style="max-width: 60px; height: 70px"
          />
        </div>
        <div class="col-2 text-left">
          <p class="text-secondary">BOGOTÁ, CO.</p>
          <p class="text-white">Carrera 11 #79-66 <br />Oficina 440</p>
        </div>
        <div class="col-2 text-left">
          <p class="text-secondary">BOGOTÁ, CO.</p>
          <p class="text-white">Carrera 11 #79-66 <br />Oficina 440</p>
        </div>
        <div class="col-2 text-left">
          <p class="text-secondary">BOGOTÁ, CO.</p>
          <p class="text-white">Carrera 11 #79-66 <br />Oficina 440</p>
        </div>
      </div>
    </div>
  </q-layout>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const leftDrawerOpen = ref(false);
const router = useRouter();
const inicio = () => {
  router.push("/");
};

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const handleMouseOver = () => {
  animateElement();
};
const swing = ref("");
const animateElement = () => {
  swing.value = "animate__animated animate__swing";
  setTimeout(() => {
    swing.value = "";
  }, 1000);
};

const elementToObserve = ref(null);
onMounted(() => {
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5, // Porcentaje del elemento visible en el área de observación para disparar la intersección
  // };
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       // El elemento es visible en el área de observación
  //       handleElementVisible(entry.target);
  //     }
  //   });
  // }, options);
  // observer.observe(elementToObserve.value);
});

const handleElementVisible = (target) => {
  animateElement();
  console.log("Elemento visible:", target);
  // Lógica para manejar cuando el elemento es visible cada vez que se muestra
};
</script>
<!-- <script>


export default {
  setup() {

    return {
      inicio,
      leftDrawerOpen,
      ,
    };
  },
};
</script> -->
<style lang="scss">
.custom-link {
  text-decoration: none; /* Elimina la subrayado del enlace */
  color: inherit; /* Hereda el color del elemento padre (el botón) */
}

.custom-link:hover {
  /* Opcional: Estilos adicionales al pasar el ratón por encima del enlace */
  text-decoration: underline; /* Subrayado al pasar el ratón */
  color: $primary; /* Hereda el color del elemento padre (el botón) */
}
</style>
