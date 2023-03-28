function even(numbers) {
  let evenNums = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNums.push(numbers[i]);
    }
  }

  return evenNums;
}

const numbers = [2, 7, 4]
evenNumbers = even(numbers)
console.log(`Original array: ${numbers}`)
console.log(`New array: ${evenNumbers}`)
