<template>
  <div class="shopping">
    <navigation-bar :pageName="'购物车'" :isShowBack="false"></navigation-bar>
    shoping
  </div>
</template>

<script>
import NavigationBar from '@c/currency/NavigationBar.vue'

export default {
  name: 'Shoping',
  components: {
    NavigationBar
  },
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.shopping{
  width: 100%;
  height: 100%;
  font-size: 20px;
}
</style>
