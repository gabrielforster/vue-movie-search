<template>
  <HeaderNav />
</template>

<script>
import HeaderNav from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #1b2631;
  color: #ddd;
}

a {
  text-decoration: none;
  color: #ddd;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
