<template>
    <div class="record">
        <template v-if="loadSuccess">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="5">
                        <img class="logo" :src=" showType[0]=='0' ? require('@/assets/window/img/mdLogo.jpg') : require('@/assets/window/img/ntLogo.jpg')" alt="">
                    </el-col>
                    <el-col :span="15">
                        <!--【head】-->
                        <div class="head">
                            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                                <el-menu-item v-for="item in menuItem" v-bind:key="item.id" :index="item.id" @click="onRoute(item.route)">{{ item.name }}</el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="phone">
                            <i class="el-icon-phone"></i>
                            <span>Tel: 400-888-7899</span>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <!--【banner】-->
                <div class="banner">
                    <template>
                        <el-carousel :interval="5000" arrow="always">
                            <el-carousel-item v-for="item in banner" :key="item.id">
                                <img :src="item.img" alt=""/>
                            </el-carousel-item>
                        </el-carousel>
                    </template>
                </div>
                <!--【introduce】-->
                <div class="introduce">
                    <h4>公司简介</h4>
                    <div v-html="showIntro"></div>
                </div>
            </el-main>
            <el-footer>
                <!--【footer】-->
                <div class="footer">
                    <div class="foot">
                        <span>© 2019-2022 {{ showCompany }} 版权所有:</span>
                        <a href="www.miitbeian.gov.cn" target="_black"> {{ showIcp }}</a>
                    </div>
                </div>
            </el-footer>
        </el-container>
        </template>
    </div>
</template>

