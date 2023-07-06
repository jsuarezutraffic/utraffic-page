<template>
  <q-page class="bg-primary">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-6">
        <div class="col-md-4 col-lg-6 div-nosotros-form">
          <div class="contact_form text-primary">
            <div class="formulario">
              <h1 class="text-h3 text-accent">Formulario de contacto</h1>
              <h3 class="text-h5 text-primary">
                Escríbenos y en breve los pondremos en contacto contigo
              </h3>
              <q-form @submit.prevent="enviarInfoContacto()">
                <q-input
                  v-model="datos.nombre"
                  label="Nombre *"
                  type="text"
                  color="secondary"
                  outlined
                  required="obligatorio"
                />
                <q-input
                  v-model="datos.email"
                  label="Email *"
                  type="email"
                  color="secondary"
                  outlined
                  class="q-my-md"
                  required="obligatorio"
                />
                <q-input
                  v-model="datos.telefono"
                  mask="(###) ### - ####"
                  label="Teléfono *"
                  type="text"
                  color="secondary"
                  outlined
                  class="q-my-md"
                  required="obligatorio"
                />
                <q-input
                  v-model="datos.mensaje"
                  label="Mensaje *"
                  type="textarea"
                  color="secondary"
                  outlined
                  class="q-my-md"
                  required="obligatorio"
                />

                <q-btn
                  :disable="disable"
                  style="width: 100%"
                  color="primary"
                  type="submit"
                  name="enviar_formulario"
                  id="enviar"
                  label="Enviar"
                />

                <p class="aviso">
                  <span class="obligatorio"> * </span>los campos son
                  obligatorios.
                </p>
              </q-form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-lg-6 bg-white center-icon-contacto">
        <div class="row">
          <div
            class="col-sm-4 col-xs-4 col-md-12 div-icon-contacto center-vertical-horzontal-div"
            :class="swingLinkedin"
          >
            <a
              href="https://www.linkedin.com/company/u-traffic-s-a-s/"
              target="_blank"
              class="custom-link"
              ><q-icon
                color="primary"
                @mouseover="handleMouseOver('linkedin')"
                class="fa-brands fa-linkedin manito"
                size="10vw"
            /></a>
          </div>
          <!-- <i class="fa-brands fa-whatsapp"></i> -->

          <div
            class="col-sm-4 col-xs-4 col-md-12 div-icon-contacto center-vertical-horzontal-div"
            :class="swingWhatsapp"
          >
            <a
              :href="'https://wa.me/' + ascesor.telefono"
              target="_blank"
              class="custom-link"
            >
              <q-icon
                color="primary"
                @mouseover="handleMouseOver('whatsapp')"
                class="fa-brands fa-whatsapp manito"
                size="10vw"
              />
            </a>
          </div>
          <div
            class="col-sm-4 col-xs-4 col-md-12 div-icon-contacto center-vertical-horzontal-div"
            :class="swingGoogle"
          >
            <a
              :href="'mailto:' + ascesor.email"
              target="_blank"
              class="custom-link"
              ><q-icon
                color="primary"
                @mouseover="handleMouseOver('google')"
                class="fa-brands fa-google manito"
                size="10vw"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import axios from "axios";
let $q = useQuasar();
const datos = ref({});
const disable = ref(false);
const ascesor = require("/public/jsonConfig.json");
const swingLinkedin = ref("");
const swingWhatsapp = ref("");
const swingGoogle = ref("");

const handleMouseOver = (value) => {
  animateElement(value);
};

const animateElement = (value) => {
  switch (value) {
    case "linkedin":
      swingLinkedin.value = "animate__animated animate__swing";
      setTimeout(() => {
        swingWhatsapp.value = "";
        swingGoogle.value = "";
      }, 1000);
      break;
    case "whatsapp":
      swingWhatsapp.value = "animate__animated animate__swing";
      setTimeout(() => {
        swingLinkedin.value = "";
        swingGoogle.value = "";
      }, 1000);
      break;
    case "google":
      swingGoogle.value = "animate__animated animate__swing";
      setTimeout(() => {
        swingLinkedin.value = "";
        swingWhatsapp.value = "";
      }, 1000);
      break;
  }
};

const enviarInfoContacto = async () => {
  disable.value = true;
  var dataMessage = {};
  const apiKey =
    "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";
  var accion = `Solicitud Contacto Cliente!`;
  var mensaje = `<strong>El cliente solicita que se le contacte</strong><br>
  <p><strong>Nombre:</strong> ${datos.value.nombre}</p>
  <p><strong>Correo:</strong> ${datos.value.email}</p>
  <p><strong>Teléfono:</strong> ${datos.value.telefono}</p>
  <p><strong>Mensaje:</strong> ${datos.value.mensaje}</p>`;
  var plantilla = require("./PlantillaCorreo.html").default.toString();
  plantilla = plantilla.replace("${accion}", accion);
  plantilla = plantilla.replace("${mensaje}", mensaje);

  //soporte@utraffic.co
  //#Utraffic2022**
  const data2 = {
    sender: {
      name: "Soporte Utraffic",
      email: "soporte@utraffic.co",
    },
    to: [
      {
        email: ascesor.email,
        name: ascesor.nombre,
      },
    ],
    subject: `Solicitud Contacto Cliente`,
    htmlContent: plantilla,
  };

  await axios
    .post("https://api.brevo.com/v3/smtp/email", data2, {
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
    })
    .then((response) => {
      datos.value = {};
      $q.notify({
        type: "positive",
        message: `Gracias por preferir UTraffic, se le estara contactando lo antes posible`,
        timeout: 4000,
      });
      disable.value = false;
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      disable.value = false;
    });
};
</script>
