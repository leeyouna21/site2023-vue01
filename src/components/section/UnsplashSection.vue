<template>
  <section id="unsplashSection" :class="attr">
    <div class="unsplash__inner container">
      <div class="unsplash__text">
        <h3>잠시 쉬는시간 !</h3>
        <p>책을 읽느라 피로해진 눈 , 탁 트인 풍경 보고가세요 : &gt;</p>
        <a href="#" class="button-1">자세히보기</a>
      </div>
      <div class="unsplah__item">
        <div><img src="@/assets/images/unsplash/img01.png" alt="" /></div>
        <div><img src="@/assets/images/unsplash/img02.png" alt="" /></div>
        <div><img src="@/assets/images/unsplash/img03.png" alt="" /></div>
        <div><img src="@/assets/images/unsplash/img04.png" alt="" /></div>
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
//unsplash__wrap
.unsplash__wrap {
  overflow: hidden;
}
.unsplash__inner {
  height: 600px;
  .unsplash__text {
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
  .unsplah__item {
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

// unsplash__page
.unsplash__page {
}
.unsplash__slider {
  display: none;
}
.unsplash__search {
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
    border-radius: 20px;
  }
}
.unsplash__tag {
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
.unsplash__cont {
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
