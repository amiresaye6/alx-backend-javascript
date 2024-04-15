export default function getStudentIdsSum(objArray) {
  return objArray.map(({ id }) => id).reduce((acc, id) => id + acc);
}
