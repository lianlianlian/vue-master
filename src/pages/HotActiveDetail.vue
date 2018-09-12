<template>
  <div class="detail-box">
    <div class="img-box">
      <img :src="hotActiveDetail.img">
    </div>
    <p class="name">{{hotActiveDetail.name}}</p>
    <div class="small-info">原价<span>￥{{hotActiveDetail.goods?hotActiveDetail.goods.market_price : ''}}</span>券后<span>￥{{hotActiveDetail.goods ? hotActiveDetail.goods.activity_price : ''}}</span></div>
    <div class="member-box">
      <div class="member-title">集结会员:  <span>{{hotActiveDetail.goods ? hotActiveDetail.people_num : 0}}</span> 已集结会员:  <span>{{hotActiveDetail.invo_num}}</span></div>
      <div class="list">
        <img :src="item.avatar" v-for="(item, index) in hotActiveDetail.records" :key="index" v-if="index < 11">
        <router-link to="/hot-active-detail" v-if="hotActiveDetail.records ? hotActiveDetail.records.length > 0 : ''" class="more">查看<br/>更多</router-link>
      </div>
    </div>
    <div class="submit-box">
      <x-button @click.native="submit" class="submit">{{buttonTxt[hotActiveDetail.state]}}</x-button>
    </div>
    <div class="time-box" v-if="hotActiveDetail.state == 1">
      <p>会员福利券</p>
      <div class="time">
        <span>倒计时:  </span>
        <i>{{timeList[0]}}</i>
        <span>天</span>
        <i>{{timeList[1]}}</i>
        <span>时</span>
        <i>{{timeList[2]}}</i>
        <span>分</span>
        <i>{{timeList[3]}}</i>
        <span>秒</span>
      </div>
    </div>
    <div class="content-box">
      <tab default-color="rgb(255, 170, 15)" active-color="#111" custom-bar-width="20">
        <tab-item :selected="tabIndex === index" @on-item-click="tab" v-for="(item, index) in tabList" :key="index">{{item}}</tab-item>
      </tab>
      <div v-html="hotActiveDetail.content" v-show="tabIndex === 0"></div>
      <div v-html="hotActiveDetail.remark" v-show="tabIndex === 1"></div>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'hotActiveDetail',
  data () {
    return {
      id: null,
      tabIndex: 0,
      tabList: ['活动详情', '活动规则'],
      timeList: ['00', '00', '00', '00'],
      buttonTxt: ['', '立即参团', '活动已结束']
    }
  },
  created () {
    this.init(this.$route.query.id)
  },
  computed: mapState({
    hotActiveDetail: state => state.active.hotActiveDetail
  }),
  methods: {
    ...mapActions(['GET_HOT_ACTIVE_DETAIL']),
    init (id) {
      this.GET_HOT_ACTIVE_DETAIL({token: localStorage.getItem('token'), id}).then(() => {
        this.activeTime()
      })
    },
    activeTime () {
      let timer
      const now = Date.now()
      const end = new Date(this.hotActiveDetail.end_time).getTime()
      if (end - now <= 0) return false

      const time = (end - now) / 1000
      let days = parseInt(time / (3600 * 24))
      let hours = parseInt(time / 3600 % 24)
      let mi = parseInt(time / 60 % 60)
      let s = parseInt(time % 60)
      this.timeList = [this.dateToString(days), this.dateToString(hours), this.dateToString(mi), this.dateToString(s)]
      const start = () => {
        timer = setTimeout(() => {
          s--
          if (s <= 0) {
            s = 60
            mi--
          }
          if (mi < 0) {
            mi = 60
            hours--
          }
          if (hours < 0) {
            hours = 24
            days--
          }
          if (days < 0) {
            clearTimeout(timer)
          }
          this.timeList = [this.dateToString(days), this.dateToString(hours), this.dateToString(mi), this.dateToString(s)]
          start()
        }, 1000)
      }
      start()
      this.$once('hook:beforeDestroy', () => {
        clearTimeout(timer)
      })
    },
    dateToString (date) {
      date = date >= 10 ? date : '0' + date
      return date
    },
    tab (index) {
      this.tabIndex = index
    },
    submit () {
      if (this.hotActiveDetail.state === 2) return false
    }
  }
}
</script>
<style lang="less" scoped>
.img-box {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: auto;
    min-height: 100%;
  }
}
.member-box {
  margin: 20px 0;
  text-align: center;
  .member-title{
    font-size: 13px;
    margin: 10px 0;
  }
  .list {
    margin: 0 -7px;
    display: flex;
    flex-wrap: wrap;
    img ,.more{
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin: 5px 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      background: #eeeeef;
      color: #d9ab82;
      font-size: 12px;
      text-align: center;
    }
  }
}
.time-box {
  margin: 25px 0 25px 0;
  text-align: center;
  p {
    margin: 10px 0;
  }
  .time {
    color: #d9ab82;
    font-size: 14px;
    i{
      display: inline-block;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 3px;
      background: #d9ab82;
      color: #fff;
      font-style: normal;
    }
  }
}
</style>


