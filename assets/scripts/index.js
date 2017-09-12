'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
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
  $('#getListsButton').on('click', interactions.onGetMovies)
  $('#getOneListButton').on('click', interactions.onGetOneMovie)
  $('#removeAllButton').on('click', ui.clear)
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('.poster-board').hide()
  $('.create-list-box').hide()
  $('.addNotesForm').hide()
  $('#updateForm').on('submit', interactions.onMovieUpdate)
  $('#chooseMovieButton').on('click', ui.chooseMovie)
})

// use require without a reference to ensure a file is bundled
require('./example')
