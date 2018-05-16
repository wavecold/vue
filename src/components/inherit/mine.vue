<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="myhead">
			<img class="myBanner" src="../../../static/img/myBanner.png"/>
			<div class="myMine"></div>
			<div class="myCode code">
				<img src="../../../static/img/code.png">
			</div>
			<div class="circle">
				<div class="circleChild">
					<img src="../../../static/img/picture1.png">
				</div>

			</div>
			<div class="nameBox">
				<span class="my-name">{{nameList[0].name}}</span>
				<!-- <span class="my-phone">13241418629</span> -->
			</div>
		</div>
		<div class="information white">
			<div @click="jumpPerson(nameList[0].id)" class="inform comPadding" >
				<span><img src="../../../static/img/inform-icon.png"></span>
				<span>个人信息</span>
				<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
			</div>
			<div @click="jumpInvoice(nameList[0].id)" class="discuss comPadding">
				<span><img src="../../../static/img/discussion-icon.png"></span>
				<span>发票信息</span>
				<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
			</div>
			<div @click="jumpCardbag(nameList[0].id)" class="comPadding">
				<span><img src="../../../static/img/crad_icon.png"></span>
				<span>卡包</span>
				<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
			</div>
		</div>
		<div>
			<div @click="jumpPassword(nameList[0].id)" class="ticket white comPadding">
				<span><img src="../../../static/img/ticket-icon.png"></span>
				<span>密码修改</span>
				<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
			</div>
		</div>
		<div class="information white">
			<div @click="jumpHelp(nameList[0].id)" class="discuss comPadding">
				<span><img src="../../../static/img/discussion-icon.png"></span>
				<span>使用帮助</span>
				<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
			</div>
			<div @click="jumpOpinion(nameList[0].id)" class="apply comPadding">
				<span><img src="../../../static/img/apply-icon.png"></span>
				<span>意见反馈</span>
				<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue';
	export default {
		data(){
			return {
				name: "我的",
				nameList: []
			}
		},
		created(){
			this.getNameMessage();
		},
		methods: {
			getNameMessage(){
				this.$ajax.post('/index/nameList').then(res=>{
					console.log(res)
					this.nameList = res.data.nameList
				}, res=>{
					console.log("请求失败")
				})
			},
			jumpCardbag(id){
				this.$router.push({
					name: 'cardbag',
					params:{actId: id} 
				})
			},
			jumpHelp(id){
				this.$router.push({
					name: 'help',
					params:{actId: id} 
				})
			},
			jumpInvoice(id){
				this.$router.push({
					name: 'invoice',
					params:{actId: id} 
				})
			},
			jumpOpinion(id){
				this.$router.push({
					name: 'opinion',
					params:{actId: id} 
				})
			},
			jumpPassword(id){
				this.$router.push({
					name: 'password',
					params:{actId: id} 
				})
			},
			jumpPerson(id){
				this.$router.push({
					name: 'person',
					params:{actId: id} 
				})
			}
		},
		components:{ headName }
	}
</script>
<style scoped>
.myhead {
	height: 170px;
	background-color: #fff;
}
.myBanner {
	position: relative;
	height: 146px;
	width: 100%;
}
.myMine, .myCode{
	width: 50px;
	position: absolute;
	top: 10px;
	left: 50%;
	margin-left:-25px; 
	color: #fff;
	font-size: 18px;
}
.myCode{
	left: auto;
	right: 10px;
}
.myCode img{
	height: 36px;
	width: 26px;
}
.my-name {
	font-weight: bold;
}
.circle{
	width: 76px;
	height: 76px;
	border-radius: 50%;
	background-color: #fff;
	position: absolute;
	top: 105px;
	left: 50%;
	margin-left: -38px;
}
.circleChild{
	position: absolute;
	width: 68px;
	height: 68px;
	border-radius: 50%;
	background-color: #824415;
	top: 4px;
	left: 4px;
}
.circleChild img{
	position: absolute;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	top: 10px;
	left: 10px;
}
.nameBox{
	text-align: center;
	margin-top: -10px;
}
</style>