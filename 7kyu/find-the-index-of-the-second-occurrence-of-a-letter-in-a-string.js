function secondSymbol(s, symbol) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === symbol) {
      count++;
      if (count >= 2) {
        return i;
      }
    }
  }
  return -1;
}