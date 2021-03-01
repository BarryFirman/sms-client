import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "mobile", "errorMsg", "okImg"]


  connect() {
    let mobile = document.getElementById('phone_number_phone_number');
    if(mobile.value > 0) {
      mobile.classList.add('interacting')
    }
  }

  toggleInteracting(event) {
    if(this.mobileTarget.classList.contains('interacting')) {
      if(event.target.value.length == 0) {
        this.mobileTarget.classList.remove('interacting')
      }
    } else {
      this.mobileTarget.classList.add('interacting')
    }
  }

  validEntry(event) {
    let keyRegex = new RegExp('^(\\+|[0-9]|\\s)$')

    if (!keyRegex.test(event.key) && event.key != 'Backspace') {
      event.preventDefault();
    }
  }
  shapeNumber(event) {

    let valueRegex = new RegExp('^(\\+44.|44.|0)7[0-9]{3} [0-9]{6}$')

    if(event.target.value.match(/^\+44$/) && event.key != 'Backspace') {
      event.target.maxLength = 15
      event.target.value = event.target.value + ' '
    } else if(event.target.value.match(/^44$/) && event.key != 'Backspace') {
      event.target.maxLength = 14
      event.target.value = event.target.value + ' '
    } else if(event.target.value.match(/^(\+44|44) [0-9]{4}$/) && event.key != 'Backspace') {
      event.target.value = event.target.value + ' '
    } else if(event.target.value.match(/^[0-9]{5}$/) && event.key != 'Backspace') {
        event.target.maxLength = 12
        event.target.value = event.target.value + ' '
    }

    if (valueRegex.test(event.target.value) || (event.target.value.length <= 1 && event.key == 'Backspace')) {
      event.target.classList.remove('invalid')
      this.errorMsgTarget.classList.add('hide')
      this.okImgTarget.classList.remove('hide')
    } else {
      event.target.classList.add('invalid')
      this.errorMsgTarget.classList.remove('hide')
      this.okImgTarget.classList.add('hide')
    }

  }
}