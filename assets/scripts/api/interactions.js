'use strict'
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const moviesTemplate = require('../templates/show-movies.handlebars')
const store = require('../store.js')

const onGetMovies = function (event) {
  api.getMovies()
  .then(function (data) {
    ui.clear()
    const reverseMovies = data.movies.sort(function compare (a, b) {
      if (a.id < b.id) {
        return 1
      } if (a.id > b.id) {
        return -1
      }
    })
    const moviesHTML = moviesTemplate({ movies: reverseMovies })
    $('.poster-board').append(moviesHTML)
    $('.remove-button').on('click', onDeleteMovie)
    $('.check-button').on('click', onMovieUpdate)
    $('.addNotesForm').on('submit', onAddNotes)
    $('.movie').on('click', function (event) {
      if ($(this).children('.notes').hasClass('hide')) {
        $(this).children('.notes').removeClass('hide')
        $(this).parents().children('.addNotesForm').removeClass('hide')
      } else {
        $(this).children('.notes').addClass('hide')
        $(this).parents().children('.addNotesForm').addClass('hide')
      }
    })
    if ($('.movie').length < 1) {
      $('#chooseMovieButton').hide()
    } else {
      $('#chooseMovieButton').show()
    }
    $('#headerBox').removeClass('highlight')
    $('#changingText').text('Your Indie_List')
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
  const data = getFormFields(this)
  api.newMovie(data)
    .then(function (data) {
      $('.form-control').val('')
      $('.form-control').attr('placeholder', '')
      store.movie = data.movie
      onGetMovies()
      $('#chooseMovieButton').show()
    })
    .catch(ui.addMovieFailure)
}

const onDeleteMovie = function (data) {
  api.deleteMovie(this.id)
    .then(function () {
      ui.onDeleteMovieSuccess()
      onGetMovies()
    })
    .catch(ui.failure)
}

const onMovieUpdate = function (data) {
  const movie = $(this)
  if (movie.hasClass('watched')) {
    event.preventDefault()
    api.movieUnwatch(this.id)
      .then(function () {
        ui.onMovieUpdateSuccess
        onGetMovies()
      })
      .catch(ui.failure)
  } else {
    event.preventDefault()
    api.movieWatch(this.id)
      .then(function () {
        ui.onMovieUpdateSuccess
        onGetMovies()
      })
      .catch(ui.failure)
  }
}

const onAddNotes = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  data.movie.id = this.id
  api.addNotes(data)
  .then(function () {
    onGetMovies()
  })
  .catch(ui.addNotesFailure)
}

module.exports = {
  createNewMovie,
  onGetMovies,
  onGetOneMovie,
  onDeleteMovie,
  onMovieUpdate,
  onAddNotes
}
