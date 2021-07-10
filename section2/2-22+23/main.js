new Vue({
  el: '#app',
  data: {
    number: 0,
    event:'click'
  }, 
  methods: {
    countUP: function() {
      this.number += 1 
    }
  }
})