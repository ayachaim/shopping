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
      <div class="search-bar">
        <el-row type="flex" align="middle">
          <el-col :xs="{span: 0, offset: 0}" :sm="{span: 4, offset: 2}" :md="{span: 4, offset: 2}" :lg="{span: 4, offset: 2}" :xl="{span: 4, offset: 2}" class="hidden-xs-only col-main">
            <img class="hidden-xs-only" src="@/assets/logobig.png" alt="shopping image">
          </el-col>
          <el-col :xs="{span: 24, offset: 0}" :sm="{span: 12, offset: 0}" :md="{span: 12, offset: 0}" :lg="{span: 12, offset: 0}" :xl="{span: 12, offset: 0}">
            <el-input clearable="true" placeholder="请输入内容" v-model="input" class="input">
              <el-button v-waves slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
<!--      shop nav-->
<!--      <div class="shop-nav">-->
<!--        <div class="slide-all">-->
<!--&lt;!&ndash;        NavMenu&ndash;&gt;-->
<!--          <div class="slide-container">-->
<!--            <div class="nav-menu hidden-xs-only">-->
<!--              <span>全部分类</span>-->
<!--            </div>-->
<!--            <div class="slide-bar">-->
<!--              &lt;!&ndash;          cascader只能自己单独封装&ndash;&gt;-->
<!--              &lt;!&ndash;            <el-cascader-panel :options="options"></el-cascader-panel>&ndash;&gt;-->
<!--              <Cascader />-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="slide">-->
<!--            <el-carousel height="30rem">-->
<!--              <el-carousel-item>-->
<!--&lt;!&ndash;                <img src='@/assets/ceshi1111.png' alt="slide image">&ndash;&gt;-->
<!--              </el-carousel-item>-->
<!--              <el-carousel-item>-->
<!--&lt;!&ndash;                <img src='@/assets/ceshi1111.png' alt="slide image">&ndash;&gt;-->
<!--              </el-carousel-item>-->
<!--            </el-carousel>-->
<!--          </div>-->
<!--          </div>-->
<!--        </div>-->
        <!--          slide-->

      </div>
    </el-main>
    <el-footer  class="footer hidden-xs-only">
<!--      backtop-->
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </el-footer>
  </el-container>
</template>

<script>


import waves from '@/components/waves';
import Cascader from '@/components/Cascader.vue'

export default {
  //搜索按钮水波纹效果
  directives:{ waves },
  name: 'home',
  components: {
    Cascader
  },
  data(){
    return {
      slideIMG:[
          '@/assets/loginpage.png',
        '@/assets/loginpage.png',
        '@/assets/loginpage.png',
        '@/assets/loginpage.png',
      ],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
        }]
      }]
    }
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
  padding:0;
  .el-header{
    padding:0;
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
  }
  .el-main{
    padding:0;
    height:100rem;
    .search-bar{
      padding:1rem;
    }
    .shop-nav{
      position:relative;
      .slide-all{
        height:40rem;
        width:100%;
        .slide-container{
          border:1px solid black;
          width:100%;
          height:30rem;
          //margin:0 10%;
          .nav-menu{
            span{
              display:block;
              background-color:@mainBgColor;
              width:10%;
              line-height:3rem;
              font-size:1rem;
              //margin-left:5rem;
              text-align:center;
              color:white;
            }
          }
          .slide-bar{
            //margin:0 10%;
            text-align:center;
            width:10%;
            //border:1px solid blue;
            z-index:999;
            //子元素为block,verticalalign不生效,子元素和父元素行高一致可以垂直居中

          }
        }
        //margin:auto 3rem ;
        //width:auto;
        //left:6rem;

        .slide{
          position:absolute;
          height:30rem;
          top:0;
          width:100%;
          left:46%;
          transform:translateX(-50%);
          z-index:888;
          .el-carousel{
            text-align:center;
            .el-carousel__item{
              line-height:30rem;
              & img{
                height:100%;
              }
            }
          }
        }

      }

    }

  }
}

</style>
