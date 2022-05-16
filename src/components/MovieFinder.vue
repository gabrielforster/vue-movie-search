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

  <main>
    <input
      class="search"
      type="text"
      placeholder="Digite o nome de filme"
      v-model="searching"
      v-on:keyup.enter="searchMovies(searching)"
    />

    <div v-if="search !== ''" class="movies">
      <div v-for="(movie, index) in movieList" :key="index" class="movie-card">
        <div class="movie-poster">
          <img
            v-if="movie.poster_path"
            :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
          />
          <div v-else class="empty-poster"></div>
        </div>
        <div class="movie-infos">
          <h2>{{ movie.title }}</h2>
          <h4>{{ movie.release_date.substring(0, 4) }}</h4>
          <h4>{{ movie.vote_average }}</h4>
          <h5 v-if="movie.adult === true">+18</h5>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MovieFinder",
  props: {
    title: { type: String, default: "Movie Search" },
  },
  data() {
    return {
      searching: "",
      movieList: {},
    };
  },
  methods: {
    searchMovies(search) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=80b5bde829cf84ab43064490f20c934e&language=pt-br&page=1&include_adult=true&query=${search}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            this.movieList = data.results;
            console.log(this.movieList);
          } else {
            this.movieList = {};
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  background-color: #333;

  display: flex;
  justify-content: space-around;
  padding-block: 1.5rem;
}

main {
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 600px;
    padding: 7px 10px;
    border: 1px solid black;
    outline: none;
    border-radius: 10px;
  }

  .movies {
    margin-top: 1.5rem;

    .movie-card {
      display: flex;
      background-color: #ccc;
      color: #222;
      border-radius: 10px;
      margin-block: 25px;
      width: 800px;

      .movie-poster {
        img,
        .empty-poster {
          height: 200px;
          width: 135px;
          border-radius: 15px;
          margin-left: 5px;
          margin-block: 10px 5px;
          background-color: #777;
        }
      }
      .movie-infos {
        margin-top: 10px;
        margin-left: 10px;

        flex-wrap: wrap;

        h4,
        h5 {
          margin-top: 3px;
        }
      }
    }
  }
}
</style>
