<template>
  <q-page class="bg-primary">
    <div class="row">
      <!-- contenedor de imagen Carretera -->
      <div class="col-xs-12 col-md-8 col-lg-6 flex flex-center">
        <q-img
          class="rounded-img-bottom-left"
          src="~assets/3x/Recurso3@3x.png"
          fit="fill"
        />
      </div>

      <!-- contenedor Somos U Traffic -->
      <div
        class="col-md-4 col-lg-6"
        style="display: block; padding: 0% 3% 0% 0%"
      >
        <p
          class="title text-weight-bold text-secondary"
          style="display: block; margin: 23% 0% 2% 0%"
        >
          SOMOS U TRAFFI
        </p>

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
      <div class="col-md-12 col-lg-12 superior">
        <div class="row">
          <div class="col-md-4 col-lg-4 bg-white" style="padding: 5% 5% 5% 5%">
            <div class="col-md-4 col-lg-6">
              <p class="sub-title2 text-tertiary" style="margin: 0% 0% 0% 0%">
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
          <!-- <div class="col-md-2 col-lg-2 bg-primary flex flex-center">
            <div class="text-center">
              <q-img
                class="q-my-md"
                src="~assets/3x/Recurso4@3x.png"
                fit="scale-down"
                style="max-width: 150px; height: 150px"
              />
              <p
                class="text-weight-bold text-white text-center q-mx-lg text-uppercase"
              >
                Peajes
              </p>
            </div>
          </div> -->
          <div class="col-md-2 col-lg-2 bg-primary flex flex-center">
            <div class="text-center">
              <q-img
                class="q-my-md"
                src="~assets/3x/Recurso4@3x.png"
                fit="scale-down"
                style="max-width: 150px; height: 150px"
              />
              <p
                class="text-weight-bold text-white text-center q-mx-xl text-uppercase"
              >
                PEAJES
              </p>
            </div>
          </div>
          <div class="col-md-2 col-lg-2 bg-secondary flex flex-center">
            <div class="text-center">
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
          <div class="col-md-2 col-lg-2 bg-accent flex flex-center">
            <div class="text-center">
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
          <div class="col-md-2 col-lg-2 bg-primary flex flex-center">
            <div class="text-center">
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

      <div class="col-md-12 col-lg-12">
        <div class="container-img">
          <div
            class="div-overlay4 bg-secondary text-primary text-left q-pa-lg"
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

      <div class="col-md-12 col-lg-12 bg-white q-py-xl">
        <div class="row q-my-xl">
          <div class="col-md-6 q-my-md">
            <div class="number-text-inline">
              <p class="text-h1 text-weight-bold text-primary">36</p>
              <span class="text-h4 text-primary q-mx-lg">
                Carriles manuales
              </span>
            </div>
          </div>
          <div class="col-md-6 q-my-md">
            <div class="number-text-inline">
              <p class="text-h1 text-weight-bold text-primary">10+</p>
              <span class="text-h4 text-primary q-mx-lg">
                proyectos entregados
              </span>
            </div>
          </div>
          <div class="col-md-6 q-my-md">
            <div class="number-text-inline">
              <p class="text-h1 text-weight-bold text-primary">14</p>
              <span class="text-h4 text-primary q-mx-lg">
                Telepeajes en el extranjero
              </span>
            </div>
          </div>
          <div class="col-md-6 q-my-md">
            <div class="number-text-inline">
              <p class="text-h1 text-weight-bold text-primary">500+</p>
              <span class="text-h4 text-primary q-mx-lg">
                Km de ITS de cielo abierto
              </span>
            </div>
          </div>
          <div class="col-md-6 q-my-md">
            <div class="number-text-inline">
              <p class="text-h1 text-weight-bold text-primary">92</p>
              <span class="text-h4 text-primary q-mx-lg">
                Carriles manuales y 32 carriles de telepeaje en Colombia
              </span>
            </div>
          </div>
          <div class="col-md-6 q-my-md">
            <div style="margin: 0 0 0 10%">
              <span class="text-h4 text-primary"> O&M en más de </span>
              <p class="text-h1 text-weight-bold text-primary">1000km</p>
              <span class="text-h4 text-primary"> de vía consecionada </span>
            </div>
          </div>
          <div class="col-md-6 q-my-md">
            <div class="number-text-inline">
              <p class="text-h1 text-weight-bold text-primary">32</p>
              <span class="text-h4 text-primary q-mx-lg">
                Peajes en operación
              </span>
            </div>
          </div>
          <div class="col-md-6 q-my-md">
            <div class="number-text-inline">
              <p class="text-h1 text-weight-bold text-primary">35km</p>
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

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
