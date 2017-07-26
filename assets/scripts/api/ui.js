'use strict'
const moviesTemplate = require('../templates/show-movies.handlebars')
const movieTemplate = require('../templates/show-movie.handlebars')
const store = require('../store.js')

const getMoviesSuccess = (data) => {
  const moviesHTML = moviesTemplate({ movies: data.movies })
  $('.poster-board').prepend(moviesHTML)
}
const onGetOneMovieSuccess = (data) => {
  const moviesHTML = movieTemplate({ movie: data.movie })
  $('.poster-board').prepend(moviesHTML)
}
const createNewMovieSuccess = (data) => {
  store.movie = data.movie
  $('.form-control').val('')
  $('.form-control').attr('placeholder', '')
}
const onMovieUpdateSuccess = (data) => {
}
const onDeleteMovieSuccess = (data) => {
  clear()
}
const onSignUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('.form-control').val('')
  $('.form-control').attr('')
}
const onLogInSuccess = (data) => {
  $('#signInModal').modal('hide')
  $('#signUpModal').modal('hide')
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#signInButton2').hide()
  $('#signUpButton2').hide()
  $('.cover').hide()
  $('#changePasswordButton').show()
  $('#logOutButton').show()
  $('.poster-board').show()
  $('.create-list-box').show()
  $('.form-control').val('')
  $('.form-control').attr('placeholder', '')
  $('#instructions').text('Never run out of movie ideas again!')
  $('html, body').animate({
    scrollTop: $('#listStart').offset().top
  }, 1000)
}
const onChangePasswordSuccess = (data) => {
  $('.form-control').val('')
  $('.form-control').attr('placeholder', '')
  $('#changePasswordModal').modal('hide')
}
const onLogOutSuccess = (data) => {
  clear()
  $('.form-control').val('')
  $('.form-control').attr('placeholder', '')
  $('#signInButton').show()
  $('#signUpButton').show()
  $('#signInButton2').show()
  $('#signUpButton2').show()
  $('.cover').show()
  $('#changePasswordButton').hide()
  $('#logOutButton').hide()
  $('.poster-board').hide()
  $('.create-list-box').hide()
  $('#headerBox').removeClass('highlight')
  $('#changingText').text('Your Indie_List')
}

const failure = () => {
  $('.form-control').val('')
}

const signUpFailure = () => {
  $('.form-control').val('')
  $('.signUpFormElement').attr('placeholder', 'Oops! Please try again.')
}

const signInFailure = () => {
  $('.form-control').val('')
  $('.signInFormElement').attr('placeholder', 'Oops! Please try again.')
}

const changePasswordFailure = () => {
  $('.form-control').val('')
  $('.changePasswordFormElement').attr('placeholder', 'Oops! Please try again.')
}

const addNotesFailure = () => {
  $('.form-control').val('')
  $('.notes-form-input').attr('placeholder', 'Oops! Please try again.')
}

const addMovieFailure = () => {
  $('.form-control').val('')
  $('.create-class').attr('placeholder', 'Oops! Please try again.')
}

const clear = function () {
  $('#board').empty()
}

const chooseMovie = function () {
  const choices = $('.list')
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  const movieTitle = $(randomChoice).children().children().children('.movie-title').text()
  $('#changingText').text('Watch: ' + movieTitle)
  choices.removeClass('choice')
  $(randomChoice).addClass('choice')
  $('#headerBox').addClass('highlight')
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
  clear,
  chooseMovie,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  addNotesFailure,
  addMovieFailure
}
