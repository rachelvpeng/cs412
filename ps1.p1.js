const reverseAlphabeticalOrder = str => str.split('').sort().reverse().join('');

console.log(`This is in reverse alphabetical order: ${reverseAlphabeticalOrder("supercalifragilisticexpialidocious")}`);