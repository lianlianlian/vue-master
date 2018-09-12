<template>
  <div class="box">
    <div class="img-box">
      <img src="https://static.vilson.xyz/moju/static/img/title.24de5be.png">
    </div>
    <div class="box-container">
      <tab default-color="rgb(255, 170, 15)" active-color="#111" custom-bar-width="20">
        <tab-item :selected="tabIndex === index" @on-item-click="tab" v-for="(item, index) in tabList" :key="index">{{item.name}}</tab-item>
      </tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      tabList: [{name: '热门活动', src: '/home/hot-active'}, {name: '专属福利', src: '/home/exclusive-active'}, {name: '我的心愿', src: '/home/my-active'}],
      tabIndex: 0
    }
  },
  created () {
    this.tabIndex = this.tabList.findIndex((item, index) => item.src === this.$route.path)
  },
  computed: mapState({
    loading: state => state.other.loading
  }),
  methods: {
    ...mapActions(['LOGIN', 'LOADING']),
    tab (index) {
      this.$router.push({
        path: this.tabList[index].src
      })
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  padding: 0 20px 20px;
  background: url(https://static.vilson.xyz/moju/static/img/background.7ddfe85.png) no-repeat;
  background-size: 100%;
}
.img-box {
  padding: 40px 0;
  img{
    width: 160px;
    height: auto;
  }
}
.box-container {
  padding: 10px 20px;
  border-radius: 10px;
  background: #fff;
  min-height: 450px;
}
</style>

