<template>
  <div class="main">
    <component :is="currentComponent"></component>
    <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
  </div>
</template>

<script>
import toolBar from '@c/currency/ToolBar.vue'
export default {
  name: '',
  components: {
    'tool-bar': toolBar,
    // 异步方式引入组件
    'home': () => import('@c/Home'),
    'my': () => import('@c/My'),
    'shopping': () => import('@c/Shopping')
  },
  data() {
    return {
      currentComponent: 'home'
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onChangeFragment(comName) {
      this.currentComponent = comName
      console.log(comName)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
