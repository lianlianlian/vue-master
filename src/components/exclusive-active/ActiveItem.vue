<template>
  <div class="active-item">
    <div class="title-box">
      <p class="title">券后</p>
      <p class="price">{{item.activity_price}}元</p>
    </div>
    <div class="infor-box">
      <p class="name">{{item.name}}</p>
      <span class="note">{{item.title}} 价值￥{{item.price}}</span>
    </div>
    <div class="btn-box">
      <router-link :to="{path:'/exclusive-active-detail',query:{id: item.id}}">立即兑换</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'active-item',
  props: ['item']
}
</script>
<style lang="less" scoped>
.active-item {
  margin: 10px 0;
  height: 90px;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 2px solid #f4f4f4;
  border-bottom: 2px solid #f4f4f4;
  border-left: 5px solid rgb(255, 170, 15);
  border-radius: 5px 0 0 5px;
  font-size: 13px;
  text-align: center;
}
.title-box {
  position: relative;
  width: 80px;
  .title{
    font-size: 25px;
  }
  &:after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 2px;
    background: #f4f4f4;
  }
}
.infor-box {
  flex: 1;
  overflow: hidden;
}
.btn-box {
  width: 45px;
  height: 100%;
  background: rgb(255, 170, 15);
  a {
    display: inline-block;
    width: 100%;
    padding: 0 15px;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    box-sizing: border-box;
  }
}
.note ,.price {
  color: rgb(255, 170, 15);
}
.name {
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>


