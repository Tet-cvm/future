<template>
    <div class="record">
        <div class="appTop">
        <div class="taxHead flex-column">
            <span>爱税筹<em>I-TAX</em></span>
            <span>给您一个爱税筹的理由<em>FREE YOUR TAX</em></span>
        </div>
        <div class="taxTab flex-row">
            <div class="flex" v-for="item in items" v-bind:key="item.id">
            <div class="taxItem" @click="tabBar(item.id)">{{ item.name }}</div>
            </div>
        </div>
        <div class="taxScroll">
            <span></span>
        </div>
        </div>
        <div class="appScroll">
        <!--【1】-->
        <div class="taxAbout coord">
            <div class="taxTitle">爱税筹简介</div>
            <div class="taxContent">爱税筹为明动咨询旗下专业的财税筹划品牌。明动咨询，成立于2013年10月18日,专注于自贸试验区、类金融行业、TMT行业（电信、媒体和科技）及其他新兴行业的企业服务。</div>
            <div class="taxContent">我们的使命是“研究并提供企业需要的服务，帮助企业实现更大的经济效益”</div>
        </div>
        <!--【2】-->
        <div class="taxRoom coord">
            <div class="roomTitle">税收小课堂</div>
            <div class="taxTable flex-wrap">
            <div v-for="room in room" v-bind:key="room">
                <span>{{ room }}</span>
            </div>
            </div>
            <div class="roomTitle">解决方案</div>
            <div class="taxTable flex-wrap">
            <div v-for="itax in Itax" v-bind:key="itax">
                <span>{{ itax }}</span>
            </div>
            </div>        
        </div>
        <!--【3】-->
        <div class="taxProcuct coord">
            <div class="taxTitle procuct">产品介绍</div>
            <div class="taxAccordion">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiperItem">
                        <div class="typeName1">爱税筹 A</div>
                        <div class="typeCondition">年度开票金额36万以下</div>
                        <div class="typeCoin">
                        <span>付费形式：</span>
                        <span>1.后付费</span>
                        <span>2.押金+服务费</span>
                        <span>3.押金：3600</span>
                        </div>
                        <div class="typeCoin">
                        <span>服务项目：</span>
                        <span>开立爱税筹站点</span>
                        <span>提供每年的代理记账服务</span>
                        <span>开票服务</span>
                        <span>年度企业公示和汇算清缴</span>
                        <span>注销业务</span>
                        </div>
                        <div class="typeBot flex-row">
                        <span class="flex" style="border-right:none;">服务费率3%</span>
                        <span class="flex"></span>
                        </div>
                    </div>
                    <div class="swiper-slide swiperItem">
                        <div class="typeName2">爱税筹 B</div>
                        <div class="typeCondition">年度开票金额500万以下</div>
                        <div class="typeCoin">
                        <span>付费形式：</span>
                        <span>1.后付费</span>
                        <span>2.押金+服务费</span>
                        <span>3.押金：8000</span>
                        </div>
                        <div class="typeCoin">
                        <span>服务项目：</span>
                        <span>开立爱税筹站点</span>
                        <span>提供每年的代理记账服务</span>
                        <span>开票服务</span>
                        <span>年度企业公示和汇算清缴</span>
                        <span>代缴税款（可选）</span>
                        <span>注销业务</span>
                        </div>
                        <div class="typeBot flex-row">
                        <span class="flex">综合税率6.5%</span>
                        <span class="flex">服务税率1%</span>
                        </div>
                    </div>
                    <div class="swiper-slide swiperItem">
                        <div class="typeName3">爱税筹 C</div>
                        <div class="typeCondition">年度开票金额没有上线</div>
                        <div class="typeCoin">
                        <span>付费形式：</span>
                        <span>1.后付费</span>
                        <span>2.押金+服务费</span>
                        <span>3.押金：24000</span>
                        </div>
                        <div class="typeCoin">
                        <span>服务项目：</span>
                        <span>开立爱税筹站点</span>
                        <span>提供每年的代理记账服务</span>
                        <span>开票服务</span>
                        <span>年度企业公示和汇算清缴</span>
                        <span>代缴税款（可选）</span>
                        <span>注销业务</span>
                        </div>
                        <div class="typeBot flex-row">
                        <span class="flex">综合税率9.5%</span>
                        <span class="flex">服务税率1%</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!--【4】-->
        <div class="taxAbout coord">
            <div class="taxTitle">服务流程</div>
            <div class="taxPath flex-column" v-for="taxpath in taxPath" v-bind:key="taxpath.id">
            <div class="flex-row">
                <span>{{ taxpath.id }}、</span>
                <span>{{ taxpath.name }}</span>
            </div>
            </div>
        </div>
        <!--【5】-->
        <div class="taxSite coord">
            <div class="taxTitle">税源地</div>
            <div class="taxMap">
            <div>
                <span style="background:#b10006;"></span>
                <span>华东</span>
            </div>
            <div>
                <span style="background:#fed487;"></span>
                <span>华中</span>
            </div>
            <div>
                <span style="background:#f9ae85;"></span>
                <span>华南</span>
            </div>
            <div>
                <span style="background:#b10006;"></span>
                <span>西南</span>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import '@/assets/mobile/css/tax.css'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'tax',
  data(){
    return {
      items: [
        { id: 0, name: '税收小课堂' },
        { id: 1, name: '解决方案' },
        { id: 2, name: '产品介绍' },
        { id: 3, name: '服务流程' },
        { id: 4, name: '税源地' }
      ],
      room: ['您的收入','老实纳税','年薪30万','工薪薪金所得6.3万','公司分红100万','股息红利所得20万','顾问兼职收入30万','劳务报酬所得6万','企业净利润100万','企业所得税25万','有限合伙投资收益200万','五级超额累进税率68.5万'],
      Itax: ['老实纳税','爱税筹筹划后','工薪薪金所得6.3万','0.6万（节省90%）','股息红利所得20万','2万（节省90%）','劳务报酬所得6万','0.22万（节省96%）','企业所得税25万','2万（节省92%）','五级超额累进税率68.5万','5.3万（节省92%）'],
      taxPath: [
        { id: 1, name: '专属方案制定（方案制定1-2个工作日完成）' },
        { id: 2, name: '合同签订' },
        { id: 3, name: '资料对接（资料收集2-3个工作日完成）' },
        { id: 4, name: '开立爱税筹站点' },
        { id: 5, name: '爱税筹业务服务（爱税筹业务服务按需求反馈来）' },
        { id: 6, name: '爱税筹业务处理（爱税筹业务处理2-3个工作日完成）' },
        { id: 7, name: '完税、结算（完税、结算、付款、付款2-3个工作日完成）' }
      ]
    }
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
        loop : true,
        initialSlide : 1,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
    //监听滚动
    window.onscroll = ()=>{
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop > 120){
        this.showLine(1.5);
        if(scrollTop > 650){
          this.showLine(3);
          if(scrollTop > 1000){
            this.showLine(4.5);
            if(scrollTop > 1440){
              this.showLine(6);
            }else{
              this.showLine(4.5);
            }
          }else{
            this.showLine(3);
          }
        }else{
          this.showLine(1.5);
        }
      }else{
        this.showLine(0);
      }
    }
  },
  methods: {
    tabBar(id){
      let tabBot = document.getElementsByClassName('taxScroll')[0].firstChild;
      let tabWidth = 1.5;
      let tabHide = setInterval(()=>{
        tabWidth -= 0.12;
        tabBot.style.width = tabWidth + 'rem';
        if(tabWidth < 0){
          clearInterval(tabHide);
          tabWidth = 0;
          tabBot.style.width = '0rem';
          //show
          tabBot.style.marginLeft = id*1.5 + 'rem';
          let tabShow = setInterval(()=>{
            tabWidth += 0.12;
            tabBot.style.width = tabWidth + 'rem';
            if(tabWidth > 1.4){
              clearInterval(tabShow);
              tabWidth = 1.5;
              tabBot.style.width = tabWidth + 'rem';
              //scroll
              let orginCoord = document.getElementsByClassName('appScroll')[0].offsetTop;
              let coord = document.getElementsByClassName('coord')[parseInt(id)].offsetTop;
              window.scrollTo(0, coord-orginCoord-119);
            }
          }, 18);
        }
      }, 12);
    },
    showLine(num){
      let tabBot = document.getElementsByClassName('taxScroll')[0].firstChild;
      tabBot.style.marginLeft = num + 'rem';
    }
  }
}
</script>

