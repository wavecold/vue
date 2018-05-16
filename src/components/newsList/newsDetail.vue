<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div>
			<div class="navTitle" v-for="item in newsList">
				{{ item.title }}
			</div>
			<!-- <div id="mescroll" class="mescroll"> -->
				<div class="distance">
					<div id="List" class="List">
						<div class="contain" v-for="item in newsList">
							<div class="date">
								<span>{{ item.date }}</span>
							</div>
							<div class="content">{{ item.content }}</div>
						</div>
					</div>
				</div>
			<!-- </div> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	import headName from "../common/head.vue"
	export default{
		data(){
			return {
				name: "消息详情",
				newsList: []
			}
		},
		// mounted: function() {
		// 	var self = this;
		// 	self.mescroll = new MeScroll("mescroll", {
		// 		down: {
		// 			callback: self.downCallback, //上拉回调
		// 		}
		// 	});
			
		// 	document.getElementById("dataList").style.display="block";
		// },
		created(){
			this.getlistMessage()
		},
		methods:{
			getlistMessage(){
				this.$ajax.post('/index/newsListdetail').then(res=>{
					console.log(res);
					this.newsList = res.data.newsListDetail;
				}, res=>{
					console.log("请求失败")
				})
			}
			// downCallback: function(page) {
			// 	var self = this;
			// 	getListDataFromNet(page.num, page.size, function(curPageData) {
			// 		self.pdlist = self.pdlist.concat(curPageData);
			// 		self.mescroll.endSuccess(curPageData.length);
				
			// 	}, function() {
			// 		self.mescroll.endErr();
			// 	});
			// }
		},
		components: { headName }
	}
</script>

<style scoped>
.date{
	text-align: center;
	width: 100%;
	color: #878787;
	font-weight: 600;
}
.navTitle{
	position: fixed;
	top: 48px;
	padding: 15px 0;
	background-color: #ffffff;
	color: #4b4b4b;
	font-weight: 700;
	box-shadow: 1px 1px 1.5px 1.5px #ccc;
	width: 100%;
	text-align: center;
}
.conDetail{
	margin-top: 20px;
}
.contain{
	padding: 5px 3%;
	width: 100%;
	box-sizing: border-box;
}
.content{
	margin-top: 10px;
	background-color: #ffffff;
	padding: 18px 4%;
	border-radius: 6px;
	color: #444444;
}
.distance{
	box-sizing: border-box;
	position: fixed;
	margin-top: 60px;
	height: 70%;
	width: 100%;
	overflow-y: auto;
}
</style>