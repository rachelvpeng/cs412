const doOperation = (str) => {
  let [left, operator, right] = [parseInt(str[0]), str[1], parseInt(str[2])];

  switch (operator) {
    case '+':
      return () => left + right;
    case '-':
      return () => left - right;
    case '*':
      return () => left * right;
    case '/':
      return () => left / right;
    case '^':
      return () => left ** right;
  }
}

const expression = "2^3";


console.log(`${expression} = ${doOperation(expression)()}`);


