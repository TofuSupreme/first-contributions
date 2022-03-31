import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["button", "reset"]
  connect() {
    console.log("Hello from the disable button controller");
  }
  reset() {
    this.buttonTarget.innerText = "Click me!";
    this.buttonTarget.removeAttribute("disable", "");
    this.resetTarget.classList.toggle("d-none")
  }

  handleClick() {
    // console.log("clicked");
    // We want to change the text of the button
    this.buttonTarget.innerText = "Bingo!";
    this.buttonTarget.setAttribute("disable", "");
    this.resetTarget.classList.toggle("d-none")
  }
}
