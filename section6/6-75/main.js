Vue.component('my-component', {
  data: function(){
    return {
      number: 12
    }
  },
  template: '<p>いいね({{number}})</p>'
})

new Vue({
  el:'#app'
})