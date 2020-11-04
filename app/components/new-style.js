import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

/**
 * @extends {Component<{ input: string }>}
 */
export default class NewStyleComponent extends Component {
  @tracked internal = ["three", "separate", "words"];

  get internalValue() {
    return this.internal.join(", ");
  }

  get inputLength() {
    return this.args.input.length;
  }

  get merged() {
    return `input is ${this.args.input} and internal is ${this.internalValue}`;
  }

  get inputIsNonZero() {
    return this.args.input.length > 0;
  }

  get internalIsNonZero() {
    return this.internalValue.length > 0;
  }

  get mergedIsNonZero() {
    return this.merged.length > 0;
  }
}
