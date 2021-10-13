<template>
    <div class="home">
        <el-container class="container">
            <el-header>
                <div class="logo">南京大学二手交易平台</div>
                <el-select v-model="campus" placeholder="请选择校区" class="select" >
                    <el-option
                        v-for="item in options"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                    </el-option>
                </el-select>
                <div class="search">
                    <el-input prefix-icon="el-icon-search" placeholder="搜索商品" v-model="input" @keyup.enter.native="search"></el-input>
                </div>
                <div class="user-info">
                    <div class="bookmark">
                        <el-button type="primary" icon="el-icon-plus" circle @click="addGoodsBtn()"></el-button>
                        <el-button type="warning" icon="el-icon-star-off" circle @click="bookmarkBtn()"></el-button>
                        <el-button type="warning" icon="el-icon-truck" circle @click="myGoodsBtn()"></el-button>
                    </div>
                    <el-dropdown @command="handleCommand">
                        <div class="avatar">
                            <img v-if="!isLogin" src="../../assets/avatar.png" alt="">
                            <img v-else :src="user.avatar" alt="">
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="toCenter">
                                账户：{{user.username}}
                            </el-dropdown-item>
                            <el-dropdown-item command="toCenter">
                                余额：￥{{user.money}}
                            </el-dropdown-item>
                            <el-dropdown-item command="toCenter">
                                个人信息
                            </el-dropdown-item>
                            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container class="all-goods">
                <el-aside style="width: 165px">
                    <ul class="goods-type">
                        <li v-for="a in archives" :key="a.name" class="goods-type">
                            <el-badge :value="a.count" :max="99" class="good-item">
                                <el-button @click="changeArchive(a.name)" size="small">{{a.name}}</el-button>
                            </el-badge>
                        </li>
                    </ul>
                </el-aside>
                <el-container>
                    <el-main class="main-box">
                        <el-tabs tab-position="left" @tab-click="selectCatalog">
                        <el-tab-pane>
                            <el-row :gutter="40">
                                <el-col :span="8" v-for="(item,index) in goods" :key="index">
                                    <el-card :body-style="{padding: '0px'}" class="good-list-item">
                                        <div class="img-box" @click="showDetail(index, item)">
                                            <img :src="item.pic" class="image" />
                                        </div>
                                        <div style="padding: 14px" @click="showDetail(index, item)">
                                            <span> {{ item.gname }} </span>
                                            <div class="bottom clearfix">
                                                <time class="desc">{{item.remark | ellipsis }}</time>
                                                <el-button type="text" class="button">
                                            <span style="color: var(--primary-color); font-size: 18px">
                                            ￥{{ item.price }}
                                            </span>
                                                </el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                    </el-tabs>
                    </el-main>
                    <el-footer>
                        <div class="pagination">
                            <el-pagination
                                    background
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="currentPage"
                                    :page-size="100"
                                    layout="prev, pager, next, jumper"
                                    :total="1000">
                            </el-pagination>
                        </div>
                    </el-footer>
                </el-container>

            </el-container>
            <el-footer height="180px" class="bottom-info">
                <div>Copyright © 2021 南京大学校园二手交易平台</div>
                <div class="link">
                    <div @click="toAdmin">管理员页面</div>&nbsp;&nbsp;|&nbsp;&nbsp;
                    <div @click="toGithub">个人联系方式</div>
                </div>
                <div style="font-size: 12px">
                    通信地址：南京大学鼓楼校区陶三620
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                isLogin: false,
                campus:"",
                input:"",
                options:[
                    {id:0,name:"仙林校区"},
                    {id:1,name:"鼓楼校区"},
                    {id:2,name:"金陵学院"},
                ],
                currentPage: 5,
                archives: [
                    {name: "所有商品", count: 1008611},
                    {name: "数码/办公", count: 1},
                    {name: "运动/户外", count: 2},
                    {name: "书籍/学习", count: 3},
                    {name: "乐器/美术", count: 3},
                    {name: "游戏/模型", count: 3},
                    {name: "生活/家居", count: 3},
                    {name: "文具/箱包", count: 3},
                    {name: "服装/饰品", count: 3},
                    {name: "美妆/清洁", count: 3},
                    {name: "食品/零食", count: 3},
                ],
                goods: [
                  {
                    gid: 1,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 2,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 3,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 4,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 5,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 6,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 7,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 8,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                  {
                    gid: 9,
                    uid: 1,
                    gname: "富士xe4",
                    price: 2888,
                    pic: "",
                    status: 1,
                    remark: "99新，箱说全，不议价",
                    cid: 1,
                  },
                ],
                user: {
                  avatar: "../../assets/avatar.png",
                  uid: null,
                  username: "未命名",
                  money: null,
                }
            }
        },
        filters: {
            ellipsis(value) {
                //字数过滤器，用于限制商品详情的字数显示
                if (!value) return "";
                if (value.length > 10) {
                    return value.slice(0, 10) + "...";
                }
                return value;
            },
        },
        methods :{
            search(){
                //TODO 搜索与后台的交互
            },
            addGoodsBtn(){
                this.$router.push("/addGoods")
            },
            bookmarkBtn(){
                this.$router.push("/bookmark")
            },
            myGoodsBtn(){
                this.$router.push("/myGoods")
            },
            handleCommand(command){
                console.log("执行command操作")
                //"更多信息"点击事件，跳转到个人中心页
                if(command == "toCenter"){
                    console.log("跳转中心页操作")
                    this.$router.push("/userInfo")
                }
                if(command == "logout"){
                    console.log("登出操作")
                    // this.$store.commit("setToken", ""); //token设为空字符串
                    this.$router.push("/");
                    this.$message({
                        message: "已退出登录",
                        type: "success",
                    })
                }

            },
            toAdmin(){
                //TODO 与后台交互
                this.$router.push("/admin")
            },
            toGithub(){
                window.location.href = "https://github.com/zbxd001"
            },
            changeArchive(name){

            },
            handleSizeChange(){

            },
            handleCurrentChange(){

            },
            showDetail(index,item){
                this.$router.push("/goodsDetail")
            },
            selectCatalog(tab){

            }
        }
    }
