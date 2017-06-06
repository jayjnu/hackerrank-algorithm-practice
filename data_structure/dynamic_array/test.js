const SeqList = require('./answer').SeqList;
const expect = require('chai').expect;
const input = require('./util').parseInput(require('./input'));

console.log(input);

const testCases = [input];

describe('seqList', function(){
  testCases.forEach(function(testCase) {
    const N = testCase.N;
    const seq = new SeqList(N);
    const elements = seq.elements;

    describe('.elements', function() {

      describe('.length', function() {
        it(`should be equal to ${N}`, function() {
          expect(elements.length).to.equal(N);
        });
      });

      describe('type of each element', function() {
        it('should be Array', function() {
          expect(Array.isArray(elements[N-1])).to.equal(true);
        })
      });
    });

    describe('#find()', function() {
      it(`should print 7, 3`, function() {
        var result = testCase.queries.map(function(query) {
          return seq.find(query);
        }).filter(function(a){return !!a});
        expect(result.join(', ')).to.equal('7, 3');
      });
    });
  });

});