export default function getStudentsByLocation(objArray, city) {
  // if any errors occured, you should check for the type of objArray to be list
  // and city to be string
  return objArray.filter(({ location }) => location === city).map((obj) => obj);
}
