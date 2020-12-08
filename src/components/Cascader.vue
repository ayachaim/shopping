<template>
  <div class="container hidden-xs-only">
    <ul>
      <li ><img src="@/assets/cake.png" alt=""/>甜点/蛋糕&nbsp&nbsp ></li>
      <li ><img src="@/assets/cake.png" alt=""/>甜点/蛋糕&nbsp&nbsp ></li>
      <li ><img src="@/assets/cake.png" alt=""/>甜点/蛋糕&nbsp&nbsp ></li>
      <li ><img src="@/assets/cake.png" alt=""/>甜点/蛋糕&nbsp&nbsp ></li>
      <li ><img src="@/assets/cake.png" alt=""/>甜点/蛋糕&nbsp&nbsp ></li>
      <li ><img src="@/assets/cake.png" alt=""/>甜点/蛋糕&nbsp&nbsp ></li>
    </ul>
  </div>
</template>

<script>
/**
 * 级联面板
 */
export default {
  name: 'Cascader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .container{
      ul{
        list-style:none;
        display:block;
        background-color:@casBgColor;
        width:10rem;
        line-height:3rem;
        font-size:1rem;
        //margin-left:5rem;
        //text-align:center;
        color:#e9e9e9;
        li{
          list-style:none;
          white-space:nowrap;
          overflow:hidden;
          text-overflow: ellipsis;
          padding:0 0.5rem;
          font-size:0.9rem;
        }
    }
  }
</style>
