// Add Multiple Users and Display List
// Objective: Collect multiple user entries and display them in a list on the webpage.
// Instructions:
// 1.  Create an HTML form with name and age fields and a submit button. 

// 2.  Create a JavaScript class called UserList. 

// 3.  When the form is submitted, add the user details to an array. 

// 4.  Display the list of users on the webpage dynamically. 

// Example Output on Page:
// 1. John Doe, Age: 25
// 2. Jane Smith, Age: 30   


class UserList {
    constructor() {
        this.users = []
        this.name = ''
        this.age = ''
        this.nameField = document.getElementById('username')
        this.ageField = document.getElementById('age')
        this.submitButton = document.getElementById('submitBtn')
        this.resultBox = document.getElementById('result')
        this.initalizeEvents()
    }

    initalizeEvents() {
        this.submitButton.addEventListener('click', (event) => this.getUserInputs(event))
    }

    getUserInputs(event) {
        event.stopPropagation();
        console.log(event)
        this.name = this.nameField.value
        this.age = this.ageField.value
        this.users.push({ name: this.name, age: this.age })
        this.displayResult()
    }

    displayResult() {
        const ulComp = document.createElement('ul')
        this.users.forEach(item => {
            const liComp = document.createElement('li')
            liComp.innerHTML = `Name: ${item.name}, Age: ${item.age}`
            ulComp.appendChild(liComp)
        })
        this.resultBox.innerHTML = ""
        this.resultBox.appendChild(ulComp)
    }
}

document.addEventListener('DOMContentLoaded', new UserList())



