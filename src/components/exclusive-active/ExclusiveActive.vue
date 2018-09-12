<template>
  <div>
    <div class="kind-box" v-for="(item, index) in exclusiveActive" :key="index">
      <h6 class="kind-title">{{item.name}}</h6>
      <exclusive-item :item="subItem" v-for="(subItem, subIndex) in item.goods" :key="subIndex"></exclusive-item>
    </div>
  </div>
</template>
<script>
import ExclusiveItem from './ActiveItem'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ExclusiveActive',
  data () {
    return {
      id: null
    }
  },
  components: {
    ExclusiveItem
  },
  computed: mapState({
    exclusiveActive: state => state.active.exclusiveActive
  }),
  created () {
    this.init()
  },
  beforeRouteLeave (to, from, next) {
    let options = {}
    options = to.path === '/exclusive-active-detail' ? {keepAlive: true, 'scrollTop': document.body.scrollTop || document.documentElement.scrollTop}
    : {keepAlive: false, 'scrollTop': 0}
    Object.assign(from.meta, options)
    next()
  },
  methods: {
    ...mapActions(['GET_EXCLUSIVE_ACTIVE']),
    init () {
      this.GET_EXCLUSIVE_ACTIVE()
    }
  }
}
</script>
<style lang="less" scoped>
.box-container {
  padding: 10px 0;
}
</style>


