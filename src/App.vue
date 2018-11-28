<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab></tab>
    </div>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
  import Tab from 'components/tab/tab'
  import { getSeller } from 'api' // 配置别名

  export default {
    name: 'app',
    data() { // 函数返回一个对象
      return {
        seller: {}
      }
    },
    created() { // 生命周期
      this._getSeller()
    },
    methods: {
      _getSeller() {
        getSeller().then((seller) => { // 返回一个promise，.then 一定会获取数据(封装后的)
          this.seller = seller
        })
      }
    },
    components: {
      VHeader,
      Tab
    }

  }
</script>
<style lang="stylus">
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
