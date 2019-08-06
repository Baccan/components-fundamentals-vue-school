Vue.component("plan-picker", {
  template: "#plan-picker-template",
  data: () => ({
    plans: ["The Single", "The Curious", "The Addict"]
  })
});

Vue.component("plan", {
  template: "#plan-template",
  // props: ["name"] // definir as props como um array não temos muito controle
  // Uma boa pratica e declara-lo como um objeto
  props: {
    name: {
      type: String,
      // default: "Baccan",
      required: true
    }
    // price: Number
  }
});

new Vue({
  el: "#app"
});
