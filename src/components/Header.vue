<template>
  <nav class="nav-bar">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div nav-links>
      <a
        href="https://github.com/gabrielforster/vue-movie-search"
        target="_blank"
        >Github repo</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  props: {
    title: { type: String, default: "Movie Search" },
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-around;
  margin-block: 1rem;
}
</style>
