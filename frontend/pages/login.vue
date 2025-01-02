<template>
  <div class="login-container">
    <div class="background-image"></div>
    <div class="login-box">
      <p>
        Your investment journey starts now. Log in and discover new
        opportunities.
      </p>
      <img
        src="@/assets/icons/bonsai.png"
        alt="Gold Bonsai Icon"
        class="bonsai-icon"
      />
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p class="signup-link">
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "none",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle login logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";
@font-face {
  font-family: "leagueSpartan";
  src: url("@/assets/fonts/League_Spartan/LeagueSpartan-VariableFont_wght.ttf")
    format("truetype");
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/images/bonsai_dourada.png") center/cover no-repeat;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(5px);
  z-index: -1;
}

.login-box {
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 500px;
  text-align: center;
}

p {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.bonsai-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: $color-yellow;
  color: $color-gray-font;
  font-size: 1.5rem;
  cursor: pointer;
}

button:hover {
  background-color: darken($color-yellow, 10%);
}

.signup-link {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: $color-gray-font;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
