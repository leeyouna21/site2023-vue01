<template>
  <section id="youtubeSection" :class="attr">
    <div class="youtube__text container">
      <h3>책 읽을 때 듣기 좋은 노래</h3>
      <p>책을 읽을 때 곁들이면 좋은 노래를 추천해드릴게요 !</p>
      <a href="#" class="button-3">자세히보기</a>
    </div>
    <div class="youtube__item">
      <div>
        <img src="@/assets/images/youtube/yu01.png" alt="" />
      </div>
      <div>
        <img src="@/assets/images/youtube/yu02.png" alt="" />
      </div>
      <div>
        <img src="@/assets/images/youtube/yu03.png" alt="" />
      </div>
      <div>
        <img src="@/assets/images/youtube/yu04.png" alt="" />
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
//youtube__section
.youtube__wrap {
  overflow: hidden;
}
.youtube__inner {
  height: 800px;
  .youtube__text {
    h3 {
      font-size: 50px;
      margin-bottom: 40px;
    }
    p {
      font-size: 22px;
      font-weight: 300;
      margin-bottom: 30px;
    }
    a {
      border-radius: 50px;
    }
  }
  .youtube__item {
    @include flex-between;
    margin-top: 70px;
    position: absolute;
    > div {
      width: 400px;
      margin-right: 20px;
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}

// youtube__page
.youtube__page {
}
.youtube__slider {
  display: none;
}
.youtube__search {
  text-align: center;
  margin-bottom: 50px;

  input {
    border: 1px solid #dfd3c3;
    font-size: 16px;
    padding: 10px 20px;
    min-width: 300px;
    margin-right: 10px;
  }
  button {
    @include button(#ad8869, #fff);
  }
}
.youtube__tag {
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
.youtube__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;

    li {
      width: 31.3333%;
      margin-bottom: 4%;

      span {
        display: block;
        margin: 4px 0;
      }
    }
  }
}
</style>
