<template>
  <ContTitle title="Youtubes" />
  <YoutubeSlider />
  <YoutubeSearch />
  <YoutubeTag />
  <YoutubeCont title="Youtubes" />
</template>

<script>
import ContTitle from "@/components/layout/ContTitle";
import YoutubeSlider from "@/components/youtube/YoutubeSlider.vue";
import YoutubeSearch from "@/components/youtube/YoutubeSearch.vue";
import YoutubeCont from "@/components/youtube/YoutubeCont.vue";
import YoutubeTag from "@/components/youtube/YoutubeTag.vue";
import { ref } from "vue";

export default {
  components: {
    ContTitle,
    YoutubeSlider,
    YoutubeSearch,
    YoutubeCont,
    YoutubeTag,
  },

  setup() {
    const youtubes = ref([]);
    const TopYoutubes = async () => {
      await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=%EB%89%B4%EC%A7%84%EC%8A%A4&type=video&key=AIzaSyB6LEqldGdm11AvV2H1fw3J1gEcfeNZJIk"
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          youtubes.value = result.items;
        })
        .catch((error) => console.log("error", error));
    };
    TopYoutubes();
    return {
      youtubes,
      TopYoutubes,
    };
  },
};
</script>

<style lang="scss">
.youtube__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;

    li {
      width: 23.3333%;
      margin-bottom: 4%;

      span {
        display: block;
        margin: 4px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
