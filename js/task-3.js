let password = prompt('Password')
const ADMIN_PASSWORD = 'jqueryismyjam'
let message

if (password === null) {
  message = 'Скасовано користувачем'
} else if (password === ADMIN_PASSWORD) {
  message = 'Ласкаво просимо'
} else {
  message = 'Доступ заборонено, невірний пароль'
}

alert(message)
