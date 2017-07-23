'use strict'
const store = require('../store.js')
const config = require('../config.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// const gameStatus = {
//   over: false
// }

// WILL NEED TO SET TITLE TO A VAR

// const newMovie = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/movies/',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'movie': {
//         'title': 'Rush Hour',
//         'notes': 'always great'
//       }
//     }
//   })
// }

const newMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getMovies = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneMovie = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + 5,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMovie = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + 5,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const movieUpdate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onGetMovies = function (event) {
  getMovies()
  .then(ui.getMoviesSuccess)
  .catch(ui.failure)
}

const onGetOneMovie = function (event) {
  getOneMovie()
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
  newMovie(data)
    .then(function (data) {
      store.movie = data.movie
      ui.createNewMovieSuccess()
    })
    .catch(ui.failure)
}

const onDeleteMovie = function (event) {
  deleteMovie()
    .then(ui.onDeleteMovieSuccess)
    .catch(ui.failure)
}

const onMovieUpdate = function () {
  event.preventDefault()
  const data = getFormFields(this)
  movieUpdate(data)
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
