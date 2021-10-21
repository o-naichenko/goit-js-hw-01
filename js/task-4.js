const orderedQuantity = prompt('Вкажіть необхідну кіль-ть')
let credits = 23580
const pricePerDroid = 3000

if (orderedQuantity === null) {
  console.log('Скасовано користувачем')
} else {
  const totalPrice = orderedQuantity * pricePerDroid
  totalPrice <= credits
    ? console.log(
        `Ви купили ${orderedQuantity} дроїдів, на рахунку лишилося ${
          credits - totalPrice
        } кредитів`
      )
    : console.log('Недостатньо коштів на рахунку')
}
