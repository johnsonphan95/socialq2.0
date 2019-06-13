// module.exports = {
//   mongoURI: 'mongodb+srv://johnsonphan95:qrUJ8Z3dJVp2Ay13@cluster0-qaw0r.mongodb.net/test?retryWrites=true&w=majority',
//   //Make sure this is your own unique string
//   secretOrKey: 'secret'
// }

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}