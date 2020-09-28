import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "toggalable" ]

  class(event) {
    event.preventDefault()
    this.toggalableTargets.forEach((t) => t.classList.toggle(this.data.get("class")))
  }

  text(event) {
    event.preventDefault()
    if (event.target.innerText == event.target.dataset.toggleText) {
      event.target.innerText = event.target.dataset.toggleTextAlt
    } else {
      event.target.innerText = event.target.dataset.toggleText
    }
  }
}

