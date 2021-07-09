new Vue({
  el: '#app',
  data: {
    number: 0,
    x: 0,
    y: 0
  }, 
  methods: {
    countUP: function() {
      this.number += 1;
    },
    changeMousePosition: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})