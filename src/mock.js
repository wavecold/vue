// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 30; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            //author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            address:"上海市",
            state: i,
            sponsor: "清华大学",
            id: i,
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
const produceLoginData = function() {
    let artLogin = [];
    for (let i = 0; i < 100; i++) {
        let loginObject = {
                phone: "15734742257",
                pwd: "asdasd"
            }
            artLogin.push(loginObject);
        }
    return {
        artLogin: artLogin
    }
}
Mock.mock('/index/login', 'post', produceLoginData);


//组织机构
const orglistLoginData = function() {
    let orglist =[
                    {
                        name: "主办单位",
                        value: [
                                "清华大学",
                                "北京大学",
                                "南京大学"
                            ]
                    },
                    {
                        name: "协办单位",
                        value: [
                                "成都市市政府",
                                "北京体育局",
                                "农夫山泉矿泉水"
                            ]
                    },
                    {
                        name: "支持单位",
                        value: [
                                "中国重型企业协会",
                                "三星重工企业",
                                "万达公司"
                            ]
                    }
                ]   
    return {
        orglist: orglist
    }
}
Mock.mock('/index/orglist', 'post', orglistLoginData);

//活动日程
const schlistLoginData = function() {
    let schlist = [
                { 
                    content: "签到入场",
                    time: "07:00-08:45"
                },
                { 
                    content: "会前预热",
                    time: "08:00-09:45"
                },
                { 
                    content: "主题演讲",
                    time: "09:00-10:45"
                },
                { 
                    content: "参会人员自由讨论",
                    time: "10:00-12:45"
                }
            ]
    return {
        schlist: schlist
    }
}
Mock.mock('/index/schlist', 'post', schlistLoginData);

//嘉宾介绍
const guelistLoginData = function() {
    let guests = [];
    for (let i = 0; i < 4; i++) {
        let newGuestObject = {
            intro: Random.csentence(5, 300), //  Random.csentence( min, max )
            image: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            guestName: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            unit:"中国万达科技有限公司北京分部研发部总经理兼副总裁",
            duty: "清华大学教授"
        }
        guests.push(newGuestObject)
    }
    return {
        guests: guests
    }
}
Mock.mock('/index/guelist', 'get', guelistLoginData);

//嘉宾介绍
const spolistLoginData = function() {
    let sponsor = [];
    for (let i = 0; i < 1; i++) {
        let newsponsorObject = {
            address: "北京市海淀区",
            email: "165847547@qq.com", // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            phone: "15734785474", // Random.cname() 随机生成一个常见的中文姓名
            contact: Random.cname(),
            duty: "清华大学教授",
            code: "1"+i+i+"2"+1+1
        }
        sponsor.push(newsponsorObject)
    }
    return {
        sponsor: sponsor
    }
}
Mock.mock('/index/spolist', 'post', spolistLoginData);

//消息列表
const newslistLoginData = function() {
    let newsList = [];
    for (let i = 0; i < 8; i++) {
        let newnewsObject = {
            title: Random.csentence(5, 10),
            date: Random.date(),
            id: i
        }
        newsList.push(newnewsObject)
    }
    return {
        newsList: newsList
    }
}
Mock.mock('/index/newsList', 'post', newslistLoginData);

//消息详情
const newslistdetailLoginData = function() {
    let newsListDetail = [];
    for (let i = 0; i < 8; i++) {
        let newnewsDetailObject = {
            title: Random.csentence(5, 10),
            date: Random.date() + ' ' + Random.time(),
            content: Random.csentence(5, 10)
        }
        newsListDetail.push(newnewsDetailObject)
    }
    return {
        newsListDetail: newsListDetail
    }
}
Mock.mock('/index/newsListdetail', 'post', newslistdetailLoginData);

//我的
const newsNameLoginData = function() {
    let nameList = [
        { 
            name: Random.cname(),
            id: 1
        }
    ];
    return {
        nameList: nameList
    } 
}
Mock.mock('/index/nameList', 'post', newsNameLoginData);
