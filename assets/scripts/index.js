'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./ajax/api.js')

$(() => {
  setAPIOrigin(location, config)
  $('#signUpForm').on('submit', api.onSignUp)
  $('#signInForm').on('submit', api.onLogIn)
  $('#changePasswordForm').on('submit', api.onChangePassword)
  $('#signOutButton').on('click', api.onLogOut)
})

// let testF = function (arg) {
//   $(arg.target).text('ok')
// }

$('#toDoInput').bind("enterKey", function(e){
  console.log('enter')
})

$('#addTextButton').on("click", function () {
  if ($('#toDoInput').val() !== '') {
    let toDoItem = $('#toDoInput').val()
    $('#toDoList').append(`<li> ${toDoItem} </li>`)
    $('#toDoInput').val('')
  }
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
