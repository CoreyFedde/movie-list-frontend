'use strict'

const moviesTemplate = require('../templates/show-movies.handlebars')

const getMoviesSuccess = (data) => {
  console.log(data)
  let moviesHTML = moviesTemplate({ movies: data.movies })
  $('.poster-board').append(moviesHTML)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getMoviesSuccess,
  failure
}
