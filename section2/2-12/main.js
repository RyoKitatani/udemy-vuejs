new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    number: 3,
    ok: true
  },
  methods: {
    sayHi: function() {
      this.message = "Hello VueJS";
      return "Hi";
    }
  }
})

