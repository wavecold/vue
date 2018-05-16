<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer">
      <router-link to="/meeting" class="menu">
        <div><img src="../static/img/persono.png"></div>
        <div>会议</div>
      </router-link>
      <router-link to="/news" class="menu info">
        <div><img src="../static/img/duty.png"></div>
        <div>信息</div>
      </router-link>
      <router-link to="/mine" class="menu">
        <div><img src="../static/img/apply-icon.png"></div>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  z-index: 10000;
}
.menu{
  width: 20%;
  /*background-color: red;*/
  float: left;
  height: 48px;
  /*line-height: 48px;*/
  text-align: center;
  /*color: #fff;*/
}
.menu img{
  width: 20px;
  /*height: 20px;*/
}
.info{
  margin: 0 20%;
}
</style>
