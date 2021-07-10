new Vue({
  el: '#app',
  data: {
    number: 0,
    x: 0,
    y: 0
  }, 
  methods: {
    countUP: function(times) {
      this.number += 1 * times;
    },
    changeMousePosition: function(divideNumber, event) {
      // event.stopPropagation();
      this.x = event.clientX / divideNumber;
      this.y = event.clientY / divideNumber;
    },
    // noEvent: function(event) {
    //   event.preventDefault()
    // }
  }
})