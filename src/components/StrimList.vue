<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class StrimList extends Vue {
  strims: string[] = [];

  constructor() {
    super();
    this.strims = ["test", "woop", "wowee"];
  }

  getStrims() {
    return this.strims;
  }

  addStrim(input: string) {
    this.strims.push(input);
  }
}
</script>
