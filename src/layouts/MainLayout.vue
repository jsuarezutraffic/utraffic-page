<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white q-pa-sm text-white">
      <q-toolbar>
        <div class="btn-menu">
          <q-btn
            dense
            round
            icon="drag_handle"
            @click="toggleLeftDrawer"
            color="accent"
            size="md"
          />
        </div>

        <q-toolbar-title>
          <q-img
            @click="inicio()"
            class="q-mx-sm manito"
            src="../assets/1x/Recurso1.png"
            fit="scale-down"
            style="max-width: 60px; height: 70px"
          />
        </q-toolbar-title>
        <div class="btns-header">
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
            to="/contacto"
          />
          <q-btn
            no-caps
            size="15px"
            class="q-mx-md"
            color="primary"
            label="Hablemos"
            :href="'https://wa.me/' + ascesor.telefono"
            target="_blank"
          >
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay elevated width="200">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item clickable v-ripple to="/nosotros">
            <q-item-section avatar>
              <q-icon name="home_work" />
            </q-item-section>
            <q-item-section>Nosotros </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/quehacemos">
            <q-item-section avatar>
              <q-icon name="emoji_transportation" />
            </q-item-section>

            <q-item-section>Qué hacemos </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/contacto">
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>

            <q-item-section>Contacto </q-item-section>
          </q-item>
          <!-- <q-separator />
          <q-item clickable v-ripple to="/nosotros">
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>

            <q-item-section>Hablemos </q-item-section>
          </q-item> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- footer -->
    <div class="text-white footer-container">
      <div class="row bg-accent q-py-lg iconos-fotter">
        <!-- <div class="col text-center" :class="swing">
          <a
            href="https://es-la.facebook.com/"
            target="_blank"
            class="custom-link"
            ><q-icon
              @mouseover="handleMouseOver"
              class="fa-brands fa-facebook manito"
              size="md"
          /></a>
        </div> -->
        <!-- <div class="col text-center" :class="swing">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="custom-link"
            ><q-icon
              @mouseover="handleMouseOver"
              class="fa-brands fa-instagram manito"
              size="md"
          /></a>
        </div> -->
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
        <div class="col-sm-2 col-xs-12 text-center q-my-md">
          <q-img
            class="q-mx-sm"
            src="../assets/3x/Recurso12@3x.png"
            fit="scale-down"
            style="max-width: 60px; height: 70px"
          />
        </div>
        <div class="col-sm-2 col-xs-4 text-left q-px-md">
          <p class="text-secondary">BOGOTÁ, CO.</p>
          <p class="text-white">Carrera 13 #98-70 <br />Oficina 603</p>
        </div>
        <div class="col-sm-2 col-xs-4 text-left q-px-md">
          <p class="text-secondary">Escríbenos</p>
          <p class="text-white">hola@utraffic.co</p>
        </div>
        <div class="col-sm-2 col-xs-4 text-left q-px-md">
          <p class="text-secondary">Llámanos</p>
          <p class="text-white">(601) 572 4311</p>
          <p class="text-white">+57 (318) 464 7435</p>
        </div>
      </div>
    </div>
  </q-layout>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const leftDrawerOpen = ref(false);
const ascesor = require("/public/jsonConfig.json");
const router = useRouter();

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
const inicio = () => {
  const toPath = "/";
  router.push(toPath);
};
const elementToObserve = ref(null);
onMounted(() => {});

const handleElementVisible = (target) => {
  animateElement();
  // Lógica para manejar cuando el elemento es visible cada vez que se muestra
};
</script>

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
