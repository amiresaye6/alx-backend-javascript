export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
    .join('-');
}

// export default function cleanSet(set, startString) {
//   let res = '';
//   if (startString === '') {
//     return '';
//   }
//   const len = startString.length;
//   for (const element of set) {
//     if (element.startsWith(startString)) {
//       res += `${element.slice(len)}-`;
//     }
//   }
//   return res.slice(0, -1);
// }
