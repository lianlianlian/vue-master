<template>
  <div class="active-item" @click="goDetail">
    <img :src="item.img" class="img">
    <div class="top-infor infor">
      <span class="flag">{{item.category_name}}</span>
      <span class="status">{{item.state_text}}</span>
    </div>
    <p class="name">{{item.name}}</p>
    <div class="bottom-infor infor">
      <span class="addr">位置: {{item.location}}</span>
      <span class="number">{{item.invo_num}}人参加</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'active-item',
  props: ['item'],
  methods: {
    goDetail () {
      this.$router.push({
        path: '/hot-active-detail',
        query: {
          id: this.item.id
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.flag {
  background: rgb(255, 170, 15);
  padding: 0 15px;
  border-radius: 0 5px 5px 0;
  font-size: 12px;
}
.active-item {
  position: relative;
  margin: 10px 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 14px;
  border-radius: 0 10px 10px 10px;
  overflow: hidden;
  z-index: 0;
}
.name {
  margin: 15px 0;
  font-size: 25px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.infor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 10px 0;
  &.top-infor{
    padding-right: 10px;
  }
  &.bottom-infor {
    padding: 0 10px;
  }
}
.img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  z-index: -1;
}
</style>


