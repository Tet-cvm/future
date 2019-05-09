<template>
    <div class="duty">
        <el-container>
        <el-header>
            <el-row>
            <el-col :span="2"><div class="grid-content"></div></el-col>
            <el-col :span="4">
                <div class="grid-content taxLogo">
                <a href="http://www.mdtzzx.cn/"><img src="../assets/window/img/logo.jpg" alt="" /></a>
                </div>
            </el-col>
            <el-col :span="15">
                <div class="grid-content">
                <el-menu theme="light" default-active="1" class="el-menu-demo" mode="horizontal" :router="false">
                    <el-menu-item index="1"><a href="http://www.mdtzzx.cn/">网站首页</a></el-menu-item>
                    <el-menu-item index="2"><a href="http://www.mdtzzx.cn/html/regist/">自贸区注册</a></el-menu-item>
                    <el-menu-item index="3"><a href="http://www.mdtzzx.cn/fin/fin.html">类金融服务</a></el-menu-item>
                    <el-menu-item index="4"><a href="http://www.mdtzzx.cn/html/appro/">专项审批</a></el-menu-item>
                    <el-menu-item index="5"><a href="http://www.mdtzzx.cn/html/tax/">财务代理</a></el-menu-item>
                    <el-menu-item index="6"><a href="http://www.mdtzzx.cn/zstrade/pcnav.html">财务扶持</a></el-menu-item>
                    <el-menu-item index="7"><a href="http://www.mdtzzx.cn/html/about/">关于我们</a></el-menu-item>
                </el-menu>
                </div>
            </el-col>
            <el-col :span="3"><div class="grid-content taxPhone">400-888-7899</div></el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row type="flex" class="row-bg taxBan" justify="center">
            <el-col :span="9">
                <div class="grid-content banLeft">
                <img src="../assets/window/img/taxBan01.png" alt="" />
                </div>
            </el-col>
            <el-col :span="9">
                <div class="grid-content">
                <el-row type="flex" justify="center">
                    <el-col :span="16" class="row-bg">
                    <!-- <el-col :span="16" class="row-bg banForm"> -->
                    <div class="grid-content banRight"></div>
                    <!-- <div class="grid-content" style="background:#ffffff;">
                        <h5>爱税筹预约</h5>
                        <el-row type="flex" class="row-bg taxBox" justify="row-bg">
                        <el-col :span="22">
                            <div class="grid-content">
                            <el-form ref="form" label-width="80px">
                                <el-form-item label="手机号码">
                                <el-input v-model="Phone" type="number" id="phone" suffix-icon="el-icon-mobile-phone" placeholder="请输入手机号"></el-input>
                                </el-form-item>
                                <el-form-item label="公司名称">
                                <el-input v-model="Name" type="text" id="name" suffix-icon="el-icon-edit-outline" placeholder="请输入公司名称"></el-input>
                                </el-form-item>
                                <el-form-item>
                                <el-button type="success" :loading="false" @click="onSubmit">立即预约</el-button>
                                </el-form-item>
                            </el-form>
                            </div>
                        </el-col>
                        </el-row>
                    </div> -->
                    </el-col>
                </el-row>
                </div>
            </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="18">
                <div class="grid-content taxCoin">
                <img src="../assets/window/img/taxCoin.png" alt="">
                </div>
            </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="18">
                <div class="grid-content taxLine">
                <el-row>
                    <el-col :span="12">
                    <div class="grid-content taxBgLine">背景分析<i class="el-icon-caret-bottom"></i></div>
                    </el-col>
                    <el-col :span="12">
                    <div class="grid-content taxBgLine">爱税筹简介<i class="el-icon-caret-bottom"></i></div>
                    </el-col>
                </el-row>
                </div>
            </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="9">
                <div class="grid-content">
                <el-row>
                    <el-col :span="3">
                    <div class="grid-content">
                        <div style="margin:15px auto 0 auto;height:112px;width:30px;">
                        <el-steps direction="vertical">
                            <el-step title=""></el-step>
                            <el-step title=""></el-step>
                            <el-step title=""></el-step>
                        </el-steps>
                        </div>
                    </div>
                    </el-col>
                    <el-col :span="20">
                    <div class="grid-content taxBackground">
                        <p>国内经济发展放缓，国际贸易形势逾趋复杂，企业开源不易；</p>
                        <p>相较于发达国家，我国企业税负较重；</p>
                        <p>金税三期后，企业违规避税的成本上升；</p>
                    </div>
                    </el-col>
                </el-row>
                </div>
            </el-col>
            <el-col :span="9">
                <div class="grid-content taxIntroduce">
                <p>爱税筹为明动咨询旗下专业的财税筹划品牌。明动咨询，成立于2013年10月18日,专注于自贸试验区、类金融行业、TMT行业（电信、媒体和科技）及其他新兴行业的企业服务。</p>
                <p>我们的使命是“研究并提供企业需要的服务，帮助企业实现更大的经济效益”</p>
                </div>
            </el-col>
            </el-row>
            <!--tab-->
            <br/>
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="18">
                <div class="grid-content taxTab">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="金税三期" name="first">
                    <el-row :gutter="20">
                        <el-col :span="12">
                        <div class="grid-content">
                            <div class="taxTabLeft">我国税收管理信息系统最新版，国地税合并后实现了全国税务部门和其他部门的联网，利用大数据追查，让偷漏税行为无所遁形；</div>
                        </div>
                        </el-col>
                        <el-col :span="12">
                        <div class="grid-content taxTabImg">
                            <img src="../assets/window/img/taxTab01.jpg" alt=""/>
                        </div>
                        </el-col>
                    </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="偷漏税处罚" name="second">
                    <el-row :gutter="20">
                        <el-col :span="12">
                        <div class="grid-content">
                            <div class="taxTabLeft">补税滞纳金，罚款是税款百分之五十以上五倍以下；涉及金额较大、屡教不改的，处3年以下有期徒刑或拘役；并处偷税数额1倍以上5倍以下罚金；偷税数额在10万元以上，处3年以上7年以下有期徒刑。</div>
                        </div>
                        </el-col>
                        <el-col :span="12">
                        <div class="grid-content taxTabImg">
                            <img src="../assets/window/img/taxTab02.jpg" alt=""/>
                        </div>
                        </el-col>
                    </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="虚开增值税专用发票罪" name="third">
                        <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content">
                            <div class="taxTabLeft">犯本罪者，个人或单位直接负责的人员，处三年以下有期徒刑；数额较大的，处三年以上十年以下有期徒刑；数额巨大，处十年以上有期徒刑或者无期徒刑。</div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content taxTabImg">
                            <img src="../assets/window/img/taxTab03.jpg" alt=""/>
                            </div>
                        </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
                </div>
            </el-col>
            </el-row>
            <el-row>
            <el-col :span="24">
                <div class="grid-content taxRoom"></div>
            </el-col>
            </el-row>
            <el-row>
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="18">
                <div class="grid-content taxSave">
                <img src="../assets/window/img/hand.png" alt="">
                <span>爱税筹，节省您90%的税负</span>
                </div>
                <el-table
                :data="tableData"
                stripe
                style="width:100%;border:1px solid #e0e0e0;">
                <el-table-column
                    prop="coin"
                    label="您的收入"
                    width="330">
                </el-table-column>
                <el-table-column
                    prop="tax"
                    label="老实纳税"
                    width="340">
                </el-table-column>
                <el-table-column
                    prop="winer"
                    label="爱税筹筹划后"
                    width="340">
                </el-table-column>
                </el-table>
            </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="18">
                <div class="grid-content goodsHead">
                <el-row>
                <el-col :span="1">
                    <div class="grid-content">
                    <img src="../assets/window/img/goods.png" alt="">
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content">
                    <h3>产品介绍</h3>
                    </div>
                </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                    <div class="grid-content goods">
                        <h5 class="goodsTitle" style="background:#fbb03b;">爱税筹 A</h5>
                        <div>年度开票金额36万以下</div>
                        <div>付费形式：</div>
                        <span>1.后付费</span>
                        <span>2.押金+服务费</span>
                        <span>3.押金：3600</span>
                        <div>服务项目：</div>
                        <span>开立爱税筹站点</span>
                        <span>提供每年得代理记账服务</span>
                        <span>开票服务</span>
                        <span>年度企业公示和汇算清缴</span>
                        <span>注销业务</span>
                        <span style="color:#ffffff;">注销业务</span>
                        <el-row type="flex" class="row-bg goodsSumBox">
                        <el-col :span="12"><div class="grid-content goodsSum" style="border:none;">服务费率 3%&nbsp;&nbsp;</div></el-col>
                        <el-col :span="12"><div class="grid-content goodsSum"></div></el-col>
                        </el-row>
                    </div>
                    </el-col>
                    <el-col :span="8">
                    <div class="grid-content goods">
                        <h5 class="goodsTitle" style="background:#c1272d;">爱税筹 B</h5>
                        <div>年度开票金额500万以下</div>
                        <div>付费形式：</div>
                        <span>1.后付费</span>
                        <span>2.押金+服务费</span>
                        <span>3.押金：8000</span>
                        <div>服务项目：</div>
                        <span>开立爱税筹站点</span>
                        <span>提供每年得代理记账服务</span>
                        <span>开票服务</span>
                        <span>年度企业公示和汇算清缴</span>
                        <span>代缴税款（可选）</span>
                        <span>注销业务</span>
                        <el-row type="flex" class="row-bg goodsSumBox">
                        <el-col :span="12"><div class="grid-content goodsSum">综合税率 6.5%</div></el-col>
                        <el-col :span="12"><div class="grid-content goodsSum">服务税率1 %</div></el-col>
                        </el-row>
                    </div>
                    </el-col>
                    <el-col :span="8">
                    <div class="grid-content goods">
                        <h5 class="goodsTitle" style="background:#8cc63f;">爱税筹 C</h5>
                        <div>年度开票金额没有上线</div>
                        <div>付费形式：</div>
                        <span>1.后付费</span>
                        <span>2.押金+服务费</span>
                        <span>3.押金：24000</span>
                        <div>服务项目：</div>
                        <span>开立爱税筹站点</span>
                        <span>提供每年得代理记账服务</span>
                        <span>开票服务</span>
                        <span>年度企业公示和汇算清缴</span>
                        <span>代缴税款（可选）</span>
                        <span>注销业务</span>
                        <el-row type="flex" class="row-bg goodsSumBox">
                        <el-col :span="12"><div class="grid-content goodsSum">综合税率9.5%</div></el-col>
                        <el-col :span="12"><div class="grid-content goodsSum">服务税率1 %</div></el-col>
                        </el-row>
                    </div>
                    </el-col>
                </el-row>
                </div>
            </el-col>
            </el-row>
            <!--服务流程-->
            <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="18"><div class="grid-content">
            <el-row>
                <el-col :span="8">
                <div class="grid-content">
                    <div class="goodsHead" style="padding:12px 0;">
                    <el-row>
                        <el-col :span="2">
                        <div class="grid-content">
                            <img src="../assets/window/img/process.png" alt="">
                        </div>
                        </el-col>
                        <el-col :span="7">
                        <div class="grid-content">
                            <h3>服务流程</h3>
                        </div>
                        </el-col>
                    </el-row>
                    </div>
                </div>
                </el-col>
                <el-col :span="8">
                <div class="grid-content">
                    <div class="goodsHead" style="padding:12px 0;">
                    <el-row>
                        <el-col :span="2">
                        <div class="grid-content">
                            <img src="../assets/window/img/option.png" alt="">
                        </div>
                        </el-col>
                        <el-col :span="5">
                        <div class="grid-content">
                            <h3>税源地</h3>
                        </div>
                        </el-col>
                    </el-row>
                    </div>
                </div>
                </el-col>
            </el-row>
                <el-row>
                <el-col :span="8"><div class="grid-content bg-purple processImg"></div></el-col>
                <el-col :span="16"><div class="grid-content bg-purple-light">
                    <el-row style="background:#bf0a19">
                    <el-col :span="6"><div class="grid-content optionHead">区域</div></el-col>
                    <el-col :span="9"><div class="grid-content optionHead">地名</div></el-col>
                    <el-col :span="9"><div class="grid-content optionHead">开立爱税筹站点所需时间</div></el-col>
                    </el-row>
                    <el-row style="background:#dbdbdb">
                    <el-col :span="6"><div class="grid-content optionItem" style="border-bottom:1px solid #dbdbdb;color:#dbdbdb;">华东</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">上海崇明</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">4-8周</div></el-col>
                    </el-row>
                    <el-row style="background:#dbdbdb">
                    <el-col :span="6"><div class="grid-content optionItem" style="border-bottom:1px solid #dbdbdb;border-top:1px solid #dbdbdb;">华东</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">江苏南通</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">3-5周</div></el-col>
                    </el-row>
                    <el-row style="background:#dbdbdb">
                    <el-col :span="6"><div class="grid-content optionItem"  style="border-top:1px solid #dbdbdb;color:#dbdbdb;">华东</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">浙江舟山</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">3-5周</div></el-col>
                    </el-row>
                    <el-row>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                        <el-row style="background:#dbdbdb">
                            <el-col :span="24"><div class="grid-content optionItem" style="padding:23px 26px;">华中</div></el-col>
                        </el-row>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="grid-content bg-purple-light">
                        <el-row style="background:#dbdbdb">
                        <el-col :span="12"><div class="grid-content optionItem">安徽马鞍山</div></el-col>
                        <el-col :span="12"><div class="grid-content optionItem">2-4周</div></el-col>
                        </el-row>
                        <el-row style="background:#dbdbdb">
                        <el-col :span="12"><div class="grid-content optionItem">江西上饶</div></el-col>
                        <el-col :span="12"><div class="grid-content optionItem">2-4周</div></el-col>
                        </el-row>
                        </div>
                    </el-col>
                    </el-row>
                    <el-row style="background:#dbdbdb">
                    <el-col :span="6"><div class="grid-content optionItem">华西</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">贵州贵阳</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">4-6周</div></el-col>
                    </el-row>
                    <el-row style="background:#dbdbdb">
                    <el-col :span="6"><div class="grid-content optionItem">西南</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">重庆</div></el-col>
                    <el-col :span="9"><div class="grid-content optionItem">4-6周</div></el-col>
                    </el-row>
                </div>
                </el-col>
                </el-row>
            </div>
            </el-col>
            </el-row>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="20">
            <div class="grid-content">
                <el-row>
                <!--【1】-->
                <el-col :span="12">
                    <div class="grid-content exampleHead">
                    <h3>互联网企业解决方案</h3>
                    <el-row>
                        <el-col :span="24">
                        <div class="grid-content exampleMsg">
                            <span>名字：黄总</span>
                            <span>公司：某某互联网科技限公司</span>
                            <span>行业：手机游戏</span>
                            <span>客户情况：基于互联网创业公司，业务发展迅猛，用户收入转移的合规+企业管理团队薪酬福利+创业团队股权退出</span>
                        </div>
                        </el-col>
                    </el-row>
                    <el-row style="height:423px;padding:6px 0;border:1px solid #d6d6d6;">
                        <el-col :span="24">
                        <div class="grid-content">
                        <el-row>
                            <el-col :span="5"><div class="grid-content" style="color:#ffffff;">1</div></el-col>
                            <el-col :span="16">
                            <div class="grid-content Etradition">
                                <span>传统财务处理方式：</span>
                                <span>劳务报酬所得税+股权红利所得+工资薪金所得综合税负20%以上。</span>
                            </div>
                            </el-col>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/Master.png" width="59" height="39" style="padding:25px 0;" alt="">
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/User.png" width="59" height="39" style="padding:3px 0;margin:0 0 0 12px;" alt="">
                            </div>
                            </el-col>
                            <el-col :span="12">
                            <div class="grid-content Euser">
                                <span>这么干，我还不如去做微商卖面膜。</span>
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5"><div class="grid-content" style="color:#ffffff;">1</div></el-col>
                            <el-col :span="16">
                            <div class="grid-content Etradition">
                                <span>爱税筹解决方案：</span>
                                <span>1. 利用爱税筹建立解决无票成本输出合规业务操作</span>
                                <span>2. 将传统雇佣关系优化为合伙人关系,服务交易等</span>
                                <span>3. 为投资股权交易，提前建立税收壁垒降低风险</span>
                                <span>4. 将20%以上的综合税负降低到3%起</span>
                            </div>
                            </el-col>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/Master.png" width="59" height="39" style="padding:45px 0;" alt="">
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/User.png" width="59" height="39" style="padding:20px 0;margin:0 0 0 12px;" alt="">
                            </div>
                            </el-col>
                            <el-col :span="16">
                            <div class="grid-content Euser">
                                <span>爱税筹的税务筹划很贴心，解决了请水军没有票的难题，更帮助公司小伙伴涨了不少钱，还不影响社保公积金，真是太棒了！</span>
                            </div>
                            </el-col>
                        </el-row>
                        </div>
                        </el-col>
                    </el-row>
                    </div>
                </el-col>
                <!--【2】-->
                <el-col :span="12">
                    <div class="grid-content exampleHead">
                    <h3>商贸企业解决方案</h3>
                    <el-row>
                        <el-col :span="24">
                        <div class="grid-content exampleMsg">
                            <span>名称：唐总</span>
                            <span>公司：某某贸易有限公司</span>
                            <span>行业：商业贸易</span>
                            <span>客户情况：经营一年后公司实际存在2000万利润，但是其中蕴含了大量高额无票成本，请客送礼等</span>
                        </div>
                        </el-col>
                    </el-row>
                    <el-row style="padding:6px 0;height:423px;border:1px solid #d6d6d6;">
                        <el-col :span="24">
                        <div class="grid-content">
                        <el-row>
                            <el-col :span="5"><div class="grid-content" style="color:#ffffff;">1</div></el-col>
                            <el-col :span="16">
                            <div class="grid-content Etradition">
                                <span>传统财务处理方式：</span>
                                <span>无视无票成本的真实存在，缴纳25%的企业所得税+20%的股息红利所得</span>
                            </div>
                            </el-col>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/Master.png" width="59" height="39" style="padding:25px 0;" alt="">
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/User.png" width="59" height="39" style="padding:3px 0;margin:0 0 0 12px;" alt="">
                            </div>
                            </el-col>
                            <el-col :span="12">
                            <div class="grid-content Euser">
                                <span>什么？交800万的税，我要你何用。</span>
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5"><div class="grid-content" style="color:#ffffff;">1</div></el-col>
                            <el-col :span="16">
                            <div class="grid-content Etradition">
                                <span>爱税筹解决方案：</span>
                                <span>1. 利用爱税筹建立解决无票成本输出合规业务操作</span>
                                <span>2. 合规无票成本进行合理分摊市场服务费商业咨询费等</span>
                                <span>3.两千万利润通过爱税筹进行优化转换，完税合规，缴纳6%增值税抵扣</span>
                            </div>
                            </el-col>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/Master.png" width="59" height="39" style="padding:55px 0;" alt="">
                            </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="3">
                            <div class="grid-content">
                                <img src="../assets/window/img/User.png" width="59" height="39" style="padding:35px 0;margin:0 0 0 12px;" alt="">
                            </div>
                            </el-col>
                            <el-col :span="16">
                            <div class="grid-content Euser">
                                <span>爱税筹用专业性征服千里之外的我。税负从八百万变成六十万，更提升了我产品价格的竞争力，营业额越来越大。也可以买更多的爱税筹产品，祝爱税筹生意兴隆。</span>
                            </div>
                            </el-col>
                        </el-row>
                        </div>
                        </el-col>
                    </el-row>
                    </div>
                </el-col>
                </el-row>
            </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
            <div class="grid-content Advantage">
                <img src="../assets/window/img/advantage.jpg" alt="">
            </div>
            </el-col>
        </el-row>
        <!--优势-->
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="4">
            <div class="grid-content AdvNormal">
                <span>税收情况</span>
                <span>业务模式</span>
                <span>发票类型</span>
                <span>风险系数</span>
                <span>安全系数</span>
                <span>操作方式</span>
                <span>需求控制</span>
            </div>
            </el-col>
            <el-col :span="7">
            <div class="grid-content AdvTax">
                <h3>爱税筹</h3>
                <span>挖掘增量税收，优化收入机构</span>
                <span>根据企业实际出发</span>
                <span>满足业务开展过程中的各类需求</span>
                <span>合规,合理，合法</span>
                <span>公章，银行账户自行掌控</span>
                <span>简单，高效</span>
                <span>自由选择</span>
            </div>
            </el-col>
            <el-col :span="6">
            <div class="grid-content AdvOld">
                <h3>传统节税方案</h3>
                <span>逃税</span>
                <span>无合同，无业务员</span>
                <span>类型单一，结构不合理</span>
                <span>违法</span>
                <span>资金流向不可控</span>
                <span>陌生人</span>
                <span>视卖票情况</span>
            </div>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="16">
            <div class="grid-content taxMap">
                <div class="mapTxt">

                <el-row class="mapItem">
                    <el-col :span="1">
                    <div class="grid-content mapColor" style="background:#fbd78c;"></div>
                    </el-col>
                    <el-col :span="4">
                    <div class="grid-content">&nbsp;&nbsp;&nbsp;&nbsp;华东</div>
                    </el-col>
                </el-row>
                <el-row class="mapItem">
                    <el-col :span="1">
                    <div class="grid-content mapColor" style="background:#d5e396;"></div>
                    </el-col>
                    <el-col :span="4">
                    <div class="grid-content">&nbsp;&nbsp;&nbsp;&nbsp;华中</div>
                    </el-col>
                </el-row>
                <el-row class="mapItem">
                    <el-col :span="1">
                    <div class="grid-content mapColor" style="background:#ecf099;"></div>
                    </el-col>
                    <el-col :span="4">
                    <div class="grid-content">&nbsp;&nbsp;&nbsp;&nbsp;华西</div>
                    </el-col>
                </el-row>
                <el-row class="mapItem">
                    <el-col :span="1">
                    <div class="grid-content mapColor" style="background:#f3b085;"></div>
                    </el-col>
                    <el-col :span="4">
                    <div class="grid-content">&nbsp;&nbsp;&nbsp;&nbsp;西南</div>
                    </el-col>
                </el-row>

                </div>
            </div>
            </el-col>
        </el-row>
        </el-main>
        <el-footer style="height: auto;">
            <el-row>
            <el-col :span="24">
                <div class="grid-content taxFooter">
                Copyright 2010-2020 MDTZZX.CN 明动投资咨询 版权所有 ICP备案号： <a target="_blank" href="http://www.miitbeian.gov.cn/">沪ICP备17000006号</a>
                </div>
            </el-col>
            </el-row>
        </el-footer>
        </el-container>
    </div>
