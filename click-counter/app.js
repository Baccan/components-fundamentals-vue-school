// Vue.component(name, {});
Vue.component("click-counter", {
  template: '<button @click="count++">{{count}}</button>',
  data: () => ({
    count: 0
  })
});

new Vue({
  el: "#app"
});
