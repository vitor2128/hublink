const mongoose = require('../database')


const LinksSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
})

const Links = mongoose.model('links', LinksSchema);

module.exports = Links