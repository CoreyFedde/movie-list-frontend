'use strict'
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const moviesTemplate = require('../templates/show-movies.handlebars')

// const gameStatus = {
//   over: false
// }

const onGetMovies = function (event) {
  api.getMovies()
  .then(function (data) {
    const moviesHTML = moviesTemplate({ movies: data.movies })
    $('.poster-board').prepend(moviesHTML)
    $('.remove-button').on('click', onDeleteMovie)
  })
  .catch(ui.failure)
}

const onGetOneMovie = function (event) {
  api.getOneMovie()
  .then(ui.onGetOneMovieSuccess)
  .catch(ui.failure)
}

const createNewMovie = function (event) {
  event.preventDefault()
  // console.log('starting console logs from createNewMovie')
  // console.log('this is store.user: ', store.user)
  // console.log('this is getFormFields(event.target): ', getFormFields(event.target))
  // console.log('this is getFormFields(this): ', getFormFields(this))
  const data = getFormFields(this)
  // console.log('this is event: ', event)
  // console.log('this is event.target: ', event.target)
  // console.log('this is data before newMovie runs: ', data)
  api.newMovie(data)
    .then(ui.createNewMovieSuccess)
    .catch(ui.failure)
}

const onDeleteMovie = function (event) {
  console.log('At least it clicked')
  api.deleteMovie()
    .then(ui.onDeleteMovieSuccess)
    .catch(ui.failure)
}

const onMovieUpdate = function () {
  event.preventDefault()
  const data = getFormFields(this)
  api.movieUpdate(data)
    .then(ui.onMovieUpdateSuccess)
    .catch(ui.failure)
}

module.exports = {
  createNewMovie,
  onGetMovies,
  onGetOneMovie,
  onDeleteMovie,
  onMovieUpdate
}
