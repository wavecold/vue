<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="contain">
			<!-- <router-link to="/meeting/newsDetail"> -->
				<div class="meeting" v-for="item in newsListShow" @click="jumpDet(item.id)">
					<div class="title">{{ item.title }}</div>
					<div class="time">
						<span><img src="../../../static/img/time.png"></span>
						<span class="">时间：</span>
						<span>{{ item.date }}</span>
					</div>
					<div class="location">
						<div class="address">
							<span><img src="../../../static/img/address.png"></span>
							<span>地点：</span>
							<span>{{ item.address }}</span>
							<span class="apply">{{ item.state }}</span>
						</div>	
					</div>
				</div>
			<!-- </router-link> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue';
	export default {
		data () {
			return {
			  	newsListShow: [],
			  	name: "会议列表"
			}
		},
		created() {
			this.getMessage()
			
		},

		methods:{
			getMessage: function() {
				this.$ajax.post('/news/index').then(res => {
					console.log(res);
					for(var i = 0; i < res.data.articles.length; i++){
						if( res.data.articles[i].state <= "10" && res.data.articles[i].state >= "7"){
							res.data.articles[i].state = "立即报名"
							console.log(res.data.articles[i].state)
						}
						if( res.data.articles[i].state > "10" && res.data.articles[i].state <= "15" ){
							res.data.articles[i].state = "待审核"
						}
						if( res.data.articles[i].state > "15" && res.data.articles[i].state <= "50" ){
							res.data.articles[i].state = "准备参会"
						}
						if(res.data.articles[i].state == "0" || res.data.articles[i].state == "6" || res.data.articles[i].state == "3" || res.data.articles[i].state == "2"){
							res.data.articles[i].state = "准备参会"
						}
						if(res.data.articles[i].state == "1" || res.data.articles[i].state == "4" || res.data.articles[i].state == "5"){
							res.data.articles[i].state = "待审核"
						}	
					}
					this.newsListShow = res.data.articles;
				}, res => {
					console.log(res);
				});
			},
			jumpDet(id){
				this.$router.push({
					name: 'newsDetail',
					params:{actId: id}
				})
			}
		},
		components: { headName },

}
</script>

<style scoped>
	.contain{
		padding: 1% 1%;
	}
	.meeting{
		background-color: #ffffff;
		border-radius: 2%;
		padding: 4% 3%;
		margin-bottom: 2%;
		box-shadow: 0px 1px 1px 0.5px;
	}
	.title{
		font-size: 18px;
	}
	.time{
		margin: 2% 0;
	}
	img{
		width: 14px;
		vertical-align: middle;
		margin-right: 1%;
	}
	.location{
		margin-top: 2%;
	}
	.apply{
		width: 22%;
		text-align: center;
		float: right;
		background-color: #f9752b;
		color: #fff;
		border-radius: 50px;
		font-size: 12px;
		padding: 1px;
	}
</style>