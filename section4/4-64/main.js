var data = {
  message: 'こんにちは',
  name: 'よしぴー'
}

//コンポーネント 引数2つ

Vue.component('hello', {
  template: '<p>こんにちは</p>'
} )


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
    // console.log(createElement('h1', 'こんにちは、' + this.name))
    // DOM要素ではなく、jsのオフジェクトを作成しているだけ 仮想DOM
    // DOMには触れていない
    return createElement('h1', 'こんにちは、' + this.name)
  }
}).$mount('#app3')

var dir = document.createElement('div');
// console.log(dir);
// console.dir(dir);
// console.log(document);
// console.dir(document);

new Vue({
  el: '#app4',
  data: {
    name: 'よしぴー'
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
})


//一番最初にあった要素のみ
// new Vue({
//   el: 'hello',
//   template: '<p>こんにちは</p>'
// })