<template>
    <mt-tabbar class="is-fixed" v-model="selected">
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png"/>
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png"/>
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png"/>
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="/src/assets/images/tabbar_home_normal@3x.png"/>
        首页
      </mt-tab-item>
      <mt-tab-item>
        <img slot="icon" src="../../assets/images/tabbar_home_normal@3x.png"/>
        首页
      </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      selected: 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
