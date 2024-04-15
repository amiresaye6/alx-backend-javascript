export default function getStudentIdsSum(objArray) {
    let sum = 0;
    objArray.reduce(({id,firstName, location }) => {
        sum += id;
    });
    return sum;
}


import getListStudents from "./0-get_list_students.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
