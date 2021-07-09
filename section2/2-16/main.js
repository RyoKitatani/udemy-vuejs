new Vue({
  el: '#app',
  data: {
    number: 0
  }, 
  methods: {
    countUP: function() {
      this.number += 1;
    }
  }
})