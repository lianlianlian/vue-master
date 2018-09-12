<template>
  <div class="box">
    <div class="img-box">
      <img src="https://static.vilson.xyz/moju/static/img/shortcutLogin.8fdd8a4.jpg">
    </div>
    <x-input :type="form.username.type" v-model.trim="form.username.value" :placeholder="form.username.placeholder"></x-input>
    <x-input :type="form.password.type" v-model.trim="form.password.value" :placeholder="form.password.placeholder"></x-input>
    <x-button text="登录" type="primary" @click.native="login"></x-button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      form: {
        username: {
          value: '',
          type: 'text',
          placeholder: '请输入用户名'
        },
        password: {
          value: '',
          type: 'password',
          placeholder: '请输入密码'
        }
      }
    }
  },
  methods: {
    ...mapActions(['LOGIN']),
    login () {
      const {username, password} = this.form
      const {redirect} = this.$route.query

      this.LOGIN({username: username.value, password: password.value, devicetype: 1, lastloginversion: 1}).then(() => {
        this.$router.push({
          path: redirect || '/home'
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.img-box {
    img {
        width: 100%;
        height: auto;
    }
}
</style>


