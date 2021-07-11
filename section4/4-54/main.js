var data = {
  message: 'こんにちは',
  name: 'よしぴー'
}

var vm = new Vue({
  el: '#app',
  data: data
})


console.log(data == vm.$data);
console.log(vm);
console.log(vm.$data);
