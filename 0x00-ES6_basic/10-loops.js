export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const value of array) {
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
    idx += 1;
  }

  return array;
}
