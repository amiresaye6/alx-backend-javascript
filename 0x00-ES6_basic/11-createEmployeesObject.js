export default function createEmployeesObject(departmentName, employees) {
  let response = {}
  let tempArray = []
  for (const deparment in departmentName) {
    for (const employee of employees) {
      tempArray.append(employee);
    }
    response[`${deparment}`] = tempArray;
  }
  return response;
}
