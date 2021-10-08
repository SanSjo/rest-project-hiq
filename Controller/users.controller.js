const User = require('../Models/users');

const getUsers = (req, res) => {
    //return "Sanna";
    User.find((err, foundUsers) => {
        if(!err) {
            res.send(foundUsers)
            console.log(foundUsers)
        } else {
            res.send(err)
        }
    })
}

const postUsers = (req, res) => {
    const createUser = new User({
        name: req.body.name
    })
    createUser.save((err) => {
        if(err) {
            res.send(err);
        } else {
            res.status(201).send('User created');
        }
    })
}

module.exports = {
    getUsers,
    postUsers
}