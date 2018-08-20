define(['vue','vue-router','component1'],function(Vue,VueRouter,component1){
    return function(){
        const Foo = {template:'<div>this is foo !</div>'};
        const Home = {template:'<div>this is my home !</div>'};
        const Abc = {template:'<div>this is my abc !</div>'};
        // console.log(component1.component)
        // const myComponent = {template:component1()};
        const myComponent = {template:component1};
        console.log(myComponent)
        const routers = [
            {
                path:'/foo',
                component:Foo
            },
            {
                path:'/abc',
                component:Abc
            },
            {
                path:'/home',
                component:Home
            },
            {
                path:'/myComponent',
                component:myComponent.template
            }
        ];

        Vue.use(VueRouter);

        const router = new VueRouter({
            routes:routers
        });

        // window.app = new Vue({
        //     el:'#app-router',
        //     router:router,
        // })
        
        window.app = new Vue({
            router
        }).$mount('#app-router');
    }
});