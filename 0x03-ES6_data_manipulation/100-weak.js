export const weakMap = new WeakMap();

// https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
export function queryAPI(endPoint) {
  let called = 0;
  if (weakMap.get(endPoint)) called = weakMap.get(endPoint);
  weakMap.set(endPoint, called + 1);
  if (called + 1 >= 5) throw new Error('Endpoint load is high');
}
