class Exception extends Error {
  constructor(errorData) {
    super(errorData.message)
    this.code = errorData.code;
    this.statusCode = errorData.statusCode;
  }
}

module.exports = Exception;