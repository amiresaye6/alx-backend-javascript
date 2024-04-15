export default function updateStudentGradeByCity(objArray, city, grades) {
    return objArray.filter(({ location }) => location === city).map((obj) => {
        grades.forEach(element => {
            if (element.studentId === obj.id) {
                obj.grade = element.grade;
            }
        });
    })
}


import getListStudents from "./0-get_list_students.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
