<template>
  <v-container fluid class="banner-wrapper">
    <div class="banner-content">
      <div class="banner-title">
        Your personalized platform to invest smartly and connect with other
        investors.
      </div>
    </div>
  </v-container>
</template>
<script setup></script>
<style scoped>
.banner-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  overflow: hidden;
}

.banner-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bonsai_dorada.png");
  background-size: cover;
  background-position: center;
  filter: blur(5px); /* Ajuste o valor conforme necessário */
  z-index: -2; /* Coloca a imagem atrás do conteúdo */
}

.banner-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Ajuste a opacidade conforme necessário */
  z-index: -1; /* Coloca a sobreposição atrás do conteúdo */
}

.banner-content {
  position: relative;
  z-index: 1;
  color: white; /* Ajuste a cor do texto conforme necessário */
  text-align: center;
}

.banner-title {
  font-size: 4rem;
  width: 50vw; /* Ajuste o tamanho da fonte conforme necessário */
  text-align: justify;
}

.banner-title::after {
  content: "";
  display: inline-block;
  width: 100%;
}

@media (max-width: 1200px) {
  .banner-title {
    width: 70vw;
    font-size: 3.4rem;
  }
}

@media (max-width: 600px) {
  .banner-title {
    font-size: 2.4rem;
    width: 90vw;
  }
}
</style>
