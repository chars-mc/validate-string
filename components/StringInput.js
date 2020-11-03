Vue.component("string-input", {
  template: /* html */ `
    <form @submit.prevent="evaluateString()">
      <div class="form-group">
        <label for="stringInput">Enter only a, b or c</label>

        <input type="text"
          class="form-control"
          id="stringInput"
          :placeholder="placeholder"
          v-model="stringInput">
      </div>
      <button class="btn btn-success btn-block mt-2">Evaluate</button>
    </form>
  `,
  data() {
    return {
      placeholder: "a(bc*)b",
      stringInput: ""
    };
  },
  methods: {
    evaluateString() {
      const regex = /^(ab)c*b$/;
      const result = {
        text: this.stringInput,
        status: regex.test(this.stringInput)
      };
      this.$emit("newString", result);
    }
  }
});
