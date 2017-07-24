'use strict'
const moviesTemplate = require('../templates/show-movies.handlebars')
const movieTemplate = require('../templates/show-movie.handlebars')
const store = require('../store.js')

const getMoviesSuccess = (data) => {
  console.log(data)

  const moviesHTML = moviesTemplate({ movies: data.movies })
  $('.poster-board').prepend(moviesHTML)
}
const onGetOneMovieSuccess = (data) => {
  console.log(data)
  console.log('Successful onGetOneMovie')
  const moviesHTML = movieTemplate({ movie: data.movie })
  $('.poster-board').prepend(moviesHTML)
}
const createNewMovieSuccess = (data) => {
  store.movie = data.movie
  console.log('store.move: ', store.movie)
  console.log('Successful onCreateNewMovie')
}
const onMovieUpdateSuccess = (data) => {
  console.log('Successful onMovieUpdate')
}
const onDeleteMovieSuccess = (data) => {
  console.log('Successful onDeleteMovie')
  clear()
}
const onSignUpSuccess = (data) => {
  console.log('Successful onSignUp')
  $('#signUpModal').modal('hide')
}
const onLogInSuccess = (data) => {
  console.log('Successful onLogIn')
  $('#signInModal').modal('hide')
  $('#signUpModal').modal('hide')
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#changePasswordButton').show()
  $('#logOutButton').show()
}
const onChangePasswordSuccess = (data) => {
  console.log('Successful onChangePassword')
  $('#changePasswordModal').modal('hide')
}
const onLogOutSuccess = (data) => {
  console.log('Successful onLogOut')
  clear()
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
}

const failure = (error) => {
  console.error(error)
}

const clear = function () {
  $('#board').empty()
}

module.exports = {
  getMoviesSuccess,
  onGetOneMovieSuccess,
  createNewMovieSuccess,
  onDeleteMovieSuccess,
  onMovieUpdateSuccess,
  onSignUpSuccess,
  onLogInSuccess,
  onChangePasswordSuccess,
  onLogOutSuccess,
  failure,
  clear
}
