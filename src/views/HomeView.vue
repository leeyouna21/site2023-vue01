<template>
  <main>
    <SliderSection attr="slider__wrap section " />
    <IntroSection attr="intro__wrap section bg-white" />
    <PortSection attr="port__wrap section center bg-ivory" />
    <YoutubeSection attr="youtube__wrap SBAggro3 section bg-white02" />
    <UnsplashSection attr="unsplash__wrap SBAggro3 section bg-white" />
    <MovieSection attr="movies__wrap SBAggro3 section bg-white02" />
  </main>
</template>

<script>
import SliderSection from "@/components/section/SliderSection.vue";
import IntroSection from "@/components/section/IntroSection.vue";
import PortSection from "@/components/section/PortSection.vue";
import YoutubeSection from "@/components/section/YoutubeSection.vue";
import UnsplashSection from "@/components/section/UnsplashSection.vue";
import MovieSection from "@/components/section/MovieSection.vue";

export default {
  components: {
    IntroSection,
    SliderSection,
    PortSection,
    MovieSection,
    UnsplashSection,
    YoutubeSection,
  },
};
</script>
