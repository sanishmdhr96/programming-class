// function add(a, b) {
//     return a + b
// }

// function subtract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }

// function calculate(action, a, b) {
//     if ((a > 0 || a === 0) && (b > 0 || b === 0)) {
//         switch (action) {
//             case 'addition': {
//                 return add(a, b);
//             }
//             case 'subtraction': {
//                 return subtract(a, b);
//             }
//             case 'multiply': {
//                 return multiply(a, b);
//             }
//             case 'divide': {
//                 if (b === 0 || a === 0) {
//                     return 'Please enter a value greater than 0'
//                 }
//                 return divide(a, b);
//             }
//             default: {
//                 return 'Invalid Operation'
//             }
//         }
//     } else {
//         console.error('Please enter a valid number.')
//     }

// }

// const result1 = calculate('divide', 3, 1)
// console.log('result1', result1)

// let a = '999';
// let b = "22";

// console.log('type a', typeof parseInt(a))
// console.log("type b", typeof parseInt(b))

// const result = parseInt(a) / parseInt(b)

// console.log(parseFloat(result).toFixed(2))

const listContainer = document.getElementById("list-container");

// listContainer.innerHTML = `<ol>
//     <li>apple</li>
//     <li>banana</li>
//     <li>orange</li>
// </ol>`

// const array = ['apple', 'banana', 'orange', 'gwava', 'grapes', 'mango', 'kwiwi', 'pineapple']
// const orderedList = document.createElement('ol');

// for (let i = 0; i < array.length; i++) {
//     if (array[i] !== 'apple' && array[i] !== 'orange') {
//         const listItem = document.createElement('li')
//         listItem.innerText = array[i]
//         orderedList.appendChild(listItem)
//     }
// }

// listContainer.appendChild(orderedList)

const students = [
    {
        rollNumber: "70",
        studentName: "Sanish",
        classNumber: "9",
        subject: "Maths",
        remarks: "Pass",
    },
    {
        rollNumber: "80",
        studentName: "Manish",
        classNumber: "9",
        subject: "Maths",
        remarks: "Pass",
    },
    {
        rollNumber: "20",
        studentName: "Anish",
        classNumber: "9",
        subject: "Maths",
        remarks: "Pass",
    },
    {
        rollNumber: "30",
        studentName: "Ram",
        classNumber: "10",
        subject: "Science",
        remarks: "Pass",
    },
];

const tableBody = document.getElementById("table-body");
console.log(tableBody);


for (let i = 0; i < students.length; i++) {
    const tableRow = document.createElement("tr");

    const rollNumber = document.createElement("td");
    rollNumber.innerText = students[i].rollNumber;
    tableRow.appendChild(rollNumber);

    const studentName = document.createElement("td");
    studentName.innerText = students[i].studentName;
    tableRow.appendChild(studentName);

    const classNumber = document.createElement("td");
    classNumber.innerText = students[i].classNumber;
    tableRow.appendChild(classNumber);

    const subject = document.createElement("td");
    subject.innerText = students[i].subject;
    tableRow.appendChild(subject);

    const remarks = document.createElement("td");
    remarks.innerText = students[i].remarks;
    tableRow.appendChild(remarks);

    tableBody.appendChild(tableRow);
}



