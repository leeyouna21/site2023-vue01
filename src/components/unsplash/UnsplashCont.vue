<template>
  <div class="unsplash__cont container">
    <ul>
      <li v-for="(unsplash, index) in unsplashs" :key="index">
        <a :href="`https://unsplash.com/photos/${unsplash.id}`" target="_blank">
          <img :src="unsplash.urls.regular" :alt="unsplash.alt_description" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    unsplashs: {
      unsplashs: {
        type: Array,
        require: true,
      },
    },
  },
};
</script>

<style lang="scss">
.unsplash__cont {
  color: #000;

  ul {
    column-count: 4;
    column-gap: 20px;
    color: #000;

    li {
      margin-bottom: 20px;
      color: #000;
    }
  }
}
</style>
