define(['vue'],function(Vue){

  var templates = Vue.extend({
    template:'<div><p>{{msg}}</p><p>{{name}}</p><p>{{num}}</p></div>',
    props:['n'],
    data(){
      return {
        msg:'this is template vue',
        name:"wangchi 111",
        num:123
      }
    }
  });
  return {component:templates};
});