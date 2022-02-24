let mongoose = require('mongoose');

// Connect to our model
let Contacts = require('../models/contacts');

exports.list = function(req, res, next) {
    Contacts.find( (err, contactsList) => {

        if(err){
            return console.error(err);
        }
        else{
            // console.log(contactsList);
            res.render(
                'contacts/list', 
                { 
                    title: 'Contacts List',
                    ContactsList: contactsList,
                    userName: req.user ? req.user.username : ''
                }
            );
        }

    })
}

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Contacts();

    res.render(
        'contacts/add_edit', 
        {
            title: 'Add a new Item',
            item: newItem,
            userName: req.user ? req.user.username : ''
        }
    )          
}


module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Contacts({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    
    });

    Contacts.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/contacts/list');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render(
                'contacts/add_edit', 
                {
                    title: 'Edit Item', 
                    item: itemToEdit,
                    userName: req.user ? req.user.username : ''
                }
            )
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Contacts({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    // console.log(updatedItem);

    Contacts.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contacts/list');
        }
    });
}
