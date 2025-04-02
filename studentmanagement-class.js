class Student {
    constructor(rollNumber, studentName) {
        this.id = Student.generateId();
        this.rollNumber = rollNumber;
        this.studentName = studentName;
        this.classNumber = "9";
        this.subject = "Maths";
        this.remarks = "Pass";
    }

    static generateId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return Array.from({ length: 8 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
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
        this.searchInput.addEventListener("input", () => this.searchData());
    }

    displayStudentDetails(data) {
        this.tableBody.innerHTML = '';
        data.forEach(student => {
            const tableRow = document.createElement("tr");

            ["rollNumber", "studentName", "classNumber", "subject", "remarks"].forEach(key => {
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

    deleteStudent(studentId) {
        this.students = this.students.filter(student => student.id !== studentId);
        this.displayStudentDetails(this.students);
    }

    editStudent(studentId) {
        this.selectedStudent = this.students.find(student => student.id === studentId);
        this.rollNumberInput.value = this.selectedStudent.rollNumber;
        this.fullNameInput.value = this.selectedStudent.studentName;
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

    searchData() {
        const searchValue = this.searchInput.value.toLowerCase();
        const filteredStudents = this.students.filter(student => student.studentName.toLowerCase().includes(searchValue));
        this.displayStudentDetails(filteredStudents);
    }
}

document.addEventListener("DOMContentLoaded", () => new StudentManager());
