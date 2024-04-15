export default function updateUniqueItems(mapo) {
  if (mapo instanceof Map) {
    for (const [key, val] of mapo.entries()) {
      if (val === 1) {
        mapo.set(key, 100);
      }
    }
    return mapo;
  }
  throw Error('Cannot process');
}
