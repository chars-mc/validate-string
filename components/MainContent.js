Vue.component("main-content", {
  template: /* html */ `
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-12 mt-3">
          <string-input @newString="showCardString"></string-input>
        </div>

        <div class="col-md-7 col-small-12 mt-3">
          <h3>Results</h3>

          <div>
            <string-card v-for="(item, i) in stringList"
              :id="i"
              :text="item.text"
              :status="item.status"
              :key="i">
            </string-card>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      stringList: JSON.parse(localStorage.getItem("string_list")) || []
    };
  },
  methods: {
    showCardString(result) {
      if (this.stringList.length > 4) this.stringList.shift();
      this.stringList.push(result);
      localStorage.setItem("string_list", JSON.stringify(this.stringList));
    }
  }
});
