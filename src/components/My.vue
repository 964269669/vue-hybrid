<template>
  <div class="my">
    <navigation-bar :pageName="'个人中心'" :isShowBack="false"></navigation-bar>
    My
  </div>
</template>

<script>
import NavigationBar from '@c/currency/NavigationBar.vue'

export default {
  name: 'My',
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
  .my{
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
</style>
