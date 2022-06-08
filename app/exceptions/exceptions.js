const Exception = require('../models/exception')

module.exports =  {
  unauthorized: new Exception({
    message: 'You need to login.',
    code: 401,
    statusCode: 40000
  }),
  forbidden: new Exception({
    message: 'You are not allowed to access this resource.',
    code: 403,
    statusCode: 40001
  }),
  userAlreadyExists: new Exception({
    message: 'User already exists.',
    code: 403,
    statusCode: 40003
  }),
  failedLogin: new Exception({
    message: 'Wrong username or password.',
    code: 401,
    statusCode: 40002
  }),
  userNotFoundException: new Exception({
    message: 'User not found.',
    code: 404,
    statusCode: 40004
  }),
  failedRegisteration: new Exception({
    message: 'Registeration failed.',
    code: 500,
    statusCode: 50000
  }),
  failedEventCreate: new Exception({
    message: 'Event create failed.',
    code: 500,
    statusCode: 50000
  }),
  failedEventList: new Exception({
    message: 'List events failed.',
    code: 500,
    statusCode: 50000
  }),
  failedPriceUpdate: new Exception({
    message: 'Price update failed.',
    code: 500,
    statusCode: 50000
  }),
}

