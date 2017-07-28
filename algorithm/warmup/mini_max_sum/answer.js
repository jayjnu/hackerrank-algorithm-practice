function answer(input) {
  const sum = input.reduce((acc, cur) => acc + cur, 0);
  const max = input.reduce((acc, cur) => sum - cur > acc ? sum - cur : acc, 0);
  const min = input.reduce((acc, cur) => sum - cur < acc ? sum - cur : acc, sum);
  return [min, max];
}

module.exports = answer;