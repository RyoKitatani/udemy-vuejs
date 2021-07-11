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


console.log(data == vm.$data);
console.log(vm);
console.log(vm.$data);
