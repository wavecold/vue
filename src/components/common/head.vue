<template>
	<div class="header">
      <span class="navImg" @click="jumpOther()" v-if="isshow">
        <img src=".././../../static/img/arrowLeft-icon.png">
      </span>
      <span>{{ this.headName }}</span>
    </div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
        isshow: true
			}
		},
    created(){
      if(this.headName == "会议列表"){
        this.isshow = !this.isshow
      };
      if(this.headName == "我的"){
        this.isshow = !this.isshow
      };
      if(this.headName == "消息列表"){
        this.isshow = !this.isshow
      };
    },
    methods:{
      jumpOther(){
        history.go(-1);
      }
    },
		props:["headName"]
	}
</script>
<style type="text/css">
.header{
  position: fixed;
  top: 0;
  height: 48px;
  width: 100%;
  background-color: #f9752b;
  line-height: 48px;
  text-align: center;
  color: #fff;
  z-index: 10000;
}
.navImg{
  position: absolute;
  text-align: center;
  width: 15%;
  top: 0;
  left: 0;
}
.navImg img{
  width: 12px;
  vertical-align: middle;
  margin-top: -4px;
}
</style>
