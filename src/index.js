module.exports = function check(str, bracketsConfig) {
  let openBrackets = bracketsConfig.map(([open, close]) => open);
  let closeBrackets = bracketsConfig.map(([open, close]) => close);
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let multi = openBrackets.includes(str[i]) && closeBrackets.includes(str[i]);
    let stackTop = stack[stack.length - 1];
    let current = str[i];

    if (multi && stackTop === current) {
      stack.pop();
    } else if (openBrackets.includes(current)) {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (
        stackTop ===
        bracketsConfig.filter((item) => item.includes(current))[0][0]
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
