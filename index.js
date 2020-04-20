import Password from './src/Models/Password.js'
import Char from './libs/charcode-list.js'

const submit = document.querySelector('#submit')
const length = document.querySelector('#length')
const passwordResult = document.querySelector('#passwordResult')

submit.addEventListener('click', e => {
  e.preventDefault()
  const typesList = listCheckedBox()
  if (typesList.length > 0) {
    const newPassword = generate(length.value, typesList)
    passwordResult.value = newPassword
  }
})

function listCheckedBox() {
  const checkboxes = [...document.querySelectorAll('input[type=checkbox]')]
    .filter(checkbox => {
      return checkbox.checked
    })
    .map(checkbox => {
      return checkbox.id
    })
  return checkboxes
}

function generate(length, types) {
  const password = new Password(Char.charsets)

  return password.generatePassword(length, types)
}
