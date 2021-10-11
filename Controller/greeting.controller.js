const Greeting = require('../Models/greeting');

const getAllGreetings = (req, res) => {
    Greeting.find((err, foundGreetings) => {
        if (!err) {
            res.status(200).json(foundGreetings)
            console.log(foundGreetings)
        } else {
            res.send(err)
        }
    })
}

const getGreeting = (req,res) => {
    Greeting.findById({_id: req.params._id}, (err, foundGreeting) => {
        if(err) {
            res.send(err)
        } else {
            res.json(foundGreeting)
        }
    })
    // Greeting.findById(req.params._id)
    //   .then(greet => res.json(greet))
    //   .catch(err => res.status(400).json(err));
}



const postGreeting = (req, res) => {
    const createGreeting = new Greeting({
        id: req.body.id,
        content: req.body.content
    })
    createGreeting.save((err) => {
        if (err) {
            res.send(err);
        } else {
            res.status(201).send("Greeting added")
        }
    });
}

const modifyGreeting = (req, res) => {
    Greeting.updateOne({_id: req.params._id, content: req.body.content}, (err, greeting) => {
        if(err) {
            res.send(err)
        } else {
            res.json(greeting)
        }
    })
}



module.exports = { getAllGreetings, getGreeting, postGreeting, modifyGreeting };