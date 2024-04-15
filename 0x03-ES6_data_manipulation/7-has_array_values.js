export default function hasValuesFromArray(set, array) {
  for (const num of array) {
    if (!set.has(num)) {
      return false;
    }
  }
  return true;
}
