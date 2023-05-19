function tail(arra) {
  if (arra.length <= 1) {
    return [];
  }
  return arra.slice(1);
};
module.exports = tail;

