<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="contBox">
			<div class="container" v-for="item in sponsor">
				<div class="content">
					<div class="contentImg"><img src="../../../static/img/location.png"></div>
					<div class="contentDet">
						<div class="headline">联系地址</div>
						<div class="site contactAddress">{{ item.address }}</div>
					</div>
				</div>
				<div class="content">
					<div class="contentImg email"><img src="../../../static/img/emailIcon.png"></div>
					<div class="contentDet">
						<div class="headline">联系邮箱</div>
						<div class="site contactEmail">{{ item.email }}</div>
					</div>
				</div>
				<div class="content">
					<div class="contentImg phone"><img src="../../../static/img/phoneIcon.png"></div>
					<div class="contentDet">
						<div class="headline">联系电话</div>
						<div class="site contactPhone">{{ item.phone }}</div>
					</div>
				</div>
				<div class="content contentTop">
					<div class="contentImg person"><img src="../../../static/img/personIcon.png"></div>
					<div class="contentDet">
						<div class="headline">联系人</div>
						<div class="site contactUser">{{ item.contact }}</div>
					</div>
				</div>
				<div class="content">
					<div class="contentImg zipcode"><img src="../../../static/img/zipcodeIcon.png"></div>
					<div class="contentDet">
						<div class="headline">联系邮编</div>
						<div class="site contactZipcode">{{ item.code }}</div>
					</div>
				</div>
			</div>
			<!-- <div class="code">
				<div class="meeting">
					<div class="meetCode">
						<div class="meetingCode" id="qrcode"></div>
					</div>
					<div class="meetingTntro">会议二维码</div>
				</div>
				<div class="platform">
					<div class="platformCode">
						<img src="../../../static/img/public.jpg">
					</div>
					<div class="platformIntro">平台二维码</div>
				</div>
			</div> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue'
	export default{
		data(){
			return {
				name: "联系主办方",
				sponsor: []
			}
		},
		created(){
			this.getspoMessag();
		},
		methods: {
			getspoMessag(){
				this.$ajax.post('/index/spolist').then(res=>{
					console.log(res);
					this.sponsor = res.data.sponsor
				}, res=>{
					console.log("请求失败")
				})
			}
		},
		components: { headName }
	}
</script>
<style scoped>
html,body{
	width: 100%;
}
.contBox{
	position: fixed;
	width: 100%;
	height: 100%;
	overflow-y: auto;
}
.container{ 
	background-color: #f7f7f7;
	padding: 20px 10px;
}
.backdrop{
	display: inline-block;
	width: 22px;
	height: 22px;
	background-color: #d54544;
	text-align: center;
	line-height: 22px;
	border-radius: 50%;
	margin-left: 20px;
}
.backdrop img{
	width: 14px;
	margin-top: -1px;
}
.titleCon{
	font-size: 18px;
	margin-left: 15px;
}
.content{
	/*width: 100%;*/
	background-color: #ffffff;
	padding: 10px 20px;
	margin-bottom: 2px;
}
.contentImg{
	line-height: 50px;
	text-align: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #fe771d;
	display: inline-block;
	vertical-align: middle;
}
.contentImg img{
	width: 25px;
	margin-top: 11px;
}
.contentDet{
	width: 70%;
	display: inline-block;
	vertical-align: middle;
	margin-left: 20px;
}
.headline{
	font-size: 18px;
	font-weight: 500;
	margin-bottom: 5px;
}
.contentTop{
	margin-top: 20px;
}
.email{
	background-color: #4badf6;
}
.phone{
	background-color: #ffbb1c;
}
.person{
	background-color: #d64645;
}
.zipcode{
	background-color: #82d255;
}
.meeting, .platform{
	width: 40%;
	float: left;
	text-align: center;
	margin: 10px 0 3% 10px;
}
.meetingTntro{
	margin-top: 10px;
}
.platformIntro{
	margin-top: 6px;
}
.platform{
	float: right;
	margin-left: 0;
	margin-right: 3%;
}
.meetCode{
	height: 100%;
	background-color: #fff;
	padding: 5%;
}
.code img{
	width: 100%;
}
</style>