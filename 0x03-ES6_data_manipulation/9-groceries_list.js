export default function groceriesList() {
  const mapo = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(obj)) {
    mapo.set(key, obj[key]);
  }
  return mapo;
}
