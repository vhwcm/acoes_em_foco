<template>
  <v-container fluid class="navbar-wrapper">
    <v-container class="navbar-logo">
      <!-- <v-img src="../../assets/a" alt="Logo" /> -->
    </v-container>
    <v-container class="navbar-login"
      ><v-btn class="navbar-button-login" variant="tonal"> Login </v-btn>
      <v-btn class="navbar-button-sign_up" variant="tonal"> Sing up </v-btn>
    </v-container>
  </v-container>
</template>
<script setup></script>
<style scoped>
.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  color: white;
  background-color: black;
  position: fixed;
  top: 0;
  right: 0px;
  width: calc(100vw - 1%);
  height: 3%;
  border-bottom: 0.5vh solid #ffde59;
}

.navbar-login {
  display: flex;
  gap: 0.5vw;
}

.navbar-button-login {
  background-color: rgb(103, 101, 94);
}
.navbar-button-sign_up {
  background-color: #ffde59;
}
</style>
