<template>
  <el-container class="container">
    <el-header class="header hidden-xs-only">
<!--      notice-->
      <div class="notice">本网站不会真实发货，只作为开发练习</div>
<!--      navigation bar-->
      <div class="ui-flex ui-flex-direction navigation ui-flex-nowrap ui-flex-between">
        <div>
          <i class="el-icon-s-custom hidden-xs-only"><a class="hidden-xs-only" @click="toRouter('/login')">亲,请登录</a></i>
          <i class="el-icon-s-cooperation hidden-xs-only"><a class="hidden-xs-only" @click="toRouter('/register')">免费注册</a></i>
        </div>
        <div>
          <i class="el-icon-goods hidden-xs-only"><a class="hidden-xs-only" @click="toRouter('/')">商城首页</a></i>
          <i class="el-icon-user hidden-xs-only"><a class="hidden-xs-only" @click="toRouter('/users')">个人中心</a></i>
        </div>
      </div>

    </el-header>
    <el-main class="main">
      <!--      search bar-->
      <div>
        <el-row type="flex" align="middle">
          <el-col :xs="{span: 0, offset: 0}" :sm="{span: 4, offset: 2}" :md="{span: 4, offset: 2}" :lg="{span: 4, offset: 2}" :xl="{span: 4, offset: 2}" class="hidden-xs-only col-main">
            <img class="hidden-xs-only" src="@/assets/logobig.png" alt="shopping image">
          </el-col>
          <el-col :xs="{span: 24, offset: 0}" :sm="{span: 12, offset: 0}" :md="{span: 12, offset: 0}" :lg="{span: 12, offset: 0}" :xl="{span: 12, offset: 0}">
            <el-input clearable="true" placeholder="请输入内容" v-model="input" class="input">
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
<!--      <el-row>-->
<!--        <el-col :xs="{span: 0, offset: 0}" :sm="{span: 7, offset: 2}" :md="{span: 6, offset: 3}" :lg="{span: 5, offset: 2}" :xl="{span: 2, offset: 5}" class="hidden-xs-only col-main">-->
<!--          <img src="@/assets/loginpage.png" alt="login image">-->
<!--        </el-col>-->
<!--        <el-col :xs="{span: 22, offset: 0}" :sm="{span: 10, offset: 2}" :md="{span: 2, offset: 3}" :lg="{span: 6, offset: 2}" :xl="{span: 5, offset: 5}" class=" col-main">-->
<!--          <div class="formWrapper">-->
<!--            <br/>-->
<!--            <h3 class="title">登录</h3>-->
<!--            <br/>-->
<!--            <el-form-->
<!--                :model="ruleForm"-->
<!--                status-icon-->
<!--                :rules="rules"-->
<!--                ref="form"-->
<!--                label-width="0"-->
<!--                class="demo-ruleForm"-->
<!--            >-->
<!--              <el-form-item>-->
<!--                <el-input v-model="ruleForm.username" prefix-icon="el-icon-s-custom" auto-complete="off" placeholder="请输入用户名"></el-input>-->
<!--              </el-form-item>-->
<!--              <el-form-item >-->
<!--                <el-input v-model="ruleForm.password" prefix-icon="el-icon-s-cooperation" type="password" auto-complete="off" placeholder="输入密码"></el-input>-->
<!--              </el-form-item>-->
<!--              <el-form-item>-->
<!--                <el-button type="primary">登录</el-button>-->
<!--                <br/>-->
<!--                <a @click="toRegister">没有账户？立即注册</a>-->
<!--              </el-form-item>-->
<!--            </el-form>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--      </div>-->
    </el-main>
    <el-footer  class="footer hidden-xs-only">
<!--      <p>@2020 早起的阿柴版权所有</p>-->
<!--      <hr>-->
<!--      <p>@2020 早起的阿柴版权所有</p>-->
    </el-footer>
  </el-container>
</template>

<script>



export default {
  name: 'home',
  components: {
  },
  methods: {
    /**
     * 跳转路由
     * @param {type} string
     */
    toRouter(type){
      if(!type) return;
      this.$router.push({ path:type });
    }
  }
}
</script>


<style lang="less" scoped>
.el-container{
  background-color:@bgColor;
  .el-header{
    .notice{
      text-align:center;
      font-family:system-ui;
      font-weight:bold;
      font-size:1.2rem;
      background-color:@orange;
      color:@mainBgColor;
      border-radius:0.3rem;
      -moz-box-shadow:0 0.24rem 0.54rem #333333;
      -webkit-box-shadow:0 0.24rem 0.54rem #333333;
      box-shadow:0 0.1rem 0.5rem #333333;
    }
    .navigation{
      vertical-align: middle;
      i{
        padding:1rem;
        color:#000000;
        &:hover{
          cursor:pointer
        }
      }
    }
    .el-main{
      .search-bar{
        &img{
          max-height:8rem;
          max-width:8rem;
          padding:3rem;
        }
        .el-input__inner{
          padding:1rem;
        }
      }
    }

  }


}

</style>
