const express = require('express');
const mongoose = require('mongoose');

let greetingRouter = require('./Routes/greeting.routes');
let userRouter = require('./Routes/users.routes');

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/restHiQDB', {useNewUrlParser: true})
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => res.send("App is working"));
app.use('/api', greetingRouter);
app.use('/api', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(err.status || 404).json({
      message: "No such route exists"
    })
  });

app.listen(3100, () => {
    console.log("Server is running on port 3100");
});

