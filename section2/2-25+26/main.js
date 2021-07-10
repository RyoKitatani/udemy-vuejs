new Vue({
  el: '#app',
  data: {
    counter: 0,
    otherCounter: 0,
  },
  computed: {
    lessThanThreeComputed: function() {
      console.log('computed')
      return this.counter > 3 ? '3より上':'3以下'
    }
  },
  methods: {
    lessThanThreeMethod: function() {
      console.log('method')
      return this.counter > 3 ? '3より上':'3以下'
    }
 }
})