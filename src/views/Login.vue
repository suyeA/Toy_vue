<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" status-icon>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <!-- 如果给第三方的组件库注册原生事件，有可能注册不上，添加.native修饰符 -->
        <el-input @keyup.enter.native="login" v-model="form.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// tab  shift + tab
export default {
  data () {
    return {
      // 表单数据
      form: {
        username: '',
        password: ''
      },
      // 表单校验规则
      rules: {
        username: [
          // username的校验规则
          { required: true, message: '用户名不能为空', trigger: ['change', 'blur'] },
          { min: 3, max: 10, message: '用户名只能是3-10位', trigger: ['change', 'blur'] }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: ['change', 'blur'] },
          { min: 6, max: 12, message: '密码只能是6-12位', trigger: ['change', 'blur'] }
        ]
      }
    }
  },
  methods: {
    resetForm () {
      this.$refs.form.resetFields()
    },
    login () {
      // 对表单进行校验
      this.$refs.form.validate(async valid => {
        // if (!valid) return false
        // const { meta, data } = await this.$axios.post('login', this.form)
        // if (meta.status === 200) {
        //   // 先存token
        //   localStorage.setItem('token', data.token)
        //   // 在跳页面
        //   this.$router.push('/home')
        //   this.$message.success('登录成功')
        // } else {
        //   this.$message.error(meta.msg)
        // }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-color: #2d434c;
  height: 100%;
  overflow: hidden;
  .el-form {
    background-color: #fff;
    width: 400px;
    margin: 200px auto;
    padding: 75px 40px 15px;
    border-radius: 20px;
    position: relative;
    .el-button:last-child {
      margin-left: 80px;
    }
  }
}
</style>
