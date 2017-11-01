<template>
  <div id="index">
    <div>
      <el-input type="text" placeholder="请输入用户名" v-model="user">
        <template slot="prepend">昵称</template>
      </el-input>
    </div>
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
      <el-input type="passord" placeholder="请在次输入密码" v-model="password1">
        <template slot="prepend">确认密码</template>
      </el-input>
    </div>
  </div>
</template>


<script>
    
</script>

<style scoped>
.el-input{
  width: 300px;
  margin-bottom: 20px;
}
#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}
</style>
