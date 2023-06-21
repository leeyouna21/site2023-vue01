<template>
  <section id="memberSection" class="member__wrap section center">
    <h3>A FAMOUS WRITER !</h3>
    <p>모두가 아는 유명작가를 소개해드릴게요.</p>
    <div class="member__inner container">
      <div class="member">
        <figure class="member__header">
          <img src="@/assets/images/member/a01@2x.jpg" alt="member01" />
        </figure>
        <div class="member__body">
          <a href="#" class="btn">조앤 K. 롤링 - 해리포터 저자</a>
        </div>
      </div>
      <div class="member">
        <figure class="member__header">
          <img src="@/assets/images/member/a02@2x.jpg" alt="member01" />
        </figure>
        <div class="member__body">
          <a href="#" class="btn">J.R.R. 톨킨 - 반지의 제왕 저자</a>
        </div>
      </div>
      <div class="member">
        <figure class="member__header">
          <img src="@/assets/images/member/a03@2x.jpg" alt="member01" />
        </figure>
        <div class="member__body">
          <a href="#" class="btn">김영하 - 살인자의 기억법 저자</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/setting/mixin";
.member__wrap {
}
.member__inner {
  @include flex-between;

  .member {
    width: 32%;
    // border: 2px solid var(--color_body);

    .member__header {
      margin-top: -10px;

      img {
        width: 100%;
      }
    }
    .member__body {
      margin-top: -30px;
      padding: 15px 10px;
      background-color: #f4f0ea;
      color: #fff;
      z-index: 100;
      position: relative;

      h4 {
        font-size: 22px;
      }
      a {
        color: #000;
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }
}
</style>
