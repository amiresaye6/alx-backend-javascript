export default function appendToEachArrayValue(array, appendString) {
    let idx = 0;
  for (let value of array) {
    array[idx] = appendString + value;
    idx++;
  }

  return array;
}
