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
  failedRegisteration: new Exception({
    message: 'Registeration failed.',
    code: 500,
    statusCode: 50000
  }),
}

