<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="posBox">	
			<div class="sheet white">
				<div class="title">{{ listMessage[0].title }}</div>
				<div>
					<div class="time commenHeight">
						<span><img src="../../../static/img/time-icon.png"></span>
						<span>时间&nbsp;:</span>
						<span id="time" class="time commenLeft">{{ listMessage[0].date }}</span>
					</div>
					<div class="location commenHeight">
					<span><img src="../../../static/img/site-icon.png"></span>
						<span>地点&nbsp;:</span>
						<span class="address commenLeft"> {{ listMessage[0].address }} </span>
					</div>
				</div>
				<div class="switchover" v-if="ishide">
					<div class="site commenHeight">
						<span class="meetImg"><img src="../../../static/img/state-icon.png"></span>
						<span class="meetState">参会状态&nbsp;:</span>
                        <span class="status" v-if="listMessage[1].state == 0">
                            <span id="status1" class="color">待审核</span>
                            <span id="status2">- 审核通过</span>
                            <span id="status3">- 预订酒店</span>
                            <span id="status4">- 准备参会</span>
                            <span id="status5">- 结束</span>
                        </span>
                        <span class="status" v-if="listMessage[1].state == 1">
                            <span id="status1">待审核</span>
                            <span id="status2" class="color">- 审核通过</span>
                            <span id="status3">- 预订酒店</span>
                            <span id="status4">- 准备参会</span>
                            <span id="status5">- 结束</span>
                        </span>
                        <span class="status" v-if="listMessage[1].state == 2">
                            <span id="status1">待审核</span>
                            <span id="status2">- 审核通过</span>
                            <span id="status3" class="color">- 预订酒店</span>
                            <span id="status4">- 准备参会</span>
                            <span id="status5">- 结束</span>
                        </span>
					</div>
					<div class="commenHeight">
						<span class="spoImg"><img src="../../../static/img/sponsor-icon.png"></span>
						<span class="organization">
							<div class="sponsor">主办方&nbsp;:</div>
							<div class="spoContent">
								{{ listMessage[0].sponsor }}
							</div>
						</span>
					</div>
				</div>
				<span class="fold">
					<img src="../../../static/img/downward.png" @click="showIcon()" v-if="isshow">
					<img src="../../../static/img/upward.png" @click="hideIcon()" v-if="ishide">
				</span>
			</div>
			<div class="list white">
				<div class="listFlex">
					<!-- <a href="introduction.html" class="intro">
						<div class="imgContent">
							<img src="../../../static/img/intro.png">
						</div>
						<div>简介</div>
					</a> -->
					<div  class="grid invitation" @click="jumpInvi()">
						<div class="imgContent">
							<img src="../../../static/img/invitation.png">
						</div>
						<div>邀请函</div>
					</div>
					<div class="grid institution" @click="jumpInst()">
						<div class="imgContent">
							<img src="../../../static/img/institution.png">
						</div>
						<div>组织机构</div>
					</div>
					<div class="grid schedule" @click="jumpSche()">
						<div class="imgContent">
							<img src="../../../static/img/schedule.png">
						</div>
						<div>日程</div>
					</div>
				</div>
				<div class="listFlex">
					<div class="grid guest" @click="jumpGues()">
						<div class="imgContent">
							<img src="../../../static/img/guest.png">
						</div>
					<div>嘉宾</div>
					</div>
					<div href="contact.html" class="grid guide" @click="jumpSpon()">
						<div class="imgContent">
							<img src="../../../static/img/fingerpost.png">
						</div>
						<div>联系主办方</div>
					</div>
					<div  class="grid">
						<!-- <div class="imgContent">
							<img src="../../../static/img/intro.png">
						</div>
						<div>简介</div> -->
					</div>
				</div>	
			</div>
			<div>
				<div @click="jumpHote()" class="ticket white comPadding params">
					<span><img src="../../../static/img/ticket-icon.png"></span>
					<span>酒店</span>
					<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
				</div>
				<div @click="jumpAirc()" class="ticket white comPadding params distanceTop">
					<span><img src="../../../static/img/ticket-icon.png"></span>
					<span>高铁/机票</span>
					<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
				</div>
			</div>
			<div class="information white">
				<div @click="jumpActi()" class="inform comPadding params">
					<span><img src="../../../static/img/inform-icon.png"></span>
					<span>活动通知</span>
					<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
				</div>
				<div @click="jumpDisc()" class="discuss comPadding params">
					<span><img src="../../../static/img/discussion-icon.png"></span>
					<span>会议讨论</span>
					<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
				</div>
				<div @click="jumpappl()" class="apply comPadding params">
					<span><img src="../../../static/img/apply-icon.png"></span>
					<span>报名信息</span>
					<span class="arrows fr"><img src="../../../static/img/arrowRigth-icon.png"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue';
	import '../../../static/css/newsDetail.css'
	export default {
		data(){
			return {
				name: "消息详情页",
				isshow: true,
				ishide: false,
				listMessage: []
			}
		},
		components: { headName },
		created(){
			this.getDetailMeaasge();
		},
		methods:{
			getDetailMeaasge: function(){
				this.$ajax.post('/news/index',{id:this.$route.params.actId}).then(res=>{
					this.listMessage = res.data.articles;
					console.log(this.$route.params.actId);
					console.log(res.data.articles);
				},res=>{
					console.log(res)
				})
			},
			showIcon(){
				this.isshow = !this.isshow
				this.ishide = !this.ishide
			},
			hideIcon(){
				this.isshow = !this.isshow
				this.ishide = !this.ishide
			},
			jumpInvi(){
				alert(111);
				this.$router.push({
					name: 'invitation',
					params:{actId: this.$route.params.actId}
				})
			},
			jumpInst(){
				this.$router.push({
					name: "organization",
					params:{actId: this.$route.params.actId}
				})
			},
			jumpSche(){
				this.$router.push({
					name: "schedule",
					params:{actId: this.$route.params.actId}
				})
			},
			jumpGues(){
				this.$router.push({
					name: "guest",
					params:{actId: this.$route.params.actId}
				})
			},
			jumpSpon(){
				this.$router.push({
					name: "sponsor",
					params:{actId: this.$route.params.actId}
				})
			},
			jumpHote(){
				this.$router.push({
					name: "hotel",
					params:{actId: this.$route.params.actId}
				})
			},
			jumpAirc(){
				this.$router.push({
					name: "aircraft",
					params:{actId: this.$route.params.actId}
				})
			},
			jumpActi(){
				this.$router.push({
					name: "activityInfo",
					params:{actId: this.$route.params.actId}
				})
			},
			jumpDisc(){
				this.$router.push({
					name: "discussion",
					params:{actId: this.$route.params.actId}
				})
			},jumpappl(){
				this.$router.push({
					name: "applyInfo",
					params:{actId: this.$route.params.actId}
				})
			}
			// this.$router.push({
			// 	name: 'name',
			// 	params:{}
			// }),

		}
	}
</script>
<style scoped>
	@import '../../../static/css/newsDetail.css';
	.color{
		color: red;
	}
</style>