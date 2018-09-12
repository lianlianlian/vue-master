<template>
  <div class="container">
    <Header v-if="$route.meta.showTitle"></Header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
* {
  box-sizing: border-box;
}
body {
  background-color: #fbf9fe;
  color: #64200e;
}
html,body,.box{
  min-height: 100%;
}
html,body,.container{
  height: 100%;
}
.container /deep/ .submit-box {
  .submit {
    background: #ff9408;
    border-radius: 10px;
    color: #fff;
  }
}
.container /deep/ .detail-box {
  .small-info,.name,.member-box,.submit-box {
    padding: 0 15px;
  }
  .name {
    margin: 10px 0 3px 0;
    color: #333;
    font-size: 17px;
  }
  .small-info {
    font-size: 13px;
  }
  .content-box{
    padding: 0 15px;
  }
}
</style>
