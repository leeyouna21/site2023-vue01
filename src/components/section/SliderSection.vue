<template>
  <section id="sliderSection" :class="attr">
    <div class="slider__inner">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide v-for="(slider, index) in sliders" :key="index">
          <div class="slider__img">
            <div class="slider s1 container">
              <div class="text">
                <h3 v-html="slider.title"></h3>
                <p v-html="slider.desc"></p>
                <a href="#" class="more button-1">더보기</a>
              </div>
              <div class="img" aria-label="hidden">
                <img :src="slider.iconimage1" :alt="slider.title" />
                <img :src="slider.iconimage2" :alt="slider.title" />
                <img :src="slider.iconimage3" :alt="slider.title" />
              </div>
              <div class="circle" aria-label="hidden">
                <span class="circle c1"></span>
                <span class="circle c2"></span>
                <span class="circle c3"></span>
                <span class="circle c4"></span>
                <span class="circle c5"></span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
  props: {
    attr: String,
  },
  data: function () {
    return {
      sliders: [
        {
          title: "Books<br /> broaden <br />minds",
          desc: "책은 우리에게 새로운 가치와 인사이트를 주며,<br /> 인생의 여러 측면을 탐구하는 기회를 제공합니다. 🎉",
          iconimage1: "./images/intro/bell.png",
          iconimage2: "./images/intro/good.png",
          iconimage3: "./images/intro/chat.png",
        },
        {
          title: "Books<br /> broaden <br />minds",
          desc: "책은 우리에게 새로운 가치와 인사이트를 주며,<br /> 인생의 여러 측면을 탐구하는 기회를 제공합니다. 🎉",
          iconimage1: "./images/intro/bell.png",
          iconimage2: "./images/intro/good.png",
          iconimage3: "./images/intro/chat.png",
        },
        {
          title: "Books<br /> broaden <br />minds",
          desc: "책은 우리에게 새로운 가치와 인사이트를 주며,<br /> 인생의 여러 측면을 탐구하는 기회를 제공합니다. 🎉",
          iconimage1: "./images/intro/bell.png",
          iconimage2: "./images/intro/good.png",
          iconimage3: "./images/intro/chat.png",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/setting/mixin";

.swiper {
  overflow: visible;
}
.swiper-pagination {
  bottom: -80px !important;
}
.slider__wrap {
  background-color: #f4f0ea;
}
.slider__inner {
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  .slider__img {
    background-color: #f4f0ea;
    .slider {
      .text {
        h3 {
          font-size: 100px;
          font-weight: bold;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 40px;
        }
        p {
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 50px;
        }
        .more {
          font-size: 18px;
          border-radius: 30px;
        }
      }
      .img {
        position: absolute;
        right: -100px;
        top: -120px;
        width: 600px;
        height: 600px;
        background-image: url(../../assets/images/intro/circle01.png);
        background-size: cover;

        img {
          &:nth-child(1) {
            position: absolute;
            width: 300px;
            left: 20px;
          }
          &:nth-child(2) {
            position: absolute;
            width: 300px;
            right: 0;
            bottom: 140px;
          }
          &:nth-child(3) {
            position: absolute;
            width: 300px;
            bottom: 0;
          }
        }
      }
      .circle {
        span {
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        span:nth-child(1) {
          background-color: var(--button_1);
          left: 50%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(2) {
          background-color: var(--button_2);
          top: 20%;
          left: -10%;
          width: 40px;
          height: 40px;
        }
        span:nth-child(3) {
          background-color: var(--button_3);
          left: 100%;
          top: 10%;
        }
        span:nth-child(4) {
          background-color: var(--button_1);
          left: 17%;
          top: -10%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(5) {
          background-color: var(--button_2);
          left: 90%;
          top: 80%;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .slider__btn {
    > a {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 40px;
      transition: opacity 0.3s;
      background-repeat: no-repeat;

      &:hover {
        opacity: 0.5;
      }
    }
    .left {
      left: 20px;
      background-image: url(../../assets/images/intro/left@2x.png);
    }
    .right {
      right: 20px;
      background-image: url(../../assets/images/intro/right@2x.png);
    }
  }
  .slider__dot {
    position: absolute;
    left: 50%;
    bottom: -80px;
    transform: translateX(-50%);
    a {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0 5px;
      border: 2px solid #ac927c;
      background-color: #ac927c;
      box-shadow: 0 0 0 3px transparent;
      &.active {
        box-shadow: 0 0 0 3px #ac927c;
        border-width: 4px;
        background-color: #fff;
      }
    }
  }
}
</style>
