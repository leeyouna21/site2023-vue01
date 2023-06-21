<template>
  <section id="moviesSection" :class="attr">
    <div class="movie__inner container">
      <div class="movie__text">
        <h3>책을 기반으로 만든 영화</h3>
        <p>YUNA선정 ! 책을 기반으로 만든 재밌는 영화 추천 list입니다.</p>
        <a href="#" class="button-2">자세히보기</a>
      </div>

      <div class="movie__item">
        <div><img src="@/assets/images/movie/movie01.png" alt="" /></div>
        <div><img src="@/assets/images/movie/movie02.png" alt="" /></div>
        <div><img src="@/assets/images/movie/movie03.png" alt="" /></div>
        <div><img src="@/assets/images/movie/movie04.png" alt="" /></div>
        <div><img src="@/assets/images/movie/movie05.png" alt="" /></div>
        <div><img src="@/assets/images/movie/movie06.png" alt="" /></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    attr: String,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/setting/mixin";
.movies__wrap {
  overflow: hidden;
}
.movie__inner {
  height: 750px;
  h3 {
    font-size: 50px;
    margin-bottom: 40px;
  }
  p {
    font-size: 24px;
    color: #7e7e7e;
    margin-bottom: 60px;
  }
  a {
    border-radius: 50px;
  }
}
.movie__item {
  @include flex-between;
  margin-top: 70px;
  position: absolute;

  > div {
    width: 268px;

    img {
      width: 100%;
      padding: 0 20px 0 0;
      border-radius: 20px;
    }
  }
}

// movie__page
.movie__page {
}
.movie__slider {
  display: none;
}
.movie__search {
  text-align: center;
  margin-bottom: 50px;

  input {
    border: 1px solid #dfd3c3;
    font-size: 16px;
    padding: 10px 20px;
    min-width: 300px;
    margin-right: 10px;
    border-radius: 20px;
  }
  button {
    @include button(#ad8869, #fff);
  }
}
.movie__tag {
  ul {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;

    li {
      a {
        border: 1px solid #dfd3c3;
        padding: 10px 20px;
        margin: 0 10px;
        color: #815823;
        border-radius: 15px;
      }
    }
  }
}
.movie__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;

    li {
      width: 18.3333%;
      margin-bottom: 4%;

      span {
        display: block;
        margin: 4px 0;
      }
    }
  }
}
</style>
