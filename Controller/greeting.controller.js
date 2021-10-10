const Greeting = require('../Models/greeting');

const getAllGreetings = (req, res) => {
    Greeting.find((err, foundGreetings) => {
        if (!err) {
            res.status(200).send(foundGreetings)
            console.log(foundGreetings)
        } else {
            res.send(err)
        }
    })
}

const getGreeting = (req,res) => {
    Greeting.findById(req.params._id)
      .then(greet => res.json(greet))
      .catch(err => res.status(400).json(err));
    // // const myGreeting = req.params.id;
    // // Greeting.findById(myGreeting, (err, foundGreetings) => {
    // //     if (!err) {
    // //         res.status(200).send(foundGreetings)
    // //         console.log(foundGreetings)
    // //     } else {
    // //         res.send(err)
    // //     }
    // // })
    // console.log(req.params.id)
    // const myGreeting = Greeting.findById(req.params._id)
    // if (myGreeting) {
    //   res.send(myGreeting);
    // } else {
    //   res.status(404).json({ error: 'greeting not found' });
    // }
    
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

module.exports = { getAllGreetings, getGreeting, postGreeting };