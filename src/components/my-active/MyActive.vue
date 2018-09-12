<template>
  <div>
    <tab default-color="rgb(255, 170, 15)" active-color="#111" custom-bar-width="20">
      <tab-item :selected="tabIndex === index" @on-item-click="tab" v-for="(item, index) in tabList" :key="index">{{item.name}}</tab-item>
    </tab>
  </div>
</template>
<script>
export default {
  name: 'MyActive',
  data () {
    return {
      tabIndex: 0,
      tabList: [{name: '达人卡', src: '/home/hot-active'}, {name: '参与记录', src: '/home/exclusive-active'}, {name: '兑换记录', src: '/home/hot-active'}]
    }
  }
}
</script>
<style lang="less" scoped>

</style>


