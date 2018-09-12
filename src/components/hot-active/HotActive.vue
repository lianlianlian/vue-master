<template>
  <vue-lazy-component :timeout="1000" :viewport="root">
    <active-item :item="item" v-for="(item, index) in hotActive" :key="index"></active-item>
    <div slot="skeleton" class="skeleton">
      <div class="top-infor">
        <span class="flag"></span>
        <span class="status"></span>
      </div>
      <p class="name"></p>
    </div>
  </vue-lazy-component>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import ActiveItem from './ActiveItem'

export default {
  name: 'hotActive',
  data () {
    return {
      root: null
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.root = this.$parent.$el
  },
  computed: mapState({
    hotActive: state => state.active.hotActive
  }),
  components: {
    ActiveItem
  },
  beforeRouteLeave (to, from, next) {
    let options = {}
    options = to.path === '/hot-active-detail' ? {keepAlive: true, 'scrollTop': document.body.scrollTop || document.documentElement.scrollTop}
    : {keepAlive: false, 'scrollTop': 0}
    Object.assign(from.meta, options)
    next()
  },
  methods: {
    ...mapActions(['GET_HOT_ACTIVE']),
    init () {
      this.GET_HOT_ACTIVE({token: localStorage.getItem('token')})
    }
  }
}
</script>
<style lang="less" scoped>
.skeleton{
  background: #ddd;
  width: 100%;
  height: 129px;
  margin: 10px 0;
  .top-infor {
    display: flex;
    justify-content: space-between;
    height: 20px;
    margin: 5px 0 10px 0;
    .flag{
      display: inline-block;
      width: 55px;
      background: #ccc;
    }
    .status {
      display: inline-block;
      width: 45px;
      background: #ccc;
    }
  }
  .name {
    width: 70%;
    height: 30px;
    margin: 30px auto;
    background: #ccc;
  }
}
</style>


