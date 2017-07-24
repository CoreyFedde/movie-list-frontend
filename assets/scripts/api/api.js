'use strict'
const store = require('../store.js')
const config = require('../config.js')

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

const getOneMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const movieWatch = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'movie': {
        'watched': 'Yes'
      }
    }
  })
}
const movieUnwatch = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'movie': {
        'watched': ''
      }
    }
  })
}

module.exports = {
  newMovie,
  getMovies,
  getOneMovie,
  deleteMovie,
  movieWatch,
  movieUnwatch
}
