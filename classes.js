// // 
// class Car {
//     constructor(brand, model, year, color) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//         this.color = color
//     }


//     getCarModel() {
//         console.log(this.brand)
//     }
// }

// const car1 = new Car('BYD', 'ATTO3', '2024', 'red')
// car1.getCarModel()

// const car2 = new Car('TATA', 'TIAGO', '2024', 'red')
// car2.getCarModel()

// let brand, model, year, color = null

// function getCarInput(b, m, y, c) {
//     brand = b
//     model = m
//     year = y
//     color = c
// }
// function getCarModel() {
//     console.log(brand)
// }
// function getCarModel() {
//     console.log(brand)
// }
// function getCarModel() {
//     console.log(brand)
// }
// function getCarModel() {
//     console.log(brand)
// }
// function getCarModel() {
//     console.log(brand)
// }
// function getCarModel() {
//     console.log(brand)
// }
// function getCarModel() {
//     console.log(brand)
// }




// // class AfnaiConsole {

// //     constructor(message) {
// //         this.value = message
// //     }
// // 
// //     afnaiLog() {
// //         console.log(this.value)
// //     }

// // }

// // const afnaiConsole = new AfnaiConsole('ssss')
// // afnaiConsole.afnaiLog()

// // console.




/**
 *
 * Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details. */

// class Person {
//     constructor(name, age, country) {
//         this.name = name
//         this.age = age
//         this.country = country
//     }

//     displayDetail() {
//         console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`)
//     }


//     displayAge() {
//         return `Age: ${this.age}`
//     }
// }

// const person1 = new Person('Sanish', '28', 'Switzerland');
// person1.displayDetail()
// let reveiw = person1.displayAge()
// console.log('display', reveiw)

// const person2 = new Person('Ram', '20', 'Nepal');
// person2.displayDetail()

/**
 * Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
 * area = h*w
 * perimeter = 2(h+w)
 */


// class Person {
//     constructor(name, dob) {
//         this.name = name
//         this.dob = dob
//         this.todayDate = new Date().getFullYear()
//         this.studentage = ''
//     }

//     calculateAge() {
//         this.studentage = this.todayDate - new Date(this.dob).getFullYear()
//     }
// }

// class Student extends Person {
//     constructor(name, dob, classNumber, rollno) {
//         super(name, dob);
//         this.classNumber = classNumber
//         this.rollno = rollno
//     }

//     displayStudentDetails() {
//         console.log(`${this.name} - ${this.dob} - ${this.classNumber} - ${this.rollno}`)
//     }
// }


// const student = new Student('Ram', '03/31/1997', '5', '22').displayStudentDetails()
// student.calculateAge()
// console.log(student.studentage)

