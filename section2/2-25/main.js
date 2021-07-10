new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  computed: {
    lessThanThree: function() {
      return this.counter > 3 ? '3より上':'3以下'
    }
  }
})