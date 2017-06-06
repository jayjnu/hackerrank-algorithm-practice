function SeqList(N) {
  this.N = N;
  this.lastAnswer = 0;
  this.elements = [];

  while (N--) {
    this.elements.push([]);
  }
}

SeqList.prototype = {
  find: function(query) {
    var N = this.N;
    var idx = (query.x ^ this.lastAnswer) % N;
    var seq = this.elements[idx];
    if (query.type === 1) {
      seq.push(query.y);
    } else {
      this.lastAnswer = seq[query.y % seq.length];
      console.log(this.lastAnswer);
      return this.lastAnswer;
    }
  }
};

module.exports = {
  SeqList: SeqList 
};