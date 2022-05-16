<template>
  <MovieFinder />
</template>

<script>
import MovieFinder from "./components/MovieFinder.vue";

export default {
  name: "App",
  components: {
    MovieFinder,
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
