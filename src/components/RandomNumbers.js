export const RandomNumbers = () => {
  const myArray = [];

  const randomNumber = (range) => {
    let num1 = Math.floor(Math.random() * range + 1);
    let num2 = Math.floor(Math.random() * range + 1);
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let qoutient = num1 / num2;
    return {
      num1: num1,
      num2: num2,
      sum: sum,
      difference: difference,
      product: product,
      qoutient: qoutient,
    };
  };

  for (let i = 0; i < 10; i++) {
    myArray.push(randomNumber(10));
  }
  return myArray;
};
