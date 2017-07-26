'use strict'
const store = require('../store.js')
const config = require('../config.js')

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

const addNotes = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.movie.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newMovie,
  getMovies,
  getOneMovie,
  deleteMovie,
  movieWatch,
  movieUnwatch,
  addNotes
}
