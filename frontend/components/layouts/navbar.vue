<template>
  <v-container fluid class="navbar-wrapper">
    <v-container class="navbar-logo">
      <span class="navbar-title">Stocks in Focus</span>
      <img
        src="@/assets/icons/bonsai.png"
        alt="Bonsai Icon"
        class="custom-icon"
      />
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

.navbar-logo {
  align-items: flex-end; /* Changed from center to flex-end */
}

.navbar-logo img.custom-icon {
  height: 40px;
  width: 40px;
}

.navbar-title {
  font-family: "leagueSpartan", sans-serif;
  font-size: 4vh;
  border-top: 2px solid #ffde59;
  padding-top: 10px;
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
@media (max-width: 600px) {
  .navbar-wrapper {
    height: 12vh;
  }
  .navbar-button-login {
    height: 6vh !important;
    width: 10vh !important;
  }
  .navbar-button-sign_up {
    height: 6vh !important;
    width: 10vh !important;
  }
}
</style>
