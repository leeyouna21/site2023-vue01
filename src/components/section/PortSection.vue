<template>
  <section id="portSection" :class="attr">
    <h3>I hope you like it, too !</h3>
    <p></p>
    <div class="port__inner container">
      <div class="port__btn">
        <ul>
          <li><a href="#">📚</a></li>
          <li><a href="#">📚📚</a></li>
          <li><a href="#">📚📚📚</a></li>
        </ul>
      </div>
      <div class="port__cont">
        <div class="port" v-for="(text, index) in texts" :key="index">
          <figure class="port__header">
            <img :src="text.img" :alt="text.title" />
          </figure>
          <div class="port__body">
            <div class="pic">
              <img :src="text.icon" :alt="text.title" />
            </div>
            <div>
              <div class="title">
                <h4>{{ text.title }}</h4>
                <p>{{ text.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    attr: String,
  },
  data: function () {
    return {
      texts: [
        {
          img: "./images/port/book02.png",
          title: "민경희 작가",
          desc: "난 너의 모든것을 닮고 싶은 사람 中",
          icon: "./images/port/flower.png",
        },
        {
          img: "./images/port/book6.png",
          title: "민경희 작가",
          desc: "힘이 되는 민경희 작가님의 일러스트 글귀입니다.",
          icon: "./images/port/flower.png",
        },
        {
          img: "./images/port/book3.png",
          title: "민경희 작가",
          desc: "난 너의 모든것을 닮고 싶은 사람 中",
          icon: "./images/port/flower.png",
        },
        {
          img: "./images/port/book5.png",
          title: "Author",
          desc: "제가 제일 좋아하는 책의 저자입니다.",
          icon: "./images/port/flower.png",
        },
        {
          img: "./images/port/book01.png",
          title: "박웅현 작가",
          desc: "여덟 단어 中",
          icon: "./images/port/flower.png",
        },
        {
          img: "./images/port/book4.png",
          title: "여덟단어",
          desc: "여덟단어의 표지입니다.",
          icon: "./images/port/flower.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/setting/mixin";
.port__wrap {
}
.port__inner {
  .port__btn {
    ul {
      display: flex;
      justify-content: center;
      li {
        margin-bottom: 5px;
        display: inline-block;
        padding: 15px;
        margin: 0 20px;
        background-color: #daba91;
        border-radius: 30px;
        margin-bottom: 20px;
        a {
          padding: 10px 15px;
          font-size: 15px;
          color: #fff;
        }
        &:hover {
          background-color: #cea46d;
        }
      }
    }
  }
  .port__cont {
    @include flex-between;
    flex-wrap: wrap;
    .port {
      width: 32.2222%;
      .port__header {
        img {
          width: 100%;
          margin-top: 20px;
        }
      }
      .port__body {
        text-align: left;
        display: flex;
        align-items: center;
        margin-top: 10px;
        span {
          img {
            padding-right: 10px;
          }
        }

        h4 {
          font-size: 20px;
          margin-bottom: 10px;
          margin-top: 10px;
        }

        p {
          font-size: 16px;
          color: #7a7a7a;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
