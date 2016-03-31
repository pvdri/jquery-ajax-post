'use strict';

const getBooksSuccess = (data) => {
  console.log(data);
};

const getBooksFail = (error) => {
  console.error(error);
};

module.exports = {
  getBooksFail,
  getBooksSuccess,
};
