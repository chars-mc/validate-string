Vue.component("string-card", {
  template: /* html */ `
    <div class="alert" :class="status ? 'alert-success' : 'alert-danger'" role="alert" v-html="getText">
    </div>
  `,
  props: ["id", "text", "status"],
  computed: {
    getText() {
      return `
        ${this.id + 1}.
        ${this.text} is
        ${this.status ? "a valid string" : "not a valid string"}`;
    }
  }
});
