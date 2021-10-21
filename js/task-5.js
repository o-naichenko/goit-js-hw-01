const estimatedCountry = prompt('Введіть назву країни').toLowerCase()
const countryName =
  estimatedCountry[0].toUpperCase() + estimatedCountry.slice(1).toLowerCase()
let price

switch (countryName) {
  case 'Китай':
    price = 100
    break
  case 'Чилі':
    price = 250
    break
  case 'Австралія':
    price = 170
    break
  case 'Індія':
    price = 80
    break
  case 'Ямайка':
    price = 120
    break
  default:
    alert('У вашій країні доставка недоступна')
    break
}

if (price !== undefined) {
  console.log(`Доставка в ${estimatedCountry} буде коштувати ${price} кредитів`)
}
