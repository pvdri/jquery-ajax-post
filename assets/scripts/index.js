'use strict';

const libraryApi = require('./library-api');
const ui = require('./ui');

// On document ready
$(() => {
  $('#book-form').on('submit', function (event) {
    event.preventDefault();
    //$('#book-form').find("[name='book-id']").val()
    let form = getFormFields(event.target);
    let bookID = $('.book-id').val();
        libraryApi.books(ui.getBooksSuccess, ui.getBooksFail, form, bookID);
  });
});
