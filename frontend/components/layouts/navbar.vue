<template>
  <v-container fluid class="navbar-wrapper">
    <v-container class="navbar-logo">
      <v-icon color="#ffde59">mdi-bonsai</v-icon>
      <span class="navbar-title">Stocks in Focus</span>
      <v-icon color="#ffde59">mdi-magnify</v-icon>
    </v-container>
    <v-container class="navbar-login">
      <v-btn class="navbar-button-login" variant="tonal"> Login </v-btn>
      <v-btn class="navbar-button-sign_up" variant="tonal"> Sing up </v-btn>
    </v-container>
  </v-container>
</template>
<script setup></script>
<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@font-face {
  font-family: "leagueSpartan";
  src: url("@/assets/fonts/League_Spartan/LeagueSpartan-VariableFont_wght.ttf")
    format("truetype");
}

.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  color: white;
  background-color: $color-gray;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 7vh;
  border-bottom: 0.5vh solid #ffde59;
}

#navbar-logo {
  height: 50px;
  width: 50px;
}

.navbar-title {
  font-family: "leagueSpartan", sans-serif;
  font-size: 4vh;
}

.navbar-login {
  display: flex;
  gap: 0.5vw;
  justify-content: end;
  align-items: center;
}

.navbar-button-login {
  background-color: rgb(83, 80, 73) !important;
  color: rgb(255, 255, 255);
  height: 4vh !important;
  width: auto !important;
}
.navbar-button-sign_up {
  background-color: $color-yellow !important;
  color: rgb(48, 46, 46) !important;
  height: 4vh !important;
  width: auto !important;
}
</style>
