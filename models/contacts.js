let mongoose = require('mongoose');

let contactsModel = mongoose.Schema(
    {
        name: String,
        number:String,
        email: String,
    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model('Contacts', contactsModel);