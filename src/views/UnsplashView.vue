<template>
  <ContTitle title="unsplashs" />
  <UnsplashSlider />
  <UnsplashSearch />
  <UnsplashTag />
  <UnsplashCont :unsplashs="unsplashs" />
</template>

<script>
import ContTitle from "@/components/layout/ContTitle.vue";
import UnsplashSlider from "@/components/unsplash/UnsplashSlider.vue";
import UnsplashSearch from "@/components/unsplash/UnsplashSearch.vue";
import UnsplashTag from "@/components/unsplash/UnsplashTag.vue";
import UnsplashCont from "@/components/unsplash/UnsplashCont.vue";
import { ref } from "vue";

export default {
  components: {
    ContTitle,
    UnsplashSlider,
    UnsplashSearch,
    UnsplashTag,
    UnsplashCont,
  },

  setup() {
    const unsplashs = ref([]);

    const TopUnsplashs = async () => {
      await fetch(
        "https://api.unsplash.com/photos?client_id=Lmybp4NiGaqViDlNbZHR7eLV3Fl2FGnbvwSJ6NGpJFo&per_page=30"
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          unsplashs.value = result;
        })
        .catch((error) => console.log("error", error));
    };
    TopUnsplashs();

    return {
      unsplashs,
      TopUnsplashs,
    };
  },
};
</script>
