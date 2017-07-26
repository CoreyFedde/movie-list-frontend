'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')
const config = require('../config.js')
const ui = require('./ui.js')
const interactions = require('./interactions.js')
// API
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logOut = function () {
  return $.ajax({
    url: config.apiOrigin + `/sign-out/` + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  signUp(data)
    .then(function (response) {
      ui.onSignUpSuccess
      const authData = {
        credentials: {
          email: data.credentials.email,
          password: data.credentials.password
        }
      }
      signIn(authData)
      .then(function (data) {
        store.user = data.user
        ui.onLogInSuccess()
        interactions.onGetMovies()
        $('#deleteButton').on('click', interactions.onDeleteMovie)
      })
      .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  signIn(data)
  .then(function (data) {
    store.user = data.user
    ui.onLogInSuccess()
    interactions.onGetMovies()
    $('.form-control').val('')
    // $('#tempText').text('Nice! You logged in! Now click on New Game to start a game!')
  })
  .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.failure)
}

const onLogOut = function (event) {
  event.preventDefault()
  logOut()
  .then(ui.onLogOutSuccess)
  .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut
}
