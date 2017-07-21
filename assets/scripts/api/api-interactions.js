'use strict'
const store = require('../store.js')
const config = require('../config.js')
const ui = require('./ui.js')

// const gameStatus = {
//   over: false
// }

// WILL NEED TO SET TITLE TO A VAR

const newList = function () {
  return $.ajax({
    url: config.apiOrigin + '/lists/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'list': {
        'name': 'Movie_list_1',
        'titles': 'Rush Hour, Example2, Rush Hour 3, etc'
      }
    }
  })
}

const getLists = function () {
  return $.ajax({
    url: config.apiOrigin + '/lists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getOneList = function () {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + 5,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteList = function () {
  return $.ajax({
    url: config.apiOrigin + '/lists/' + 5,
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

const onGetLists = function (event) {
  getLists()
  .then(ui.getListsSuccess)
  .catch(ui.failure)
}

const onGetOneList = function (event) {
  getOneList()
  .then(function (data) {
    console.log('k')
    console.log('Work! also here is data: ', data)
  })
  .catch(function (data) {
  })
}

const createNewList = function (event) {
  console.log('this is store.user: ', store.user)
  newList()
    .then(function (data) {
      console.log('this is data: ', data)
      store.list = data.list
    })
    .catch(function (data) {
      console.log('createNewList did not work')
      console.log('this is data: ', data)
    })
}

const onDeleteList = function (event) {
  deleteList()
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
  createNewList,
  onGetLists,
  onGetOneList,
  onDeleteList
}
