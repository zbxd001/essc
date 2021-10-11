<template>
    <div class="login">
        <div class="index">
            <div class="picture-left hidden-sm-and-down">
                <div class="title">校园二手交易平台</div>
                <img src="../assets/shopping.png">
            </div>
            <div class="login_menu">
<!--                <div class="title-small" hidden-md-and-up>校园二手交易平台</div>-->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span >{{isRegisterBtnClick == false ? "登录" : "注册"}}</span>
                        <el-button style="float: right; padding: 3px 0;color: blue" @click="registerBtn()" type="text">
                            {{isRegisterBtnClick == false ? "注册" : "返回登陆"}}
                        </el-button>
                    </div>
                    <el-form v-model="user" label-width="70px" v-if="isRegisterBtnClick == false" class="form1">
                        <el-form-item label="用户名">
                            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="user.password" placeholder="请输入密码" type="password" show-password></el-input>
                        </el-form-item>
                        <div class="option">
                            <el-button @click="login()" class="loginBtn" style="width: 110px;border-radius: 5%" type="primary">登录</el-button>
                        </div>
                    </el-form>
                    <!--注册面板-->
                    <el-form v-model="newUser" label-width="70px"  v-if="isRegisterBtnClick == true" class="form1">
                        <el-form-item label="用户名">
                            <el-input v-model="newUser.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="newUser.password" placeholder="请输入密码" type="password" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input v-model="newUser.confirm_password" placeholder="请再次输入密码" type="password" show-password></el-input>
                        </el-form-item>
                        <div class="option">
                            <el-button type="primary" @click="register()" style="width: 110px;border-radius: 5%" class="registerBtn">
                                注册
                            </el-button>
                        </div>
                    </el-form>

                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                isRegisterBtnClick: false, //注册按钮是否被点击（是否切换到注册面板）
                user:{
                    username:"",
                    password:""
                },
                newUser: {
                    username:"",
                    password:"",
                    confirm_password: "",
                }
            }
        },
        methods: {
            //登录功能
            login(){
                //TODO 与后端相连接传送数据
                this.$router.push("/home")
                this.$confirm("请前往完善您的个人信息，以免影响后续交易操作，是否前往？",'提示',{
                    confirmButtonText: '立即完善',
                    cancelButtonText: '暂不完善',
                    type: "warning",
                }).then(()=>{
                    this.$router.push("/userInfo");
                }).catch(()=>{
                })
            },
            //注册功能
            register(){
                //TODO 与后端相连接
                this.registerBtn();
            },

            registerBtn(){
                this.isRegisterBtnClick = !this.isRegisterBtnClick;
            }

        }
    }
</script>

<style scoped>
    .login{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title-small{
        text-align: center;
        font-size: 30px;
        user-select: none;
        letter-spacing: 2px;
        margin: 10px 0;
    }
    .index{
        height: 500px;
        width: 1000px;
        display: flex;
        justify-content: center;
    }
    .picture-left{
        width: calc(100% - 400px);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title{
        text-align: center;
        font-size: 36px;
        user-select: none;
        letter-spacing: 2px;
    }
    .picture-left img{
        height: 80%;
    }
    .login_menu{
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .el-card {
        width: 60px;
    }
    .text {
        font-size: 14px;
    }
    .item {
        margin-bottom: 18px;
    }
    .option{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: small;
    }

    .box-card{
        width: 100%;
        border-radius: 5%;
        background-color: rgba(26, 26, 26, 0.29);
    }

    .clearfix:before,
    .clearfix:after{
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both;
    }
    .loginBtn{
        width: 120px;
    }
</style>