<script>
import Vue from 'vue'
import { Container, Header, Main, Footer, Row, Col, Menu,  MenuItem, Carousel, CarouselItem, Message} from 'element-ui'
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Footer.name, Footer)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Message.name, Message)
import '@/assets/window/css/rcord.css'
import axios from 'axios'
export default {
    name: "record",
    data() {
        return {
            loadSuccess: false,
            activeIndex: '6',
            menuItem: [
                {id: '1', name: '自贸区公司注册', route: 'http://mdtzzx.cn/'},
                {id: '2', name: '金融服务', route: 'http://mdtzzx.cn/'},
                {id: '3', name: '专项审批', route: 'http://mdtzzx.cn/'},
                {id: '4', name: '财税咨询', route: 'http://mdtzzx.cn/'},
                {id: '5', name: '政策解读', route: 'http://mdtzzx.cn/'},
                {id: '6', name: '关于我们', route: 'http://mdtzzx.cn/'}
            ],
            banner: [
                {id: 1, img: require('@/assets/window/img/ban.jpg')},
                {id: 2, img: require('@/assets/window/img/ban.jpg')}
            ],
            MessageStatus: true,
            showType: Array,
            showIntro: '',
            showCompany: '',
            showIcp: ''
        }
    },
    created() {
        let that = this;
        axios.post('https://mdqygl.cn/index.php/home/record', {
            headers: {
                referer: 'https://mdqygl.cn',
                host: 'mdqygl.cn'
            }
        }, {})
        .then(function(res) {
            if (res.data.status) {
                let uri = location.hostname;
                if (uri.search('www') == 0) {
                    uri = uri.slice(4, uri.lenght);
                }

                that.showType = res.data.data[uri].split('-');
                //赋值
                switch(that.showType[1])
                {
                    case '1':
                        that.showIntro = '<p>明动企业管理（上海）有限公司（下称明动咨询）由原诺唐投资咨询（上海）有限公司根据发展需要，品牌升级而来。明动咨询是第一批入驻上海自贸区的咨询行业公司，成立于2013年10月18日，主要服务于中国（上海）自由贸易试验区的招商引资、客户运营咨询，资产管理、投资管理、融资租赁、商业保理以及其他类金融行业咨询服务。</p><p>基于自贸区的整体方案及进一步深化改革的方案，自贸区将从原来传统的货物贸易，服务贸易、离岸贸易等新型业态方向发展，此次转变就包括跨境的维修、国际的检测、信息服务、离岸服务外包等内容。同时，依托上海“五个中心”的建设，明动投资咨询将以“尊重客户、服务客户、追求卓越”为核心竞争力，为国内外机构及个人精准对接中国自由贸易区。</p>';
                      break;
                    case '2':
                        that.showIntro = '<p>明动投资咨询（深圳）有限公司（下称明动咨询）由原诺唐投资咨询（上海）有限公司根据发展需要，品牌升级而来。明动咨询是第一批入驻上海自贸区的咨询行业公司，成立于2013年10月18日，主要服务于中国（上海）自由贸易试验区的招商引资、客户运营咨询，资产管理、投资管理、融资租赁、商业保理以及其他类金融行业咨询服务。</p><p>基于自贸区的整体方案及进一步深化改革的方案，自贸区将从原来传统的货物贸易，服务贸易、离岸贸易等新型业态方向发展，此次转变就包括跨境的维修、国际的检测、信息服务、离岸服务外包等内容。同时，依托上海“五个中心”的建设，明动投资咨询将以“尊重客户、服务客户、追求卓越”为核心竞争力，为国内外机构及个人精准对接中国自由贸易区。</p>';
                        break;
                    case '3':
                        that.showIntro = '<p>诺唐投资咨询（上海）有限公司是明动投资（上海）有限公司的子公司，经深圳市市场监督管理局及前海管理局批准入驻广东自由贸易试验区深圳前海蛇口片区，是一家专业从事前海企业高端咨询服务的企业，公司以专业的行业视角和真诚的服务态度为企业提供入驻前海的解决方案，为客户提供最为规范和快捷的企业注册登记服务，为客户提供最前端的前海政策解读以帮助其抓住先行的优势，为客户量身制定集团化的发展方案和前海总部方案，为企业提供安全可操作的高端投融资服务和为客户提供专业的财税建议和法律援助等。<p>';
                        break;
                    case '4':
                        that.showIntro = '<p>明动投资（上海）有限公司（下称明动咨询）由原诺唐投资咨询（上海）有限公司根据发展需要，品牌升级而来。明动咨询是第一批入驻上海自贸区的咨询行业公司，成立于2013年10月18日，主要服务于中国（上海）自由贸易试验区的招商引资、客户运营咨询，资产管理、投资管理、融资租赁、商业保理以及其他类金融行业咨询服务。</p><p>基于自贸区的整体方案及进一步深化改革的方案，自贸区将从原来传统的货物贸易，服务贸易、离岸贸易等新型业态方向发展，此次转变就包括跨境的维修、国际的检测、信息服务、离岸服务外包等内容。同时，依托上海“五个中心”的建设，明动投资咨询将以“尊重客户、服务客户、追求卓越”为核心竞争力，为国内外机构及个人精准对接中国自由贸易区。</p>';
                        break;
                }
                //公司名称
                switch(that.showType[2])
                {
                    case '1':
                        that.showCompany = '明动企业管理（上海）有限公司';
                      break;
                    case '2':
                        that.showCompany = '明动投资咨询（深圳）有限公司';
                        break;
                    case '3':
                        that.showCompany = '诺唐投资咨询（上海）有限公司';
                        break;
                    case '4':
                        that.showCompany = '明动投资（上海）有限公司 ';
                        break;
                }
                //备案号
                switch(that.showType[3])
                {
                    case '1':
                        that.showIcp = '沪ICP备17000006号'; //上海明动
                      break;
                    case '2':
                        that.showIcp = '沪ICP备16016173号'; //上海明动
                        break;
                    case '3':
                        that.showIcp = '沪ICP备14004441号'; //上海诺唐
                        break;
                    case '4':
                        that.showIcp = '粤ICP备16043262号'; //深圳明动
                        break;
                }

                that.loadSuccess = true;
            } else {
                that.onTips('error', ' 网络错误～');
            }
        })
        .catch(function(err) {
            that.onTips('error', ' 网络错误～');
        })
    },
    methods: {
        onRoute: function(path) {
            location.href = path;
        },
        onTips: function(error, text) {
        let that = this;
        if (that.MessageStatus) {
            that.MessageStatus = false;
            let Msg = Message({
                type: error,
                center: true,
                duration: 2500,
                showClose: false,
                dangerouslyUseHTMLString: true,
                message: text
            });

            setTimeout(function(){
                that.MessageStatus = true;
                Msg.close();
            }, 2500);
        }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.record {
    height: 100vh;
}
.banner img {
    width: 100%;
    height: 100%;
}
.introduce {
    margin: 24px auto;
    width: 88%;
}
.introduce h4 {
    font-weight: normal;
    font-size: 20px;
    color: #666666;
}
.introduce div {
    margin: 5px 0 0 0;
    text-indent: 22px;
    font-size: 17px;
    color: #666666;
    line-height: 32px;
}
.footer {
    color: #dbdbdb;
}
.foot {
    margin: 22px 0 0 46px;
}
.footer a {
    color: #dbdbdb;
}
.phone {
    margin: 22px 0 0 0;
}
.phone i,  {
    font-size: 20px;
    color: #bb1b23;
}
.phone span {
    display: inline-block;
    margin: 0 6px;
    color: #333333;
}
.logo {
    margin: 4px auto;
    display: block;
    width: 150px;
    height: auto;
    text-align: center;
}
</style>

