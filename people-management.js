class Person {
    constructor() {
        this.name = ''
        this.address = ''
        this.phoneNumber = ''
        this.nameField = document.getElementById('name')
        this.addressField = document.getElementById('address')
        this.phoneNumberField = document.getElementById('phoneNumber')
        this.submitButton = document.getElementById('submitBtn')
        this.initializeEvents()
    }

    initializeEvents() {
        this.submitButton.addEventListener('click', () => this.getInputs())
    }

    getInputs() {
        this.name = this.nameField.value
        this.address = this.addressField.value
        this.phoneNumber = this.phoneNumberField.value

        alert(`${this.name} - ${this.address} - ${this.phoneNumber}`)
    }
}

document.addEventListener('DOMContentLoaded', new Person())