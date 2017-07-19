'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})
$(() => {
  alert('yep')
})

// let testF = function (arg) {
//   $(arg.target).text('ok')
// }

$('#toDoInput').bind("enterKey",function(e){
  console.log('enter')
});

$('#addTextButton').on("click", function () {
  if ($('#toDoInput').val() !== '') {
    let toDoItem = $('#toDoInput').val()
    $('#toDoList').append(`<li> ${toDoItem} </li>`)
    $('#toDoInput').val('')
  }
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
