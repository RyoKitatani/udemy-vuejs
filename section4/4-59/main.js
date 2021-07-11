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
  template: '<h1>こんにちは、{{name}}</h1>'
}).$mount('#app2')

new Vue({
  // el: '#app2',
  data: {
    name: 'よしぴー'
  },
  render: function(createElement) {
    console.log(createElement('h1', 'こんにちは、' + this.name))
    // DOM要素ではなく、jsのオフジェクトを作成しているだけ 仮想DOM
    // DOMには触れていない
    return createElement('h1', 'こんにちは、' + this.name)
  }
}).$mount('#app3')

var dir = document.createElement('div');
console.log(dir);
console.dir(dir);
console.log(document);
console.dir(document);