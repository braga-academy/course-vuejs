/* jshint esnext: true */
Vue.filter('upper', (value) => value.toUpperCase());

Vue.filter('limit', (value, limit = 15, dot = '...') => { return value.length <= limit ? value + ' ...' : value.substr(0, limit) + dot; });

new Vue({
  el: 'body',
  data: {
    title: 'Curso Vue.js <smal>!!</smal>',
    description: 'Primeiro código Vue',
    active: true,
    name: 'luciano',
    color: ['blue']
  },
  ready(){
    setTimeout(() => {
      this.title = 'Curso Vue';
      this.active = false;
    }, 3000)
  }
});