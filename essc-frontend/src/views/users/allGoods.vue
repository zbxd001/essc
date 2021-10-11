<template>
    <div class="all-goods">
        <el-main>
            <li v-for="c in items" @click="view(c.categorysId)" :key="c.categorysId" class="me-allct-item">
                <div class="me-allct-content">
                    <a class="me-allct-info">
                        <img class="me-allct-img" :src="c.img"/>
                        <h4 class="me-allct-name">{{c.categoryname}}</h4>
                    </a>

                    <div class="me-allct-meta">
                        <span>{{c.articles}} 文章</span>
                    </div>
                </div>
            </li>
        </el-main>
    </div>
</template>

<script>
    export default {
        name: "allGoods",
        data(){
            return{
                items:[],
            }
        },
        methods: {
          view(categorysId){
              this.router.push
          }
        }
    }
</script>

<style scoped>

</style>