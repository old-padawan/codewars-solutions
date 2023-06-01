function borrow(s) {
  const regex = /[a-z]/gi;
  return (regex).test(s) ? s.match(regex).join('').toLowerCase() : '';
}