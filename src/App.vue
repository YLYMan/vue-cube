<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
  import VHeader from 'components/v-header/v-header'
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
          console.log(this.seller)

        })
      }
    },
    components: {
      VHeader
    }

  }
</script>
<style lang="stylus">

</style>
