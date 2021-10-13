<template>
    <div class="all-goods">
        <el-aside>
            <ul class="goods-type">
                <li v-for="a in archives" :key="a.name" class="goods-type">
                    <el-badge :value="a.count" :max="99" class="good-item">
                        <el-button @click="changeArchive(a.name)" size="small">{{a.name}}</el-button>
                    </el-badge>
                </li>
            </ul>
            <el-tabs tab-position="left" @tab-click="selectCatalog">
                <el-tab-pane>
                    <el-row>
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
        </el-aside>
<!--        分页模块-->
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
    </div>
</template>

<script>
    export default {
        name: "allGoods",
        data(){
            return {
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
                        gname: "我嫩叠",
                        price: 2888,
                        pic: "",
                        status: 1,
                        remark: "99新，箱说全，不议价",
                        cid: 1,
                    },
                ]
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
        methods: {
            changeArchive(name){

            },
            handleSizeChange(){

            },
            handleCurrentChange(){

            },
            showDetail(index,item){

            },
            selectCatalog(tab){

            }
        },
    }
</script>

<style scoped>
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
        margin-bottom: 20px;
    }
</style>