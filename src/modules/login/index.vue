<template>
  <div
    class="login-bg"
    :style="{height: pageH +'px'}"
  >
    <div class="login">
      <div class="login-top">
        登录
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img"><img :src="loginName" /></div>
        <div class="login-center-input">
          <input
            type="text"
            name=""
            value=""
            placeholder="请输入您的用户名"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入您的用户名'"
          />
          <div class="login-center-input-text">用户名</div>
        </div>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img"><img :src="loginPwd" /></div>
        <div class="login-center-input">
          <input
            type="password"
            name=""
            value=""
            placeholder="请输入您的密码"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入您的密码'"
          />
          <div class="login-center-input-text">密码</div>
        </div>
      </div>
      <div
        class="button login-button"
        @click="funLogin"
      >
        登陆
      </div>
      <div class="button registr-button">
        注册
      </div>
      <div class="button password-button">
        忘记密码
      </div>
    </div>
  </div>
</template>

<script>
import loginName from "@/assets/images/name.png";
import loginPwd from "@/assets/images/password.png";
export default {
  name: "Login",
  data() {
    return {
      loginName,
      loginPwd
    };
  },
  computed: {
    pageH: function() {
      return window.innerHeight;
    }
  },
  methods: {
    funLogin: function() {
      this.$router.push({
          name: 'home'
        })
    }
  }
};
</script>

<style scoped>
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.login-bg {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(../../assets/images/bg.jpg);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
}

.login {
  z-index: 2;
  position: absolute;
  width: 350px;
  border-radius: 5px;
  height: 500px;
  background: white;
  box-shadow: 0px 0px 5px #333333;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -175px;
  transition: all 1s;
  -moz-transition: all 1s; /* Firefox 4 */
  -webkit-transition: all 1s; /* Safari 和 Chrome */
  -o-transition: all 1s; /* Opera */
}
.login-top {
  font-size: 24px;
  margin-top: 64px;
  padding-left: 40px;
  box-sizing: border-box;
  color: #333333;
  margin-bottom: 50px;
}
.login-center {
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  margin-bottom: 30px;
}
.login-center-img {
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 5px;
}
.login-center-img > img {
  width: 100%;
}
.login-center-input {
  float: left;
  width: 230px;
  margin-left: 15px;
  height: 30px;
  position: relative;
}
.login-center-input input {
  z-index: 2;
  transition: all 0.5s;
  padding-left: 10px;
  color: #333333;
  width: 100%;
  height: 30px;
  border: 0;
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  border-right: 1px solid #ffffff;
  box-sizing: border-box;
  outline: none;
  position: relative;
}
.login-center-input input:focus {
  border: 1px solid dodgerblue;
}
.login-center-input-text {
  background: white;
  padding: 0 5px;
  position: absolute;
  z-index: 0;
  opacity: 0;
  height: 20px;
  top: 50%;
  margin-top: -10px;
  font-size: 14px;
  left: 5px;
  color: dodgerblue;
  line-height: 20px;
  transition: all 0.5s;
  -moz-transition: all 0.5s; /* Firefox 4 */
  -webkit-transition: all 0.5s; /* Safari 和 Chrome */
  -o-transition: all 0.5s; /* Opera */
}
.login-center-input input:focus ~ .login-center-input-text {
  top: 0;
  z-index: 3;
  opacity: 1;
  margin-top: -15px;
}
.login.active {
  -webkit-animation: login-small 0.8s;
  animation: login-small 0.8s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}
.button {
  cursor: pointer;
  width: 250px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 12px;
  color: white;
  border: 1px solid #ffffff;
}

.login-button {
  margin-top: 48px;
  background-color: #64a9f1;
}

.login-button:hover {
  background-color: #2b91e4;
}

.registr-button,
.password-button {
  background-color: #dddddd;
}

.registr-button:hover,
.password-button:hover {
  background-color: #bbbbbb;
}
</style>
