var data = {
  message: 'こんにちは',
  name: 'よしぴー'
}

var vm = new Vue({
  data: data,
  computed: {
    myData: function() {
      return this.$data;
    }
  }
})

vm.$mount('#app')

new Vue({
  // el: '#app2',
  data: {
    name: 'よしぴー'
  },
  template: '<h1>こんにちは,{{name}}</h1>'
}).$mount('#app2')

