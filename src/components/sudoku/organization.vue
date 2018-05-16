<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<section class="box">
		<section class="org">
			<article class="org-unit" v-for="(key, value, index) in orglist">
				<header class="org-tit">
					<span class="org-line"></span>
					<span class="org-txt"> {{ key.name }} </span>
<!-- 					<span class="org-txt"> {{ key.value }} </span> -->
				</header>
				<section class="org-list" v-for="item in key.value">
					<div class="org-name">{{ item }}</div>
				</section>
			</article>
		</section>
	</section>
	</div>
</template>
<script type="text/javascript">
	import '../../../static/css/org.css'
	import headName from '../common/head.vue';
	export default {
		data() {
			return {
				name: "组织机构",
				orglist: []
			}
		},
		created(){
			this.getOrgMessage();
		},
		components: { headName },
		methods: {
			getOrgMessage(){
				this.$ajax.post('/index/orglist').then(res=>{
					console.log(res.data.orglist)
					this.orglist = res.data.orglist
				},res=>{
					console.log("请求失败")
				})
			}
		}
	}
</script>