<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="distance">
			<div class="contain" v-for="item in newsList">
				<div class="content" @click="jumpNewsDetail(item.id,item.title)">
					<div class="list clearfix">
						<div class="listImg">
							<img src="../../../static/img/apply-icon.png">
						</div>
						<div class="listDetail">
							<div class="title">{{ item.title }}</div>
							<div class="time">{{ item.date }}</div>
						</div>
						<div class="listIcon">
							<img src="../../../static/img/rightorgin-icon.png">
						</div>
					</div>
				</div>
			</div>
		</div>            
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue';
	export default {
		data(){
			return{
				name: "消息列表",
				newsList: []
			}
		},
		created(){
			this.getNewsList();
		},
		methods:{
			getNewsList(){
				this.$ajax.post('/index/newsList').then(res=>{
					console.log(res);
					this.newsList = res.data.newsList;
				},res=>{
					console.log("请求失败")
				})
			},
			jumpNewsDetail(id,title){
				this.$router.push({
					name: "newsdetail",
					params:{actId: id, title:title}
				})
			}

		},
		components:{ headName }
	}
</script>
<style scoped>
	.signIn{
		position: absolute;
		top: -2px;
		right: 12px;
	}
	.signIn img{
		height: 36px;
		width: 26px;
	}
	.distance{
		padding:0.5% 2%;
	}
	.contain{
		border-radius: 5px;
		background-color: #fff;
		margin-top: 10px;
		box-shadow: 0.5px 0.5px #ccc;
		/*margin-top: 48px;*/
	}
	.list{
		border-bottom: 1px solid #e2e2e2;
		padding: 10px 7px;
		position: relative;
	}
	.list img{
		width: 24px;
		margin-top: 13px;
	}
	.listDetail{
		margin-left: 10px;
		margin-top: 3px;
		width: 65%;
	}
	.listIcon{
		margin-left: 10px;
	}
	.listIcon img{
		width: 12px;
		margin-top: 6px;
	}
	.listImg, .listDetail, .listIcon{
		float: left;
	}
	.listImg{
		width: 48px;
		height: 48px;
		background-color: #fff4ee;
		border-radius: 50px;
		text-align: center;
	}
	.listIcon{
		float: right;
		margin-top: 8px;
		margin-right: 15px;
	}
	.title{
		font-weight: 600;
		color: #5e5e5e;
	}
	.time{
		margin-top: 4px;
		font-size: 12px;
	}
	.circle{
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: #f36a1c;
		position: absolute;
		top: 31px;
		right: 38px;
	}
</style>