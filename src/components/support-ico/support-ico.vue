<template>
  <div class="support-ico" :class="iconCls"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'support-ico',
    props: { // 接收传参
      size: {
        type: Number
      },
      type: {
        type: Number
      }
    },
    computed: { // 计算属性
      iconCls() { // 对应的是 标签绑定的类
        const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        return `icon-${this.size} ${classMap[this.type]}` // ES6 的 Template Strings 模版字符串
      }

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"

  .support-ico
    display: inline-block
    background-repeat: no-repeat

  .icon-1
    width: 12px
    height: 12px
    background-size: 12px 12px
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.special
      bg-image('special_1')
    &.invoice
      bg-image('invoice_1')
    &.guarantee
      bg-image('guarantee_1')

  .icon-2
    width: 16px
    height: 16px
    background-size: 16px 16px
  &.decrease
    bg-image('decrease_2')
  &.discount
    bg-image('discount_2')
  &.special
    bg-image('special_2')
  &.invoice
    bg-image('invoice_2')
  &.guarantee
    bg-image('guarantee_2')

  .icon-1
    width: 12px
    height: 12px
    background-size: 12px 12px
  &.decrease
    bg-image('decrease_3')
  &.discount
    bg-image('discount_3')
  &.special
    bg-image('special_3')
  &.invoice
    bg-image('invoice_3')
  &.guarantee
    bg-image('guarantee_3')

  .icon-2
    width: 16px
    height: 16px
    background-size: 16px 16px
  &.decrease
    bg-image('decrease_4')
  &.discount
    bg-image('discount_4')
  &.special
    bg-image('special_4')
  &.invoice
    bg-image('invoice_4')
  &.guarantee
    bg-image('guarantee_4')
</style>
