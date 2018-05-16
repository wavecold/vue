<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<section class="my-page">
			<article>
				<div class="page-list">
					<p class="page-l">
						<img src="../../../static/img/picture.png" alt="">
						<span>头像</span>
					</p>
					<p class="page-r" @click="clickShow()">
						<img class="picture" src="../../../static/img/picture1.png" alt="picture">
					</p>
				</div>
				<div class="page-list" data-type="name">
					<p class="page-l">
						<img src="../../../static/img/name.png" alt="name">
						<span>姓名</span>
					</p>
					<p class="page-r">
						<span class="name" @click="clickShow()">张三</span>
					</p>
				</div>
				<div class="page-list" data-type="nick">
					<p class="page-l">
						<img src="../../../static/img/nick.png" alt="nick">
						<span>昵称</span>
					</p>
					<p class="page-r">
						<span class="nick" @click="clickShow()">请设置昵称</span>
					</p>
				</div>
				<div class="page-list" data-type="corporation">
					<p class="page-l">
						<img src="../../../static/img/unit.png" alt="unit">
						<span>单位</span>
					</p>
					<p class="page-r">
						<span class="unit" @click="clickShow()">北京世纪协达</span>
					</p>
				</div>
				<div class="page-list" data-type="mobile">
					<p class="page-l">
						<img src="../../../static/img/phone.png" alt="mobile">
						<span>手机号</span>
					</p>
					<p class="page-r">
						<span class="mobile" @click="clickShow()">13672113681</span>
					</p>
				</div>
				<div class="page-list" data-type="email">
					<p class="page-l">
						<img src="../../../static/img/email.png" alt="email">
						<span>邮箱</span>
					</p>
					<p class="page-r">
						<span class="email" @click="clickShow()">youxiang@163.com</span>
					</p>
				</div>
			</article>
		</section>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue'
	import { MessageBox } from 'mint-ui'
	export default{
		data(){
			return {
				name: "个人信息",
				popupVisible: false
			}
		},
		methods: {
			clickShow(){
				MessageBox.prompt('请输入信息').then(({ value, action }) => {
				  	if(!value){
				  		MessageBox('提示', '内容不能为空');
				  	}else{
				  		MessageBox('提示', '操作成功');
				  	}
				},()=>{
					MessageBox('提示', '取消成功');
				});
			},
		},
		components: { headName }
	}
</script>
<style scoped>
.my-page{
	background-color: #ffffff;
	width:100%;
	height:auto;
	position: fixed;
	top:48px;
	bottom:1px;
	overflow-y:auto;
}
.my-page .page-list{
	width:94%;
	padding:0 3%;
	height:60px;
	display: flex;
	justify-content:space-between;
	align-items:center;
	border-bottom: 1px solid #e2e2e2;
}
.my-page .page-list .page-l{
	display: flex;
	// justify-content:space-between;
	align-items:center;
}
.picture{
	border-radius: 50%;
	background:#824415;
}
.my-page .page-list img{
	width:24px;
	height:24px;
}
.my-page .page-list span{
	margin: 3px 0 0 5px;
}
.my-page .page-list input{
	border:none;
	text-align: right;
	outline: none;
	background:none;
}
::-webkit-input-placeholder { /* WebKit browsers */
	color:#ccc;
	font-size:14px;
}

</style>