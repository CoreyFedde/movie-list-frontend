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

// const gameUpdates = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

const onGetMovies = function (event) {
  getMovies()
  .then(ui.getMoviesSuccess)
  .catch(ui.failure)
}

const onGetOneMovie = function (event) {
  getOneMovie()
  .then(function (data) {
    console.log('k')
    console.log('Work! also here is data: ', data)
  })
  .catch(function (data) {
  })
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
      console.log('this is data: ', data)
      // console.log('ending console logs from createNewMovie')
      store.movie = data.movie
    })
    .catch(function (data) {
      console.log('createNewMovie did not work')
      console.log('this is data: ', data)
      // console.log('ending console logs from createNewMovie')
    })
}

const onDeleteMovie = function (event) {
  deleteMovie()
    // .then(function () {
    //   console.log('Delete success')
    // })
    // .else(function () {
    //   console.log('Delete not successful')
    // })
}

// const getGameUpdates = function () {
//   event.preventDefault()
//   const currIndex = $('.game').index(event.target)
//   const newValue = $(event.target).text()
//   const data = {
//     'game': {
//       'cell': {
//         'index': currIndex,
//         'value': newValue
//       },
//       'over': gameStatus.over
//     }
//   }
//   gameUpdates(data)
//     .then(function (data) {
//     })
//     .catch(function (data) {
//     })
// }

module.exports = {
  createNewMovie,
  onGetMovies,
  onGetOneMovie,
  onDeleteMovie
}
