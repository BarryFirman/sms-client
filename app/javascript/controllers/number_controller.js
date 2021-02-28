import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "number" ]


  connect() {
  console.log('hello from number controller');

  document.getElementById('tel'), {

  }
  }

  shapePhoneNumber(event) {
    console.log(event)
    console.log(event.target.value)
  }


}