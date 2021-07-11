var vm = new Vue({
  el: '#app',
  data: {
    message: 'こんにちは',
    name: 'よしぴー'
  }
})

// vm.message = '変えました'
vm.name = 'よしぴー'

console.log(vm);
