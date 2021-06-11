const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://UsDB:zHg3J9lg1XV60z09@cluster0.efhkv.mongodb.net/hublinkDB?retryWrites=true&w=majority', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
mongoose.Promise = global.Promise

module.exports = mongoose
