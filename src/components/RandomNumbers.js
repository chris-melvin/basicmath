export const RandomNumbers = (item, difficulty) => {
  let itemNumber = item;
  console.log(itemNumber);

  const randomNumber = (range) => {
    let num1 = Math.floor(Math.random() * range + 1);
    let num2 = Math.floor(Math.random() * range + 1);
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let qoutient = num1 / num2;
    let operation = Math.floor(Math.random() * 4 + 1);
    return {
      num1: num1,
      num2: num2,
      sum: sum,
      difference: difference,
      product: product,
      qoutient: qoutient,
      operation: operation,
    };
  };

  return randomNumber(difficulty);
};
