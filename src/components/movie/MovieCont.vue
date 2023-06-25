<template>
  <div class="movie__cont container">
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        <a
          :href="`https://www.themoviedb.org/movie/${movie.id}`"
          target="_blank"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            :alt="movie.title"
          />
          <em>
            <span class="title">{{ movie.title }}</span>
            <span class="star">{{ movie.vote_average }}</span>
          </em>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss">
.movie__cont {
  h2 {
    color: #000;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #000;
    li {
      width: 24%;
      position: relative;
      margin-bottom: 2%;
      color: #000;

      .title {
        display: inline-block;
        font-size: 20px;
        padding: 3px;
        color: #000;

        &:hover {
          text-decoration: underline;
          text-underline-position: under;
        }
      }
      .star {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 30px;
        height: 30px;
        background-color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        color: #000;
        font-size: 12px;
      }
    }
  }
}
</style>