</template>

<script>
import Vue from 'vue'
import { Container, Header, Main, Footer, Row, Col, Menu, MenuItem, Steps, Step, Table, TableColumn, Tabs, TabPane } from 'element-ui'
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Footer.name, Footer)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Steps.name, Steps)
Vue.component(Step.name, Step)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
export default {
  name: 'duty',
  data() {
    return {
      Phone: '',
      Name: '',
      test: false,
      activeName: 'first',
      tableData: [{
        coin: '年薪30万',
        tax: '工薪薪金所得6.3万',
        winer: '0.6万（节省90%）'
      }, {
        coin: '公司分红100万',
        tax: '股息红利所得20万',
        winer: '2万（节省90%）'
      }, {
        coin: '顾问兼职收入30万',
        tax: '劳务报酬所得6万',
        winer: '0.22万（节省96%）'
      }, {
        coin: '企业净利润100万',
        tax: '企业所得税25万',
        winer: '2万（节省92%）'
      }, {
        coin: '有限合伙投资收益200万',
        tax: '五级超额累进税率所得68.5万',
        winer: '5.3万（节省92%）'
      }]
    }
  },
  mounted() {
  },
  methods: {
    onSubmit(){
      let Phone = document.getElementById('phone');
      let Name = document.getElementById('name');
      var pattern=/(1[3-9]\d{9}$)/;
      var valid = pattern.test(this.Phone);
      if(valid){
        Phone.style.border = '1px solid #dcdfe6';
        if(this.Name.length > 4){
          Name.style.border = '1px solid #dcdfe6';
          let codeName = encodeURI(Name.value);
          location.href = "https://www.mdqygl.cn/email/mailTax.htm"+'?'+Phone.value+'&'+codeName;
        }else{
          Name.style.border = '1px solid red';
        }
      }else{
        Phone.style.border = '1px solid red';
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }

}
</script>

<style>
.record {
    background-color: #ffffff;
}
input[type=number] {  
    -moz-appearance:textfield;  
}  
input[type=number]::-webkit-inner-spin-button,  
input[type=number]::-webkit-outer-spin-button {  
    -webkit-appearance: none;  
    margin: 0;  
}
.taxPhone{padding:16px 0 0 38px;height:48px;line-height:37px;background:url('../assets/window/img/taxPhone.png') no-repeat;background-size:32px 32px;background-position:center left;}
.taxLogo img{margin:10px 0 0 25px;width:72%;height:auto;}
main.el-main{margin:0px;padding:0px;}
.taxBan{width:100%;height:360px;background:url('../assets/window/img/taxBan.png') no-repeat;background-size:100% 100%;background-position:center center;}
.banLeft{margin:46px 0 0 96px;}
.taxCoin{position:relative;margin:-64px 0 0 0;}
.taxCoin img{display:block;width:100%;height:auto;}
.el-menu--horizontal>.el-menu-item.is-active{border-bottom:2px solid #bf0a19 !important;}
.el-form-item__label{padding:0 8px 0 0;}
.banForm{margin:10% 0 0 0;box-shadow:0 0 18px rgba(0,0,0,.36);border-radius:3px;}
.banForm h5{padding:12px 18px;font-weight:normal;font-size:16px;color:#303133;border-bottom:1px solid #dcdfe6;}
.taxBox{margin:14px 0 0 0;}
.taxLine{background:url('../assets/window/img/taxLine.jpg') repeat-y;background-size:100% 100%;background-position:center center;}
.taxBgLine{line-height:36px;padding:0 0 0 18px;color:#ffffff;}
.taxIntroduce{margin:15px 0 0 0;}
.taxIntroduce p{margin:4px 0 0 0;text-indent:24px;line-height:22px;}
.taxBackground{margin:15px 0 0 0;padding:0 32px 0 0;border-right:1px solid #c0c4cc;}
.taxBackground p{margin:8px 0 0 0;line-height:24px;}
.el-tabs__item{font-size:16px !important;}
.taxTabLeft{margin:12px 0 0 0;line-height:24px;text-indent:24px;}
.taxTabImg {text-align:right;}

.taxRoom{height:126px;background:url('../assets/window/img/taxRoom.jpg') no-repeat;background-size:1200px 126px;background-position:center center;}
.taxSave{padding:22px 0;text-align:center;}
.taxSave img{display:inline-block;}
.taxSave span{font-size:18px;font-weight:bolder;color:#d24740;}

.el-table th, .el-table tr{background:#e5e5e5;}
.el-table--striped .el-table__body tr.el-table__row--striped td{background:#f2f2f2;}

.goodsHead{margin:18px 0 0 0;}
.goodsHead img{display:inline-block;width:22px;height:22px;}
.goodsHead h3{display:inline-block;font-weight:bolder;color:#525252;}
.goods{margin:14px 0;box-shadow:0 0 18px rgba(0,0,0,.36);}
.goodsTitle{padding:8px 18px;margin:0 0 7px 0;font-size:16px;color:#ffffff;}
.goods div, .goods span{padding:2px 18px;font-size:15px;color:#525252;}
.goods span{display:block;padding:1px 38px;}
.goodsSumBox{margin:8px 0 0 0;border-top:1px solid #dcdfe6;}
.goodsSumBox div{padding:3px 0 !important;}
.goodsSum{padding:0 !important;text-align:center;}
.goodsSumBox div:first-child .goodsSum{border-right:1px solid #dcdfe6;}

.optionHead{padding:6px 26px;border:1px solid #ffffff;color:#ffffff;}
.optionItem{padding:6px 26px;border:1px solid #ffffff;color:#525252;}
.optionItem span{display:inline-block;width:100%;}

.processImg{height:279px;background:url('../assets/window/img/processImg.png') no-repeat;background-size:240px 240px;background-position:center center;}

.exampleHead{margin:32px 0 4px 0;}
.exampleHead h3{padding:0 18px;font-weight:normal;border-left:2px solid red;}
.exampleMsg{padding:6px 18px;}
.exampleMsg span{display:block;color:#525252;}
.Etradition{margin:12px 0;padding:6px 12px;background:#9eea6a;border-radius:3px;}
.Etradition span{display:block;font-size:15px;color:#232323;}
.Etradition span:first-child{padding:0 0 2px 0;color:red;}
.Euser{margin:5px 0;padding:6px 12px;border:1px solid #d6d6d6;border-radius:3px;}
.Euser span{display:block;font-size:15px;color:#232323;}

.Advantage img{display:block;margin:0 auto;width:1200px;height:90px;}

.AdvNormal{margin:46px 0 0 0;padding:0 0 12px 0;background:rgb(193, 39, 45);border-radius:5px;box-shadow:0 0 18px rgba(0,0,0,.36);}
.AdvNormal span{padding:2px 0;display:block;color:#232323;text-align:center;}
.AdvNormal span:after{content:'';position:absolute;margin:0 0 0 55px;width:51px;height:25px;background:url('../assets/window/img/buttons.png') no-repeat;background-size:46px 8px;background-position:center center;}
.AdvNormal span:first-child{padding:74px 0 0 0;}

.AdvTax{margin:46px 0 0 0;padding:0 0 12px 0;background:rgba(140, 198, 63);}
.AdvTax h3{padding:36px 0 8px 0;font-size:20px;font-weight:normal;color:#242424;text-align:center;}
.AdvTax span{padding:2px 0 2px  56px;display:block;color:#232323;}
.AdvTax:before{content:'';position:absolute;margin:-30px 0 0 168px;width:60px;height:60px;background:url('../assets/window/img/advTax.png') no-repeat;background-size:100% 100%;background-position:center center;}

.AdvOld{margin:46px 0 0 0;padding:0 0 12px 0;background:rgba(251, 176, 59);}
.AdvOld h3{padding:36px 0 8px 0;font-size:20px;font-weight:normal;color:#242424;text-align:center;}
.AdvOld span{padding:2px 0 2px 56px;display:block;color:#232323;}
.AdvOld:before{content:'';position:absolute;margin:-30px 0 0 137px;width:60px;height:60px;background:url('../assets/window/img/advOld.png') no-repeat;background-size:100% 100%;background-position:center center;}

.taxMap{width:100%;height:553px;overflow:hidden;background:url('../assets/window/img/map.png') no-repeat;background-size:650px 553px;background-position:center center;}
.mapTxt{margin:380px 0 0 0;}

.mapItem{margin:12px 0;}
.mapColor{width:38px;height:21px;}

.el-footer{padding:0px;height:0px;}
.taxFooter{padding:14px 0;width:100%;font-size:14px;background:rgba(0,0,0,0.7);text-align:center;color:#ffffff;}
.taxFooter a{color:#ffffff;text-decoration:none;}

.banRight{width:100%;height:320px;background:url('../assets/window/img/banRight.png') no-repeat;background-size:100%;background-position:center center;}

</style>