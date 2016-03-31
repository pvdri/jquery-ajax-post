'use strict';

const books = (success, fail, form, bookID) => {
  console.log('Start request');
  $.ajax({
    method: 'PATCH',
    url: 'http://localhost:3000/books/' + bookID,
    processData: false,
    data: form,
  })
  .done(success)
  .fail(fail);
  console.log('Request queued');
};

module.exports = {
  books,
};
