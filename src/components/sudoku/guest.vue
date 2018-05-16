<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="guestBox">
			<div class="contain" v-for="item in guestlist">
				<div class="guestIntro">
					<div class="intro_name">
						<div class="picture"><img :src="item.image"/></div>
						<div class="detailBox">
							<div class="detail">
								<span class="name">{{ item.guestName }}</span>
								<span class="describe">{{ item.duty }}</span>
							</div>
							<div class="unit">
								<span class="describe">{{ item.unit }}</span>
							</div>
						</div>	
					</div>
					<div class="introduction">
						{{ item.intro }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue'
	export default{
		data() {
			return{
				name: "嘉宾介绍",
				guestlist: []
			}
		},
		created(){
			this.getGueMessage(),
			this.clickImg()
		},
		methods:{
			clickImg(img){
				var s = '/index/guelist/' + img 
				this.src=s;
			},
			getGueMessage(){
				this.$ajax.get('/index/guelist').then(res=>{
					console.log(res);
					console.log(res.data.guests[0].image);
					this.guestlist = res.data.guests
				}, res=>{
					console.log("请求失败")
				})
			}
		},
		components: { headName }
	}
</script>
<style scoped>
	.contain{
		/*margin-top: 48px;*/
		padding: 10px;
		color: #666666;
	}
	.guestIntro{
		background-color: #ffffff;
		padding: 3%;
		/*height: 200px;*/
		/*border: 1px solid blue;*/
		border-radius: 5px;
		margin-bottom: 10px;
		box-shadow: 1px 1px 1px -1.5px;
	}
	.intro_name{
		/*height: 100%;*/
		/*border-bottom: 1px dashed #cccccc;*/
		/*padding-bottom: 3%;*/
	}
	.picture{
		display: inline-block;
		width: 60px;
		height: 60px;
		/*background-color: red;*/
		vertical-align: top;
		border-radius: 3px;
		background-color: #fff;
	}
	.picture img{
		width: 100%;
		height: 100%;
		border-radius: 4px;
		/*height: 40px;*/
	}
	.detailBox{
		margin-left: 3%;
		display: inline-block;
		vertical-align: top;
		width: 74%;
	}
	.detail{
		height: 14px;
		line-height: 14px;
		overflow: hidden;
	}
	.unit{
		max-height: 32px;
		line-height: 16px;
		margin-top: 5px;
		overflow: hidden;
	}
	.name{
		margin-right: 10px;
	}
	.introduction{
		color: #666666;
		margin-top: 10px;
		text-indent: 2em;
		font-size: 12px;
	}
	.describe{
		font-size: 12px;
	}
</style>