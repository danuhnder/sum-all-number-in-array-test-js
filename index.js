const sumItems = function(array) {
  let sum = 0;
  array.forEach(x => {
    if (Array.isArray(x)) {
      sum += sumItems(x);
    } else sum += x;
  });
  return sum;
};

module.exports = sumItems;
