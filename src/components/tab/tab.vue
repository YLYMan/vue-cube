<template>
  <div class="tab">
    <cube-tab-bar
      :showSlider=true
      :useTransition=false
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px">
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop=false
        :auto-play=false
        :show-dots=false
        :initial-index="index"
        @change="onChange"
        @scroll="onScroll"
        :options="slideOptions"
        ref="slide">
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <component :is="tab.component" :data="tab.data" ref="component"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'tab',
    props: {
      tabs: {
        type: Array,
        default() {
          return []
        }
      },
      initialIndex: { // 默认展示第一个tab, 在 App.vue中 <tab :initialIndex=1></tab> 配置
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        index: this.initialIndex,
        slideOptions: { // slide组件 scroll 事件派发需要的参数
          listenScroll: true,
          probeType: 3, // 不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
          directionLockThreshold: 0 // 既要横向滚动,也要竖向滚动,阈值设为 0

        }
      }
    },
    computed: {
      selectedLabel: {
        get() {
          return this.tabs[this.index].label
        },
        set(newVal) {
          this.index = this.tabs.findIndex((value) => { // 找到tab对应的索引给cube-slide, 下面盒子切换
            return value.label === newVal
          })
          console.log(this.index) // 0 1 2
        }
      }
    },
    mounted() {
      this.onChange(this.index) // 首次加载数据 手动调用
    },
    methods: {
      // slide切换时触发change事件，修改 this.index值,selectedLabel get()重新计算，tabBar切换联动
      onChange(current) {
        this.index = current
        const component = this.$refs.component[current]
        component.fetch && component.fetch() // 滑动的时候获取数据
      },
      onScroll(pos) {
        // console.log(pos.x); // 负值 -122...
        const tabBarWidth = this.$refs.tabBar.$el.clientWidth
        const slideWidth = this.$refs.slide.slide.scrollerWidth // slide内部有个slide对象,它是BScroll的实例
        const transform = -pos.x / slideWidth * tabBarWidth
        this.$refs.tabBar.setSliderTransform(transform)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .tab
    display: flex
    flex-direction: column // 上下分配
    height: 100%
    >>> .cube-tab // >>> 修改样式
      padding: 10px 0
    .slide-wrapper
      flex: 1
      overflow: hidden

</style>
