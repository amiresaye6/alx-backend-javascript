export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  const arr = new ArrayBuffer(length);
  const int8 = new Int8Array(arr, 0, length);
  int8.set([value], position);
  return new DataView(arr);
}
