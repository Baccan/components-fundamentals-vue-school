Vue.component("todo-item", {
  template: "#todo-item-template",
  data: () => ({
    completed: false
  })
});

new Vue({
  el: "#app"
});
