<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<div class="guestBox">
    		<div class="conBox">
                <div class="contain">
                    <div class="data">2017年10月19日</div>
                    <div class="schedule clearfix" v-for="item in schlist">
                        <span class="time">{{ item.time }}</span>
                        <span class="content">
                            <div class="distance">{{ item.content }}</div>
                        </span>
                    </div>
                </div>
    		</div>
        </div>
	</div>
</template>
<script type="text/javascript">
	import headName from '../common/head.vue'
	export default{
		data(){
			return {
				name: "活动日程",
                schlist: []
			}
		},
        created(){
            this.getSchMessage();
        },
		components:{ headName },
        methods: {
            getSchMessage(){
                this.$ajax.post('/index/schlist').then(res=>{
                    console.log(res)
                    this.schlist = res.data.schlist
                },res=>{
                    console.log("请求失败")
                })
            }
        }
	}
</script>
<style scoped>
    .conBox{
        margin-top: 48px;
    }
	.contain{
        margin-bottom: 20px;
		padding: 15px;
		/*background-color: #fff;*/
	}
	.invitation{
    	margin-bottom: 20px;
    	margin-top: 20px;
    	text-align: center;
    }
    .schedule{
    	/*margin-top: 20px;*/
    	background-color: #ffffff;
    	padding: 6px 10px;
    	/*border:1px solid red;*/
    }
    .data{
    	margin-bottom: 21px;
    	/*color: #ffad30;*/
    	/*background-color: #ffffff;*/
    	text-align: center;
    	font-size: 16px;
    }
    .time, .content{
    	float: left;
    	vertical-align: top;
    }
    .time{
    	width: 30%;
    	margin-right: 5%;
    	color: #f9752b;
    }
    .distance{
        margin-top: 10px;
    }
    .content{
    	width: 65%;
    	/*line-height: 21px;*/
    }
    .flight{
    	font-weight: 600;
        /*margin-bottom: 5px;*/
    }
</style>