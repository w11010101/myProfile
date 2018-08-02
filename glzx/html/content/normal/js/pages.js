
define(['vue'], function (Vue) {
    var pageComponent = Vue.extend({
        template: '<div style="text-align:right"><div><div class="page" v-if="show"><div class="pagelist">' +
        '<span class="auxiliary"> 共</span>' +
        '<span class="auxiliary">{{pages}}</span>' +
        '<span class="auxiliary">页/</span>' +
        '<span class="auxiliary auxiliary-last">{{pagerows}}条数据</span>' +
        '<span class="jump" :class="{\'disabled\':curPage==1}" @click="goPage(curPage==1?1:curPage-1)" ><</span>' +

        '<template v-for="num in showPageBtn">' +
        '<span v-if="num" class="jump" :class="{\'bgprimary\':curPage==num}" @click="goPage(num)" >{{num}}</span >' +
        '<span class="ellipsis" v-else>...</span>' +
        '</template>' +

        '<span :class="{\'disabled\':curPage==pages}" class="jump" @click="goPage(curPage==pages?pages:curPage+1)" >></span>' +
        '<span class="jumppoint auxiliary">跳至：</span>' +
        '<span class="jumpinp "><input type="number" v-model="changePage" min=0></span>' +
        '<span class="jumppoint auxiliary">页</span>' +
        '<span class="jump gobtn auxiliary" @click="goPage(changePage)">GO</span></div ></div ></div ></div >',
        // 用户组件传递数据            
        // props: {
        //     pages: {
        //         type: Number,
        //         default: 15
        //     },
        //     pagerows: {
        //         type: Number,
        //         default: 0
        //     },
        //     current: {
        //         type: Number,
        //         default: 1
        //     }
        // },
        data: function () {
            return {
                // pages:1,
                // pagerows:0,
                curPage: 1,
                // curPage: this.current,
                centerLength: 4,
                changePage: 0,//跳转页
            }
        },
        computed: {
            show: function () {
                return this.pages && this.pages != 1
            },
            showPageBtn: function () {
                let pageNum = this.pages; // 总页数
                let index = this.curPage; // 当前页

                console.log("curPage=" + this.curPage);

                let arr = [];
                if (pageNum <= 6) {
                    for (let i = 1; i <= pageNum; i++) {
                        arr.push(i)
                    }
                    return arr
                }
                // 对页码显示进行处理，动态展示
                if (index <= 3) return [1, 2, 3, 4, 0, pageNum];
                if (index >= pageNum - 1) return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
                if (index === 4) return [1, 2, 3, 4, 5, 0, pageNum];
                if (index === pageNum - 2) return [1, 0, pageNum - 4, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
                return [1, 0, index - 2, index - 1, index, index + 1, index + 2, 0, pageNum];
            }
        },
        methods: {
            goPage: function (page) {
                console.log(page);
                this.curPage = page;
                this.$emit('navpage', this.curPage);
            }
        }
    });
    return { pageComponent: pageComponent };
})




