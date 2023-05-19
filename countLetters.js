function countLetters(words) {
  const counts = {};  
  for (const char of words) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}
module.exports = countLetters;

