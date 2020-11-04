import Controller from "@ember/controller";

export default class ApplicationController extends Controller {
  count = Array.from({ length: 10000 }, (_, i) => i);
}
