class Student {
    constructor(name, rollNumber) {
        this.id = this.generateString()
        this.name = name
        this.rollNumber = rollNumber
        this.classNumber = '9'
        this.subject = "Maths"
        this.remarks = "Pass"
    }

    generateString() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let length = 8
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}

class StudentManager {
    constructor() {
        this.students = [];
        this.selectedStudent = null;
        this.submitButton = document.getElementById('submitBtn');
        this.rollNumberInput = document.getElementById('rollNo');
        this.fullNameInput = document.getElementById('fullname');
        this.tableBody = document.getElementById("table-body");
        this.searchInput = document.getElementById('search');
        this.initializeEvents();
    }

    initializeEvents() {
        this.submitButton.addEventListener("click", () => this.handleSubmit());
    }

    handleSubmit() {
        const rollNo = this.rollNumberInput.value;
        const fullName = this.fullNameInput.value;

        if (this.selectedStudent) {
            this.selectedStudent.rollNumber = rollNo;
            this.selectedStudent.studentName = fullName;
            this.selectedStudent = null;
        } else if (this.students.some(student => student.rollNumber === rollNo)) {
            alert("Roll number already exists");
            return;
        } else {
            this.addStudent(rollNo, fullName);
        }

        this.displayStudentDetails(this.students);
    }

    displayStudentDetails(data) {
        this.tableBody.innerHTML = '';
        data.forEach(student => {
            /**
             * 
             * student = {
             * rollnumber:20,
             * studentName:'Sanis',
             * classNumber:9,
             * subject:"Math",
             * remarks:"Pass"
             * }
             */
            const tableRow = document.createElement("tr");

            const tableLabels = ["rollNumber", "studentName", "classNumber", "subject", "remarks"]
            tableLabels.forEach(key => {
                const td = document.createElement("td");
                td.innerText = student[key];
                tableRow.appendChild(td);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.onclick = () => this.deleteStudent(student.id);
            tableRow.appendChild(deleteBtn);

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.onclick = () => this.editStudent(student.id);
            tableRow.appendChild(editButton);

            this.tableBody.appendChild(tableRow);
        });

        this.rollNumberInput.value = '';
        this.fullNameInput.value = '';
    }

    addStudent(rollNo, fullName) {
        const newStudent = new Student(rollNo, fullName);
        this.students.push(newStudent);
        this.displayStudentDetails(this.students);
    }
}

document.addEventListener("DOMContentLoaded", () => new StudentManager());
