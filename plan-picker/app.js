let PlanComponent = {
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
};

let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    plan: PlanComponent
  },
  data: () => ({
    plans: ["The Single", "The Curious", "The Addict"]
  })
};

new Vue({
  el: "#app",
  components: {
    "plan-picker": PlanPickerComponent
  }
});
