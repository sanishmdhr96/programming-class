const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const students = [];

let selectedStudent = null;

const submitButton = document.getElementById('submitBtn')

const rollNumberInput = document.getElementById('rollNo')
const fullNameInput = document.getElementById('fullname')

const displayStudentDetails = (data) => {
    const tableBody = document.getElementById("table-body");

    console.log('-------- Student Display Process Started --------')

    console.log('-------- Clear Table Data --------')

    tableBody.innerHTML = '';

    for (let i = 0; i < data.length; i++) {

        const tableRow = document.createElement("tr");

        const rollNumber = document.createElement("td");
        rollNumber.innerText = data[i].rollNumber;
        tableRow.appendChild(rollNumber);

        const studentName = document.createElement("td");
        studentName.innerText = data[i].studentName;
        tableRow.appendChild(studentName);

        const classNumber = document.createElement("td");
        classNumber.innerText = data[i].classNumber;
        tableRow.appendChild(classNumber);

        const subject = document.createElement("td");
        subject.innerText = data[i].subject;
        tableRow.appendChild(subject);

        const remarks = document.createElement("td");
        remarks.innerText = data[i].remarks;
        tableRow.appendChild(remarks);

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Delete'
        deleteBtn.onclick = () => deleteStudentData(data[i].id)
        tableRow.appendChild(deleteBtn)

        const editButton = document.createElement('button')
        editButton.innerText = 'Edit'
        editButton.onclick = () => editStudentData(data[i].id)
        tableRow.appendChild(editButton)

        tableBody.appendChild(tableRow);

    }
    rollNumberInput.value = null
    fullNameInput.value = ''
    console.log('-------- Student Display Process Completed --------')

}

const deleteStudentData = (studentId) => {
    // Find the index of selected student data
    const studentIds = students.map(item => item.id)
    const index = studentIds.indexOf(studentId)

    // Remove the data
    students.splice(index, 1)

    // Display new data
    displayStudentDetails(students)

}

const editStudentData = (studentId) => {
    // Find the index of selected student data
    const studentData = students.find(student => student.id === studentId)

    selectedStudent = studentData;

    rollNumberInput.value = studentData.rollNumber
    fullNameInput.value = studentData.studentName

}

const addDataToStudentList = (rollNo, fullname) => {
    const studentObj = {
        id: generateString(8),
        rollNumber: rollNo,
        studentName: fullname,
        classNumber: "9",
        subject: "Maths",
        remarks: "Pass",
    }

    console.log('-------- New Student Details --------', studentObj)

    students.push(studentObj)

    console.log('-------- Student Array After --------', students)

    displayStudentDetails(students)
}

submitButton.addEventListener("click", () => {
    //    1. Get values from input
    const rollNo = rollNumberInput.value
    const fullname = fullNameInput.value

    console.log('--------------------------------------')

    console.log('-------- Student Array Before --------', students)

    console.log('-------- Checking for Existing Roll Number --------', rollNo)

    // const rollNumberExists = students.filter((item, idx) => parseInt(item.rollNo) === parseInt(rollNo))
    const rollNumberExists = students.find((item) => parseInt(item.rollNumber) === parseInt(rollNo))

    if (selectedStudent?.id) {
        const studentIds = students.map(student => student.id)
        const studentDataIndex = studentIds.indexOf(selectedStudent?.id)

        students[studentDataIndex].rollNumber = rollNo;
        students[studentDataIndex].studentName = fullname;

        displayStudentDetails(students)
    }
    else if (rollNumberExists && rollNumberExists.rollNumber) {
        alert("Roll number already exists")

    } else {
        addDataToStudentList(rollNo, fullname)
    }
})

function searchData() {
    //search logic

    // 1. Get search input
    const searchInput = document.getElementById('search').value

    // 2. Filter search input from the students array
    const filteredData = students.filter((student) => student.studentName === searchInput
    )

    // 3. Display Data
    displayStudentDetails(filteredData)

}

// const students = [
//     { name: "Ram", age: 20 },
//     { name: "Hari", age: 22 },
//     {
//         name: "Shiva",
//         age: 18,
//     },
//     {
//         name: "Christ",
//         age: 25,
//     },
//     {
//         name: "OM",
//         age: 16,
//     },
//     {
//         name: "Krishna",
//         age: 17,
//     },
// ];

// // current year - age -> 2025 - 18 => 2007

// const filteredStudents = students.filter(student => {
//     const yearOfBirth = 2025 - student?.age
//     const thresholdYear = 2005;

//     if (yearOfBirth > thresholdYear) {
//         student.year = yearOfBirth
//         return student
//     }
// })



// console.log('filteredStudents', filteredStudents)

// const products = [
//     { name: 'Laptop', price: 1000, inStock: true },
//     { name: 'Phone', price: 600, inStock: false },
//     { name: 'Tablet', price: 400, inStock: true },
// ];

// const filteredData = products.filter(item => item.inStock)
// console.log('filteredData', filteredData)

