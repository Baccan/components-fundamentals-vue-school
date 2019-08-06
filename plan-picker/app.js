let PlanPickerItemComponent = {
  template: "#plan-picker-item-template",
  // props: ["name"] // definir as props como um array não temos muito controle
  // Uma boa pratica e declara-lo como um objeto
  props: {
    name: {
      type: String,
      // default: "Baccan",
      required: true
    },
    // price: Number
    selectedPlan: {
      type: String
    }
  },
  computed: {
    isSelected() {
      return this.name === this.selectedPlan;
    }
  },
  // data: () => ({
  //   selected: false
  // }),
  methods: {
    select() {
      // Custom event
      // (nome do evento a ser emitido, dados a serem passados como paylaod)
      this.$emit("select", this.name);

      // this.selected = true;
    }
  }
};

let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    "plan-picker-item": PlanPickerItemComponent
  },
  data: () => ({
    plans: ["The Single", "The Curious", "The Addict"],
    selectedPlan: null
  }),
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    }
  }
};

new Vue({
  el: "#app",
  components: {
    "plan-picker": PlanPickerComponent
  }
});
