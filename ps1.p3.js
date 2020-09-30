const executeDecorator = (str, decorator) => decorator(str);

const expression1 = executeDecorator('supercalifragilisticexpialidocious', (str) => str.replace(/c/g, ",c").split(","));

const expression2 = executeDecorator('supercalifragilisticexpialidocious', (str) => {
  let modifiedString = str.replace(/a/g, "A");

  let strObject = {
    originalString: str,
    modifiedString: modifiedString,
    numberReplaced: str.match(/a/g).length,
    length: modifiedString.length
  }

  return strObject
})
console.table({expression2});

module.exports = {executeDecorator, expression1, expression2};