<style scoped lang="less">
.tax {background-color: #ffffff;}
@titleColor: #383838;
@contentColor:#5c5c5c;
@lineColor: #e5e5e5;
.appTop{position:fixed;top:0;left:0;width:100%;height:2.19rem;z-index:999;}
.taxHead{padding:0 0.28rem;width:7.5rem;height:1.32rem;background:#b10006;}
.taxHead span{font-size:0.3rem;color:#ffffff;}
.taxHead span:first-child{padding:0.2rem 0 0.1rem 0;font-size:0.34rem;}
.taxHead span:last-child{margin:0 0 0 0.6rem;}
.taxHead span em{margin:0 0 0 0.14rem;font-size:0.24rem;color:#ffffff;}
.taxTab{max-width:7.5rem;width:100%;background:#ffffff;}
.taxItem{padding:0.22rem 0;font-size:0.3rem;color:@titleColor;}
.flex:first-child .taxItem{letter-spacing:-1px;}
.taxScroll{max-width:7.5rem;width:100%;height:2px;background:#ffffff;border-bottom:0.18rem solid @lineColor;}
.taxScroll span{display:block;width:1.5rem;height:2px;background:red;}

.appScroll{padding:2.38rem 0 0 0;width:100%;height:auto;background:url('../assets/mobile/img/logo.png') no-repeat;background-size:3.5rem 0.9rem;background-position:center top;z-index:666;}
.taxAbout{padding:0 0.28rem 0.2rem 0.28rem;width:6.94rem;border-bottom:2px solid @lineColor;}
.taxTitle{padding:0.28rem 0;font-size:0.34rem;color:@titleColor;}
.taxTitle:after{content:'';position:absolute;left:0.28rem;margin:0.6rem 0 0 0;width:6.9rem;height:1px;background:@lineColor;}
.taxContent{font-size:0.3rem;color:@contentColor;text-indent:0.3rem;}

.taxRoom{padding:0 0.28rem 0.28rem 0.28rem;width:6.94rem;border-bottom:2px solid @lineColor;}
.roomTitle{padding:0.3rem 0;font-size:0.34rem;text-align:center;}
.taxTable{width:6.9rem;}
.taxTable div{display:inline-block;padding:0.18rem 0;width:3.4rem;border:1px solid #ffffff;background:#8cc63f;}
.taxTable div:nth-child(2n-1){background:#646871;}
.taxTable div span{position:relative;margin:0 0 0 0.14rem;font-size:0.29rem;color:@titleColor;z-index:888;}
.taxTable div:nth-child(1), .taxTable div:nth-child(2){padding:0.22rem 0;border-top-left-radius:5px;border-top-right-radius:8px;}
.taxTable div:nth-child(11), .taxTable div:nth-child(12){border-bottom-left-radius:5px;border-bottom-right-radius:5px;}
.taxTable div:nth-child(1):before, .taxTable div:nth-child(2):before{content:'';position:absolute;margin:-0.33rem 0 0 0;width:3.45rem;height:0.8rem;background:url('../assets/mobile/img/table.png') no-repeat;background-size:3.2rem 0.74rem;background-position:center top;z-index:777;}
.taxTable div:nth-child(1) span, .taxTable div:nth-child(2) span{display:flex;display:-webkit-flex;justify-content:center;-webkit-justify-content:center;align-content:center;-webkit-align-content:center;margin:0px;line-height:0.26rem;}
.taxTable div:nth-child(11) span, .taxTable div:nth-child(12) span{letter-spacing:-1px;}

.taxProcuct{width:7.5rem;border-bottom:2px solid @lineColor;}
.procuct{padding:0.28rem 0.28rem 0.2rem 0.28rem;width:6.94rem;font-size:0.34rem;}
.taxAccordion{width:7.5rem;overflow-x:hidden;}

.swiper-container {width:100%;padding:0.3rem 0;}
.swiper-slide {background-position:center;background-size:cover;width:5.4rem;}
.swiperItem{text-indent:0.2rem;background:#ffffff;margin-left:-1px;box-shadow:0 0 18px rgba(0,0,0,.2);border-radius:3px;}
.typeName1, .typeName2, .typeName3{padding:0.12rem;text-indent:0.12rem;font-size:0.34rem;color:#ffffff;border-top-left-radius:3px;border-top-right-radius:3px;}
.typeName1{background:#fbb03b;}
.typeName2{background:#c1272d;}
.typeName3{background:#8cc63f;}
.typeCondition{padding:0.18rem 0 0.1rem 0;}
.typeCoin span{display:block;}
.typeCoin span:not(:first-child){text-indent:0.6rem;color:@contentColor;}
.typeBot{margin:0.16rem 0 0 0;padding:0.18rem 0;border-top:1px solid @lineColor;}
.typeBot span:first-child{border-right:1px solid @lineColor;}
.taxPath div{padding:0.06rem 0;}
.taxPath div span{color:@contentColor;}

.taxSite{padding:0 0.28rem 0.2rem 0.28rem;width:6.94rem;}
.taxMap{margin:0 auto;width:6.5rem;height:5.53rem;background:url(../assets/mobile/img/map.png) no-repeat;background-size:100% 100%;background-position:center center;}
.taxMap div:first-child{padding-top:4rem;}
.taxMap div span{font-size:0.28rem;}
.taxMap div span:first-child{display:inline-block;display:-webkit-inline-block;width:0.5rem;height:0.3rem;}
.taxMap div span:last-child{color:@contentColor;}
</style>