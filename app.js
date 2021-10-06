const express = require('express');
const mongoose = require('mongoose');


let greetingRouter = require('./Routes/greeting.routes');

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/restHiQDB', {useNewUrlParser: true})
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.get("/", (req, res) => res.send("App is working"))
app.use('/api', greetingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(err.status || 404).json({
      message: "No such route exists"
    })
  });

//   // error handler
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500).json({
//       message: "Error Message"
//     })
//   });

app.listen(3100, () => {
    console.log("Server is running on port 3100");
});

