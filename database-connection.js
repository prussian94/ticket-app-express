const mongoose = require('mongoose')
const config = require('./config')

let connectionString = config.MONGO_URI

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected.'))
  .catch(console.log)

module.exports = mongoose.connection