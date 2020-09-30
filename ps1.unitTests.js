const {reverseAlphabeticalOrder} = require('./ps1.p1');
const {doOperation} = require('./ps1.p2');
const {executeDecorator, expression1, expression2} = require('./ps1.p3');

const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('unit tests for p1', () => {
  let reversedString = reverseAlphabeticalOrder("supercalifragilisticexpialidocious");

  it('should return the given string in reverse alphabetical order', () => {
    expect(reversedString).to.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
  });

  it('should have a return type of string', () => {
    expect(reversedString).to.be.a('string');
  })
});

describe('unit tests for p2', () => {
  it('should return an integer, 8, when passed "5+3"', () => {
    let completedOperation = doOperation('5+3')();
    expect(completedOperation).to.equal(8);
    expect(completedOperation).to.be.a('number')
  });

  it('should return an integer, 2, when passed "5-3"', () => {
    let completedOperation = doOperation('5-3')();
    expect(completedOperation).to.equal(2);
    expect(completedOperation).to.be.a('number')
  });

  it('should return an integer, 15, when passed "5*3"', () => {
    let completedOperation = doOperation('5*3')();
    expect(completedOperation).to.equal(15);
    expect(completedOperation).to.be.a('number')
  });

  it('should return an integer, 2, when passed "6/3"', () => {
    let completedOperation = doOperation('6/3')();
    expect(completedOperation).to.equal(2);
    expect(completedOperation).to.be.a('number')
  });

  it('should return an integer, 125, when passed "5^3"', () => {
    let completedOperation = doOperation('5^3')();
    expect(completedOperation).to.equal(125);
    expect(completedOperation).to.be.a('number')
  });
});

describe('unit tests for p3 using exported expressions', () => {
  it('should return an array containing fragments of the input string broken on the character "c"', () => {
    let decoratorExecutedExpression1 = expression1;
        expect(decoratorExecutedExpression1).to.deep.equal(['super', 'califragilisti', 'cexpialido', 'cious']);
  });

  it('should return an object that contains the original string, the modified string, the total number of As in the modified string, and the overall length of the modified string', () => {
    let decoratorExecutedExpression2 = expression2;
    expect(decoratorExecutedExpression2).to.deep.equal({
      originalString: "supercalifragilisticexpialidocious",
      modifiedString: "supercAlifrAgilisticexpiAlidocious",
      numberReplaced: 3,
      length: 34
    });

  });
});

describe('unit tests for p3 without using exported expressions', () => {
  it('should return an array containing fragments of the input string broken on the character "c"', () => {
    let decoratorExecutedExpression1 = executeDecorator('supercalifragilisticexpialidocious', (str) => str.replace(/c/g, ",c").split(","));;
        expect(decoratorExecutedExpression1).to.deep.equal(['super', 'califragilisti', 'cexpialido', 'cious']);
  });

  it('should return an object that contains the original string, the modified string, the total number of As in the modified string, and the overall length of the modified string', () => {
    let decoratorExecutedExpression2 = executeDecorator('supercalifragilisticexpialidocious', (str) => {
      let modifiedString = str.replace(/a/g, "A");
    
      let strObject = {
        originalString: str,
        modifiedString: modifiedString,
        numberReplaced: str.match(/a/g).length,
        length: modifiedString.length
      }
    
      return strObject
    });
    expect(decoratorExecutedExpression2).to.deep.equal({
      originalString: "supercalifragilisticexpialidocious",
      modifiedString: "supercAlifrAgilisticexpiAlidocious",
      numberReplaced: 3,
      length: 34
    });

  });
});