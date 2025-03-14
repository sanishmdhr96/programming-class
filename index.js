
const students = [];

const submitButton = document.getElementById('submitBtn')

const rollNumberInput = document.getElementById('rollNo')
const fullNameInput = document.getElementById('fullname')


const displayStudentDetails = () => {
    const tableBody = document.getElementById("table-body");

    console.log('-------- Student Display Process Started --------')

    console.log('-------- Clear Table Data --------')

    tableBody.innerHTML = '';

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

    console.log('-------- Student Display Process Completed --------')

}

const addDataToStudentList = (rollNo, fullname) => {
    const studentObj = {
        rollNumber: rollNo,
        studentName: fullname,
        classNumber: "9",
        subject: "Maths",
        remarks: "Pass",
    }

    console.log('-------- New Student Details --------', studentObj)

    students.push(studentObj)

    console.log('-------- Student Array After --------', students)

    displayStudentDetails()
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

    if (rollNumberExists && rollNumberExists.rollNumber) {
        alert("Roll number already exists, please assign another roll number")
    } else {
        addDataToStudentList(rollNo, fullname)
    }
})







