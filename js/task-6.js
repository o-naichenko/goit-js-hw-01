let input
let total = 0

do {
  input = prompt('Введіть число')
  isNaN(input)
    ? alert('Було введено не число, спробуйте знову')
    : (total += Number(input))
} while (input !== null)

console.log(`Загальна сума чисел дорівнює ${total}`)
