<template>
  <div class="row">
    <div class="col-md-12 col-lg-12">
      <div class="row">
        <div class="col-md-12 col-lg-12 container-img">
          <div class="row q-pa-xl" style="margin-bottom: 5%">
            <div class="col-md-12 col-lg-12 q-my-xl">
              <p
                class="text-h2 text-white text-weight-bold text-left q-px-lg text-uppercase"
              >
                SEGURIDAD Y SEÑALIZACIÓN
              </p>
            </div>
            <div class="col-md-3 col-lg-3 q-pa-lg padding-cero">
              <div
                class="bg-accent text-left q-pa-lg center-vertical-div"
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
            <div class="col-md-4 col-lg-4 q-pa-lg padding-cero">
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
            <div class="col-md-3 col-lg-3 q-pa-lg padding-cero">
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
          <div class="div-overlay4 bg-accent text-white text-left q-pa-lg">
            <p class="text-h4 text-weight-bold q-ma-none">
              MÁS DE 15 AÑOS DE EXPERIENCIA
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-6 bg-white">
      <div class="row q-my-xl q-pa-xl">
        <div class="col-md-12 col-lg-12">
          <div class="numero-text2">
            <p class="text-h1 text-weight-bold text-accent">1000km</p>
            <span class="text-h4 text-primary q-mx-lg">
              de vías intervenidas
            </span>
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="numero-text2">
            <p class="text-h1 text-weight-bold text-accent">+10K</p>
            <span class="text-h4 text-primary q-mx-lg">
              Metros lineales de defensas instaladas
            </span>
          </div>
        </div>
        <div class="col-md-12 col-lg-12">
          <div class="numero-text2">
            <p class="text-h1 text-weight-bold text-accent">+10.000</p>
            <span class="text-h4 text-primary q-mx-lg">
              Señales verticales instaladas
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-6 flex flex-center bg-white">
      <q-img
        class="rounded-corner2"
        src="~assets/3x/Recurso22@3x.png"
        fit="fill"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "IndexPage",
});
</script>
<style lang="scss">
.div-overlay4 {
  border-radius: 0 0 40px 0;
  //centrar un objeto absoluto orizontalmente
  position: absolute;
  // top: 0%;
  left: 5%;
  right: 50%;
  bottom: -5vh;
  padding: auto;
  z-index: 1;
}
.rounded-corner2 {
  border-radius: 0 0 0 80px;
  overflow: hidden;
  margin: 12% 5% 5% 10%;
}

.padding-cero {
  padding: 0%;
}
</style>
