export default function cleanSet(set, startString) {
  let res = '';
  if (startString === '') {
    return '';
  }
  const len = startString.length;
  for (const element of set) {
    if (element.startsWith(startString)) {
      res += `${element.slice(len)}-`;
    }
  }
  return res.slice(0, -1);
}
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
