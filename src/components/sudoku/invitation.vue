<template>
	<div class="temp">
		<headName :headName="name"></headName>
		<swiper :options="swiperOption" ref="mySwiper">
		    <swiper-slide class="first-screen">
		    	<div class="midContent">
                    <div class="firstInvi">
                        <div class="initTitle liebetween">
                            <h5 class="homeTitle"></h5>
                        </div>
                        <div class="liebetween">
                            <span>会议主题:</span><span class="homeTheme">一带一路重塑产业社会一带一路重塑产业社会</span>
                        </div>
                        <div class="liebetween inviTime">
                            <span>会议时间:</span><span class="homeTime">x月x日</span>
                        </div>
                        <div class="liebetween">
                            <span>会议地点:</span><span class="homeLocation">北京市</span>
                        </div>
                    </div>
                </div>
		    </swiper-slide>
		    <swiper-slide class="swiper-slide secont-screen">
                <div class="swiper-button-prev swiper-button-white switcher"></div>
                <div class="swiper-button-next swiper-button-white switcher"></div>
                <div class="posBox">
                    <h1 class="haeremai">欢迎辞</h1>
                    <div class="articleBox">
                    	<p class="article"></p>
                    </div>
                </div>
            </swiper-slide>
		    <swiper-slide class="swiper-slide three-screen">
                <div class="swiper-button-prev swiper-button-white switcher"></div>
                <div class="swiper-button-next swiper-button-white switcher"></div>
                <div class="posBox">
                    <h1 class="haeremai">组织机构</h1>
                    <div id="institution">
                        <div class="institution">
                            <h2 class="sponsor">主办方</h2>
                            <div>
                                <div>中国软件行业协会</div>
                                <div>中国膜工业协会</div>
                                <div>中国民营科技实业家协会</div>
                                <div>中国软件行业协会</div>
                                <div>中国软件行业协会</div>
                                <div>中国软件行业协会</div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
		    <swiper-slide class="swiper-slide four-screen"> 
                <div class="swiper-button-prev swiper-button-white switcher"></div>
                <div class="swiper-button-next swiper-button-white switcher"></div>
                <div class="posBox">
                    <h1 class="haeremai">活动日程</h1>
                	<div class="conBox">
                        <div class="data">2017年10月19日</div>
                        <div class="schedule">
                            <span class="time">80:00-90:00</span>
                            <span class="content">
                                <div class="distance flight">领导与嘉宾发言领导与嘉宾打算发言领导与嘉宾发言领导与嘉宾发言领导与嘉宾发言</div>
                                <div class="distance">领导与嘉宾发言</div>
                                <div class="distance">领导与嘉宾发言</div>
                            </span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
		    <swiper-slide class="swiper-slide five-screen">
                <div class="swiper-button-prev swiper-button-white switcher"></div>
                <div class="swiper-button-next swiper-button-white switcher"></div>
                <div class="posBox">
                    <h1 class="haeremai">嘉宾介绍</h1>
                    <div id="guest">
                        <div class="honoredGuest">
                            <span class="guestImg"><img src="../../../static/img/invaImg.png"></span>
                            <span class="gusetIntro">
                                <div class="name">姚飞</div>
                                <div class="intro">家发改委领导国家发改委领导
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
		    <swiper-slide class="swiper-slide six-screen">
                <div class="swiper-button-prev swiper-button-white switcher"></div>
                <div class="swiper-button-next swiper-button-white switcher"></div>
                <div class="QRcode">
                    <a class="apply" href="">立即报名</a>
                    <div class="code">
                        <img src="../../../static/img/QRcode.png">   
                    </div>
                    <div class="onesweep">微信扫一扫&nbsp;关注更多</div>
                    <div class="specially">盛情特邀您出席</div>
                </div>
            </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		  <!--   <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div> -->
		    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  		</swiper>
	</div>
</template>
<style scoped>
	@import '../../../static/css/invitation.css';
</style>
<script type="text/javascript">
	// import '../../../static/css/invitation.css';
	import headName from '../common/head.vue';
	export default{
		data(){
			return {
				name: "邀请函",
				swiperOption: {
					// notNextTick: true,
					// swiper configs 所有的配置同swiper官方api配置
					// autoplay: 3000,
					// autoHeight: 800,
					// direction : 'vertical',
					// grabCursor : true,
					// setWrapperSize :true,
					autoHeight: true,
					// pagination : '.swiper-pagination',
					// paginationClickable :true,
					prevButton:'.swiper-button-prev',//上一张
					nextButton:'.swiper-button-next',//下一张
					//scrollbar:'.swiper-scrollbar',//滚动条
					// mousewheelControl : true,
					// observeParents:true,
					// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
					debugger: true,
				}
			}
		},
		components: { headName }
	}
</script>
