export default function updateStudentGradeByCity(objArray, city, grades) {
  return objArray.filter(({ location }) => location === city).map((obj) => {
    let newGrade = 'N/A';
    grades.forEach((element) => {
      if (element.studentId === obj.id) {
        newGrade = element.grade ? element.grade : 'N/A';
      }
    });
    return { ...obj, grade: newGrade };
  });
}
