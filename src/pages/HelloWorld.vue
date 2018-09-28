<template>
  <div class="hello">
    <mt-tab-container v-model="active">
      <mt-tab-container-item>
        首页
      </mt-tab-container-item>
      <mt-tab-container-item>
        首页
      </mt-tab-container-item>
      <mt-tab-container-item>
        首页
      </mt-tab-container-item>
      <mt-tab-container-item>
        首页
      </mt-tab-container-item>
      <mt-tab-container-item>
        首页
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar class="is-fixed" v-model="selected">
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png">
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png">
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png">
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png">
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png">
        首页
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active: 0,
      selected: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit SCSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
