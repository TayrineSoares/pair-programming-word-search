const transpose = function(letters) {
  const transposed = [];
  for (let i = 0; i < letters[0].length; i++) {
    transposed[i] = [];
    for (let j = 0; j < letters.length; j++) {
      transposed[i][j] = letters[j][i];
    }
  }
  return transposed;
};

// check horizontally
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }
  // check vertically
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word))
      return true;
  }
  return false;
};

module.exports = wordSearch;