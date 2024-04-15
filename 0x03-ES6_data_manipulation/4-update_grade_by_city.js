export default function updateStudentGradeByCity(objArray, city, grades) {
  return objArray.filter(({ location }) => location === city).map((obj) => {
    grades.forEach((element) => {
      if (element.studentId === obj.id) {
        obj.grade = element.grade; // eslint-disable-line no-param-reassign
      }
    });
    return obj;
  });
}
