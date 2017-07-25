$('#addTextButton').on('click', function () {
  if ($('#toDoInput').val() !== '') {
    const toDoItem = $('#toDoInput').val()
    $('#toDoList').append(`<li> ${toDoItem} </li>`)
    $('#toDoInput').val('')
  }
})

$('.show-button').on('click', function (event) {
  $('.notes').toggle()
})
