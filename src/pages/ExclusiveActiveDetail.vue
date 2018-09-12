<template>
  <div class="detail-box">
    <div class="img-box">
      <img :src="exclusiveActiveDetail.img">
    </div>
    <p class="name">{{exclusiveActiveDetail.name}}</p>
    <div class="small-info">原价<span>¥{{exclusiveActiveDetail.market_price}}</span>会员价<span>¥{{exclusiveActiveDetail.price}}</span>券后<span>¥{{exclusiveActiveDetail.activity_price}}</span></div>
    <div class="submit-box">
      <x-button @click.native="submit" class="submit">立即兑换</x-button>
    </div>
    <div class="content-box">
      <div v-html="exclusiveActiveDetail.content"></div>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'exclusiveActiveDetail',
  data () {
    return {
      id: null
    }
  },
  created () {
    const id = this.$route.query.id
    this.id = id
    this.init(id)
  },
  computed: mapState({
    exclusiveActiveDetail: state => state.active.exclusiveActiveDetail
  }),
  methods: {
    ...mapActions(['GET_EXCLUSIVE_ACTIVE_DETAIL']),
    init (id) {
      this.GET_EXCLUSIVE_ACTIVE_DETAIL({id})
    }
  }
}
</script>
<style lang="less" scoped>
.img-box {
  width: 100%;
  height: 190px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>


