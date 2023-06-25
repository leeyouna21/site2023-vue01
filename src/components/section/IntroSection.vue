<template>
  <section id="introSection" :class="attr">
    <h3 class="blind">설명</h3>
    <div class="intro__inner container">
      <div class="intro__title">
        <span>RECOMMEND</span>
        <h3 v-html="title"></h3>
        <!--br태그를 사용할 땐 이렇게 v-html을 이용해 작성하시오-->
        <p v-html="desc"></p>
      </div>
      <div class="intro__desc">
        <div v-for="(text, index) in texts" v-bind:key="text.title">
          <h4 :class="'icon-bg' + (index + 1)">{{ text.title }}</h4>
          <p>
            {{ text.desc }}
          </p>
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
      title: "I liked this book 📚💗",
      desc: "제가 제일 재밌게 읽은 네 권을 소개해 드릴게요 !",
      texts: [
        {
          title: "📚 미우나 고우나 내 인생",
          desc: "이 책은 내면의 고독함과 불완전함, 그리고 외부의 압력과 대인관계에서 찾아나가는 과정을 통해 성장하고 변화해 나갑니다.나의 내면과삶의 여러 측면을 탐구할 수 있도록 도움을 주는 책입니다.",
        },
        {
          title: "📚 구의 증명",
          desc: "구의 증명은 시대적 상황과 같은 작품의 배경 및 다른 인문들의 묘사를 최소화하고 , 오직 두 주인공의 이야기 , 그들의 관계에만 집중해 더 몰입감이 있는 책입니다.",
        },
        {
          title: "📚 여덟단어",
          desc: "이 책은 여덟 가지 키워드는 자존, 본질, 고전, 견(見), 현재, 권위,소통, 인생으로 이 키워드 들을 통해 젊은 청춘들이 인생을 살아갈 때시련 속에서도 흔들리지 않고 자기 자신을 존중할 수 있는 힘을 주는책입니다.",
        },
        {
          title: "📚 바깥은 여름",
          desc: "이 책은 상실을 겪은 사람과 타인의 불행을 대하는 사람들의 온도차이이자, 한 계절에서 다른 계절로 넘어가지 못한 사람들의이야기입니다.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.intro__wrap {
}
.intro__inner {
  display: flex;
  justify-content: space-between;
}
.intro__title {
  width: 33%;

  span {
    background-color: #ffc3c3;
    font-size: 14px;
    padding: 4px 30px 2px;
    color: #fff;
    border-radius: 40px;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 10px;
    display: inline-block;
  }

  h3 {
    font-size: 50px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
  }
}
.intro__desc {
  width: 66%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    width: 48%;
    margin-bottom: 40px;

    h4 {
      font-size: 24px;
      margin-bottom: 15px;
    }
  }
}
</style>
