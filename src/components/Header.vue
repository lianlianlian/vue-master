<template>
  <x-header :title="$route.meta.title || ''"></x-header>
</template>
<script>
import {XHeader} from 'vux'

export default {
  name: 'header',
  components: {
    XHeader
  }
}
</script>
<style lang="less" scoped>

</style>

