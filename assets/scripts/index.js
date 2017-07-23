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
  $('#apiAddMovieForm').on('submit', api.createNewMovie)
  $('#apiAddMovieForm').on('submit', api.onGetMovies)
  // $('#getListsButton').on('click', api.onGetMovies)
  $('#getOneListButton').on('click', api.onGetOneMovie)
  $('#deleteButton').on('click', api.onDeleteMovie)
})

$('document').on('click', '.poster-board', function (event) {
  console.log(this.id)
  console.log('click')
  $('#board').toggle()
})

// let testF = function (arg) {
//   $(arg.target).text('ok')
// }

// $('#toDoInput').bind("enterKey", function(e){
//   console.log('enter')
// })
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
