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
            <img class="hidden-xs-only" src="@/assets/logobig.png" alt="shopping image">

            <el-input clearable="true" placeholder="请输入内容" v-model="input" class="input">
              <el-button v-waves slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
        </el-row>
      </div>
<!--      shop nav-->
      <div class="index">
        <el-row type="flex" align="middle" justify="center" class="banner">
            <div class="banner-container">
              <el-carousel height="30rem">
                <el-carousel-item>
                  <img src='@/assets/banner-list1.jpg' alt="slide image">
                </el-carousel-item>
                <el-carousel-item>
                  <img src='@/assets/banner-list2.jpg' alt="slide image">
                </el-carousel-item>
                <el-carousel-item>
                  <img src='@/assets/banner-list3.jpg' alt="slide image">
                </el-carousel-item>
              </el-carousel>
            </div>
        </el-row>
        <el-row type="flex" align="middle" justify="center" class="shop-nav hidden-xs-only hidden-sm-only">
              <div class="slide-container">
                <div class="nav-menu">
                  <span>全部分类</span>
                </div>
                <div class="slide-bar">
                  <!--          cascader只能自己单独封装-->
                  <Cascader />
                </div>
              </div>
        </el-row>
      </div>
      <div class="recommendation">
        <el-row type="flex" align="middle" justify="space-around" class="">
            <div>
              <h3>springcloud</h3>
              <h4>分布式微服务</h4>
              <img src="@/assets/douyin.jpg" alt="">
            </div>
          <div>
            <h3>springboot</h3>
            <h4>分布式架构</h4>
            <img src="@/assets/toutiao.png" alt="">
          </div>
          <div>
            <h3>rabbitMQ</h3>
            <h4>分布式消息队列</h4>
            <img src="@/assets/weixin.jpg" alt="">
            </div>
            <div>
              <h3>kafka</h3>
              <h4>分布式消息队列</h4>
              <img src="@/assets/zk.jpg" alt="">
            </div>
        </el-row>
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
import Cascader from '@/components/Cascader.vue';
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
      }],
      isShowBg : Boolean(Math.round(Math.random())),
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
  },
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
    //height:150rem;
    .search-bar{
      padding:1rem;
    }
    .recommendation{
      border:1px solid red;
      margin-top:6rem;
    }
    .index{
      position:relative;
      .banner{
        top:3rem;
        //left:10rem;
        z-index:888;
        .banner-container{
          background: linear-gradient(to right,#d3959b,#bfe6ba);
          top:0;
          width:100%;
          text-align:center;
          .el-carousel{
            //轮播图背景颜色
            text-align:center;
            .el-carousel__item{
              line-height:30rem;
              & img{
                max-width:100%;
                height:100%;
              }
            }
          }
        }
      }
      .shop-nav{
        position:absolute;
        top:0;
        z-index:999;
        left:10rem;
          .slide-container{
            width:100%;
            height:30rem;
            .nav-menu{
              span{
                display:block;
                background-color:@mainBgColor;
                width:10rem;
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
              width:10rem;
              //border:1px solid blue;
              z-index:999;
              //子元素为block,verticalalign不生效,子元素和父元素行高一致可以垂直居中
            }
          }
      }
    }


  }
}

</style>
