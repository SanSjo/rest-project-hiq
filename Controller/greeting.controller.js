const Greeting = require('../Models/greeting');

const getGreeting = (req, res) => {
    Greeting.find((err, foundGreetings) => {
        if(!err){
            res.send(foundGreetings)
            console.log(foundGreetings)
        } else {
            res.send(err)
        }
    })
}

const postGreeting = (req, res) => {
    const createGreeting = new Greeting({
                content: req.body.content
            })
        
            createGreeting.save((err) => {
                if(err){
                    res.send(err);
                } else {
                    res.status(201).send("Greeting added")
                }
            });
}

module.exports = {getGreeting, postGreeting};