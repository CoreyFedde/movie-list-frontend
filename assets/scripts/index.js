'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const getFormFields = require('../../lib/get-form-fields.js')
const user = require('./api/user.js')
const interactions = require('./api/interactions.js')
const ui = require('./api/ui.js')

$(() => {
  setAPIOrigin(location, config)
  $('#signUpForm').on('submit', user.onSignUp)
  $('#signInForm').on('submit', user.onLogIn)
  $('#changePasswordForm').on('submit', user.onChangePassword)
  $('#logOutButton').on('click', user.onLogOut)
  $('#apiAddMovieForm').on('submit', interactions.createNewMovie)
  // $('#apiAddMovieForm').on('submit', interactions.onGetMovies)
  $('#getListsButton').on('click', interactions.onGetMovies)
  $('#getOneListButton').on('click', interactions.onGetOneMovie)
  $('#removeAllButton').on('click', ui.clear)
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('.poster-board').hide()
  $('.create-list-box').hide()
  $('#updateForm').on('submit', interactions.onMovieUpdate)
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
