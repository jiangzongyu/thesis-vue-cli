<template>
  <div id="index">
    <img src="../assets/1.jpeg" class="bgpurture">   
    <div class="container">
      <div>
        <el-input type="text" placeholder="请输入账号" v-model="account">
          <template slot="prepend">账号</template>
        </el-input>
      </div>
      <div>
        <el-input type="passord" placeholder="请输入密码" v-model="password">
          <template slot="prepend">密码</template>
        </el-input>
      </div>
      <div>
        <el-button id="login" v-on:click="login"  type="success">登录</el-button> 
        <el-button id="loginout" type="danger" v-on:click="register">注册</el-button> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // this.axios.get('http://localhost:3000/login').then((response) => {
      //   console.log(response)
      //   console.log(response.data)
      // })
      var account = this.account
      var password = this.password
      // console.log(account + ' ' + password)
      if (account == '' || password == '') {
          this.$message({
          message: '账号或密码为空',
          type: 'error'
        })
        return;
      }
      this.axios.post('http://localhost:3000/login',{account:account,password:password}).then((response) => {
        console.log(response)
        if(response.data.length==1){
          this.$message({
            message:'登录成功',
            type: 'success'
          })
          this.$router.push({path:'/index'})
          
        }else{
          this.$message({
            message:'用户名或密码错误',
            type: 'error'
          })
        }
      })
    },
    register: function(){
      this.$router.push({path:'/register'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template{
  margin: 0;
  padding: 0;
}
.el-input{
  width: 300px;
  margin-bottom: 20px;
}
.bgpurture {
  background: url("../assets/1.jpeg");
  width:100%;
  height: 100%;
  position: fixed;
}
.container{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top:200px;
  left: 520px;
}
</style>
