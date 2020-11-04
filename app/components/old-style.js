import { set } from "@ember/object";
import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  input: undefined,

  internal: undefined,

  init() {
    this._super(...arguments);
    set(this, "internal", ["three", "separate", "words"]);
  },

  internalValue: computed("internal.[]", function () {
    return this.internal.join(", ");
  }),

  merged: computed("input", "internal.[]", function () {
    return `input is ${this.input} and internal is ${this.internal.join(", ")}`;
  }),

  internalIsNonZero: computed.bool("internalLength", function () {
    return this.internal.length > 0;
  }),

  inputIsNonZero: computed.bool("inputLength", function () {
    return this.input.length > 0;
  }),

  mergedIsNonZero: computed.bool("mergedLength", function () {
    return this.merged.length > 0;
  }),
});
