const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
  return undefined;
};
module.exports = findKeyByValue;