</script>

<style scoped>
    .main-box{
        margin-left: -40px;
    }
    .img-box {
        height: 240px;
    }
    .img-box img {
        width: 100%;
    }
    .home{
        height: 100%;
    }
    .el-input__inner{
        border: 0;
    }
    .el-header{
        padding: 0;
        display: flex;
        background-color: rgba(78, 172, 12, 0.8);
    }
    .el-header .logo{
        flex: 1;
        olor: #fff;
        line-height: 60px;
        font-size: 24px;
        letter-spacing: 1px;
        user-select: none;
        margin-left: 10px;
        font-family: "Yuanti SC", Youyuan, "You Yuan", 幼圆, "PingFang SC",
        "Microsoft Yahei", Helvetica, sans-serif;
    }
    .el-header .search{
        display: flex;
        flex-shrink: 0;
        width: 30%;
        align-items: center;
        margin-left: 200px;
        margin-right: 200px;
    }
    .el-header .select{
        display: flex;
        flex-shrink: 0;
        align-items: center;
        width: 150px;
    }
    .el-header .user-info{
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
    .el-header .bookmark{
        width: 180px;
        line-height: 60px;
        text-align: center;
        color: #F1F1F1;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .el-header .user-info .avatar{
        margin: 10px 24px 10px 0;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: rgb(185, 185, 185);
        cursor: pointer;
        overflow: hidden;
    }
    .el-header .user-info .avatar img{
        width: 100%;
    }
    .bottom-info{
        background-color: rgba(78, 172, 12, 0.8);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 200%;
    }
    .link{
        display: flex;
        justify-content: center;
        font-size: small;
    }
    .link div{
        cursor: pointer;
    }
    .link div:hover{
        color: #f98900;
    }
    .all-goods{
        background: #ffffff;
        padding: 10px 0;
        width: 1200px;
        margin-left: 260px;
    }
    .goods-type{
        list-style: none;
    }
    .good-item{
        margin-top: 10px;
        margin-right: 40px;
    }
    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .good-list-item {
        user-select: none;
        cursor: pointer;
        margin-bottom: 40px;
    }
    /* hover实现放大图片效果 */
    .good-list-item .image {
        width: 100%;
        display: block;
        cursor: pointer;
        transition: all 0.8s 0.1s;
    }
    .good-list-item:hover .image {
        transform: scale(1.1);
    }
    .good-list-item .img-box {
        overflow: hidden;
    }

</style>