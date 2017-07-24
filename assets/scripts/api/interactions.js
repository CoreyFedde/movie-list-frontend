'use strict'
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const moviesTemplate = require('../templates/show-movies.handlebars')
const store = require('../store.js')

// const gameStatus = {
//   over: false
// }

const onGetMovies = function (event) {
  api.getMovies()
  .then(function (data) {
    console.log('worked')
    ui.clear()
    console.log(data.movies)
    const reverseMovies = data.movies.sort(function compare (a, b) {
      if (a.id < b.id) {
        return 1
      } if (a.id > b.id) {
        return -1
      }
    })
    console.log('sortedMovies:', reverseMovies)
    const moviesHTML = moviesTemplate({ movies: reverseMovies })
    $('.poster-board').append(moviesHTML)
    $('.remove-button').on('click', onDeleteMovie)
    $('.check-button').on('click', onMovieUpdate)
    $('.movie').on('click', function (event) {
      console.log('clicked; ', this)
      if ($(this).children('.notes').hasClass('hide')) {
        $(this).children('.notes').removeClass('hide')
      } else {
        $(this).children('.notes').addClass('hide')
      }
    })
    //   console.log('clicked; ', this)
    //   if ($(this).parent().children('.notes').hasClass('hide')) {
    //     $(this).parent().children('.notes').removeClass('hide')
    //   } else {
    //     $(this).parent().children('.notes').addClass('hide')
    //   }
    // })
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
  console.log('data from create: ', data)
  console.log('create data: ', data)
  api.newMovie(data)
    .then(function (data) {
      $('.form-control').val('')
      store.movie = data.movie
      // console.log('store.movie; ', store.movie)
      // console.log('Successful onCreateNewMovie')
      // api.getOneMovie(data.movie.id)
      //   .then(ui.onGetOneMovieSuccess)
      //     .done(function () {
      //       $('.remove-button').on('click', onDeleteMovie)
      //     })
      //   .catch(ui.failure)
      onGetMovies()
    })
}

const onDeleteMovie = function (data) {
  console.log('At least it clicked')
  console.log('This: ', this)
  api.deleteMovie(this.id)
    .then(function () {
      ui.onDeleteMovieSuccess()
      onGetMovies()
    })
    .catch(ui.failure)
}

const onMovieUpdate = function (data) {
  console.log(this)
  const movie = $(this)
  if (movie.hasClass('watched')) {
    event.preventDefault()
    console.log('clicked onMovieUnwatch button')
    console.log(this)
    api.movieUnwatch(this.id)
      .then(function () {
        ui.onMovieUpdateSuccess
        onGetMovies()
      })
      .catch(ui.failure)
  } else {
    event.preventDefault()
    console.log('clicked onMovieWatch button')
    console.log(this)
    api.movieWatch(this.id)
      .then(function () {
        ui.onMovieUpdateSuccess
        onGetMovies()
      })
      .catch(ui.failure)
  }
}

module.exports = {
  createNewMovie,
  onGetMovies,
  onGetOneMovie,
  onDeleteMovie,
  onMovieUpdate
}
