'use strict'

const listsTemplate = require('../templates/show-lists.handlebars')

const getListsSuccess = (data) => {
  console.log(data)
  let listsHTML = listsTemplate({ lists: data.lists })
  $('#list-content').append(listsHTML)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getListsSuccess,
  failure
}
