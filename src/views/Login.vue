<template>
  <el-container class="container">
    <el-header class="header hidden-xs-only">
      <el-row>
        <el-col :xs="{span: 24, offset: 4}" :sm="{span: 10, offset: 4}" :md="{span: 8, offset: 4}" :lg="{span: 6, offset: 4}" :xl="{span: 4, offset: 4}" class="hidden-xs-only col-header">
          <a @click="toHome"><img src="@/assets/logobig.png" alt="shopping image"></a>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="main">
        <el-row>
          <el-col :xs="{span: 0, offset: 0}" :sm="{span: 7, offset: 2}" :md="{span: 6, offset: 3}" :lg="{span: 5, offset: 4}" :xl="{span: 4, offset: 5}" class="hidden-xs-only col-main">
            <img src="@/assets/loginpage.png" alt="login image">
          </el-col>
          <el-col :xs="{span: 24, offset: 0}" :sm="{span: 10, offset: 2}" :md="{span: 8, offset: 3}" :lg="{span: 6, offset: 4}" :xl="{span: 5, offset: 5}" class=" col-main">
            <div class="formWrapper">
              <br/>
              <h3 class="title">登录</h3>
              <br/>
              <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="form"
                  label-width="0"
                  class="demo-ruleForm"
              >
                <el-form-item>
                  <el-input v-model="ruleForm.username" prefix-icon="el-icon-s-custom" auto-complete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item >
                  <el-input v-model="ruleForm.password" prefix-icon="el-icon-s-cooperation" type="password" auto-complete="off" placeholder="输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">登录</el-button>
                  <br/>
                 <a @click="toRegister">没有账户？立即注册</a>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer  class="footer">
      <p>@2020 早起的阿柴版权所有</p>
      <hr>
      <p>@2020 早起的阿柴版权所有</p>
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'login',
  components: {

  },
  data() {
    return {
      //表单数据
      ruleForm: {
        username: '',
        password: '',
      },
      //校验规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    /**
     * 登录
     * @return
     */
    login(form){
      this.$refs[form].validate((valid) => {
        if (valid) {
          //请求
          console.log(this.ruleForm,'valid')
        } else {
          return false;
        }
      });
    },
    toRegister(){
      this.$router.push({ path:"/register" });
    },
    toHome(){
      this.$router.push({ path:"/" });
    }
  }
}
</script>

<style lang="less" scoped>
  .el-container{
    background-color:@bgColor;
    .header{
      height:20rem;
      .col-header{
        vertical-align:middle;
      }
      img{
        max-height:8rem;
        max-width:8rem;
      }
    }
    .main{
      height:40rem;
      background-color:@bgImgColor;
      .el-row{
        top:50%;
        transform:translateY(-50%);
        img{
          max-height:30rem;
          max-width:30rem;
        }
        .formWrapper{
          height:22rem;
          background-color:@bgLogin;
          padding:1.2rem;
          border-radius:0.5rem;
          -moz-box-shadow:0 0.24rem 0.54rem #333333;
          -webkit-box-shadow:0 0.24rem 0.54rem #333333;
          box-shadow:0 0.24rem 0.54rem #333333;
          h3{
            text-align:center;
            font-family:Microsoft YaHei;
            font-size:1.2rem;
            font-weight:bold;
          }
          p{
            text-align:right;
          }
          .el-button{
            width:100%;
          }
        }
      }
    }
    a{
      color:#66b1ff;
      &:hover{
        cursor:pointer
      }
    }
    .footer{

    }

  }

</style>
