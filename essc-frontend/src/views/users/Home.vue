<template>
    <div class="home">
        <el-container>
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
            <router-view/>
            <el-footer height="180px">
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
                user: {
                  avatar: "src/assets/avatar.png",
                  uid: null,
                  username: "未命名",
                  money: null,
                }
            }
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
            }
        }
    }
</script>

<style scoped>
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
    .el-footer{
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
</style>