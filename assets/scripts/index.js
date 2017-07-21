'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const getFormFields = require('../../lib/get-form-fields.js')
const user = require('./api/user.js')
const api = require('./api/api-interactions.js')

$(() => {
  setAPIOrigin(location, config)
  $('#signUpForm').on('submit', user.onSignUp)
  $('#signInForm').on('submit', user.onLogIn)
  $('#changePasswordForm').on('submit', user.onChangePassword)
  $('#signOutButton').on('click', user.onLogOut)
  $('#createButton').on('click', api.createNewList)
  $('#getListsButton').on('click', api.onGetLists)
  $('#getOneListButton').on('click', api.onGetOneList)
  $('#deleteButton').on('click', api.onDeleteList)
})

// let testF = function (arg) {
//   $(arg.target).text('ok')
// }

// $('#toDoInput').bind("enterKey", function(e){
//   console.log('enter')
// })

$('#addTextButton').on('click', function () {
  if ($('#toDoInput').val() !== '') {
    const toDoItem = $('#toDoInput').val()
    $('#toDoList').append(`<li> ${toDoItem} </li>`)
    $('#toDoInput').val('')
  }
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
