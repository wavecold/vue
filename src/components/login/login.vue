<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="contain">
			<div class="img">
				<img src="../../../static/img/login.png">
			</div>
			<div class="content">
				<div class="ContentUser">
					<span class="image"><img src="../../../static/img/user-icon.png"></span>
					<span class="username" ref="username">用户名&nbsp;:</span>
					<input type="text" maxlength="11" placeholder="请输入手机号" class="user" name="mobile" ref="user" v-model="user"/>
				</div>
				<div class="Contentpwd">
					<span><img src="../../../static/img/password-icon.png"></span>
					<span class="cryptogram">密码&nbsp;:</span>
					<input type="password" maxlength="16" placeholder="请输入密码" class="password" name="pwd" ref="password" v-model="password"/>
				</div>
				<div class="clickBUtton">
					<div>
						<button id="login" @click="getLogin()">登录</button>
					</div>
					<div class="skipLink">
						<a href="forget.html" class="forget">忘记密码?</a>
						<a href="register.html" class="register">立即注册</a>
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
			return {
				name: "登录"
			}
		},
		methods: {
			getLogin(){
				// this.result1 = this.$refs.input1.value
				let user = this.user
				let	password = this.password
				console.log(user);
				console.log(password);
				this.$ajax.post('/index/login',{mobile:user,pwd:password}).then(res=>{
						this.$router.push({
							name: 'meeting'
						})
				}, res=>{
					alert(222)
				})
			}
		},
		components:{ headName }
	}
</script>
<style scoped>
body,html{
	background-color: #fff;
}
#app{
	background-color: #fff;
}
input{
	border-left:0px;
	border-top:0px;
	border-right:0px;
	border-bottom:0px; 
	outline:none;
}

/*顶部图片*/
.img img{
	width: 100%;
}
/**/

/**/
.content{
	padding: 8%;
}
.ContentUser, .Contentpwd{
	border-bottom: 1px solid #ccc;
	padding-bottom: 5px;
}
.Contentpwd{
	margin-top: 20px;
}
.ContentUser img, .Contentpwd img{
	width: 14px;
	vertical-align: middle;
}
.username, .cryptogram{
	margin-left: 5px;
	font-weight: 600;
}

.clickBUtton{
	margin-top: 40px;
}

#login{
	width: 100%;
	background-color: #f9752b;
	border: 1px solid #f9752b;
	height: 40px;
	border-radius: 50px;
	color: #fff;
}
.button a{
	text-decoration: none;
}
.skipLink{
	margin-top: 10px;
}
.skipLink a{
	color: #7a7a7a;
	float: left;
}
.skipLink .register{
	float: right;
}

</style>