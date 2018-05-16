// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import vueRouter from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = true
Vue.use(vueRouter);
Vue.use(VueAwesomeSwiper)
require('swiper/dist/css/swiper.css')
require('./mock.js');

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Popup } from 'mint-ui';
import { MessageBox } from 'mint-ui';
Vue.component(Popup.name, Popup);

Vue.use(MintUI)
// 引用axios进行ajax请求
import axios from 'axios';
Vue.prototype.$ajax = axios;
//配置路由
import meeting from './components/inherit/meeting.vue'
import news from './components/inherit/news.vue'
import mine from './components/inherit/mine.vue'
import newsDetail from './components/meet/newsDetail.vue'
import login from './components/login/login.vue'
import guest from './components/sudoku/guest.vue'
import invitation from './components/sudoku/invitation.vue'
import organization from './components/sudoku/organization.vue'
import schedule from './components/sudoku/schedule.vue'
import sponsor from './components/sudoku/sponsor.vue'

import activityInfo from './components/navigation/activityInfo.vue'
import aircraft from './components/navigation/aircraft.vue'
import applyInfo from './components/navigation/applyInfo.vue'
import discussion from './components/navigation/discussion.vue'
import hotel from './components/navigation/hotel.vue'

//我的页面
import cardbag from './components/myInfo/cardbag.vue'
import help from './components/myInfo/help.vue'
import invoice from './components/myInfo/invoice.vue'
import opinion from './components/myInfo/opinion.vue'
import password from './components/myInfo/password.vue'
import person from './components/myInfo/person.vue'

//消息页面
import newsdetail from './components/newsList/newsDetail.vue'
var router = new vueRouter({
	routes: [
		{name: 'root', path: '', redirect: '/login'},
		{ path: '/login', component: login },
		{ name:"meeting", path: '/meeting', component: meeting },
		{ path: '/news', component: news },
		{ path: '/mine', component: mine },
		{ name: 'newsDetail', path: '/meeting/newsDetail/:actId', component: newsDetail },
		{ name: 'guest', path: '/meeting/newsDetail/guest/:actId', component: guest },
		{ name: 'invitation', path: '/meeting/newsDetail/invitation/:actId', component: invitation },
		{ name: 'organization', path: '/meeting/newsDetail/organization/:actId', component: organization },
		{ name: 'schedule', path: '/meeting/newsDetail/schedule/:actId', component: schedule },
		{ name: 'sponsor', path: '/meeting/newsDetail/sponsor/:actId', component: sponsor },
		{ name: 'activityInfo', path: '/meeting/newsDetail/activityInfo/:actId', component: activityInfo },
		{ name: 'aircraft', path: '/meeting/newsDetail/aircraft/:actId', component: aircraft },
		{ name: 'applyInfo', path: '/meeting/newsDetail/applyInfo/:actId', component: applyInfo },
		{ name: 'discussion', path: '/meeting/newsDetail/discussion/:actId', component: discussion },
		{ name: 'hotel', path: '/meeting/newsDetail/hotel/:actId', component: hotel },
		{ name: 'newsdetail', path: '/news/newsdetail/:actId/:title', component: newsdetail },
		{ name: 'cardbag', path: '/mine/cardbag/:actId/', component: cardbag },
		{ name: 'help', path: '/mine/help/:actId/', component: help },
		{ name: 'invoice', path: '/mine/invoice/:actId/', component: invoice },
		{ name: 'opinion', path: '/mine/opinion/:actId/', component: opinion },
		{ name: 'password', path: '/mine/password/:actId/', component: password },
		{ name: 'person', path: '/mine/person/:actId/', component: person },
	]
})


import '../static/css/style.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
