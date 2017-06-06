function parseInput(input) {
  var arr = input.split('\n');
  return {
    N: Number(arr[0].split(' ')[0]),
    queries: arr.slice(1).map(function(query) {
      var tmp = query.split(' ').map(function(each) {return Number(each)});
      return {
        type: tmp[0],
        x: tmp[1],
        y: tmp[2]
      }
    })
  }
}

module.exports = {
  parseInput: parseInput
};