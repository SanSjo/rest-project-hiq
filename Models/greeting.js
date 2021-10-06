const mongoose = require('mongoose');

const greetingSchema = {
    content: String
}

module.exports = mongoose.model('Greetings', greetingSchema);