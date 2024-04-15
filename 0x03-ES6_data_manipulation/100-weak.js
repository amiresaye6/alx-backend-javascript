export const weakMap = new WeakMap();

export default function queryAPI(endPoint) {
  let called = 0;
  if (weakMap.get(endPoint)) called = weakMap.get(endPoint);
  weakMap.set(endPoint, called + 1);
  if (called + 1 >= 5) throw new Error('Endpoint load is high');
}
