const express = require('express');

const app = express();

app.get("/greeting", (req,res) => {
    const content = {
        id: "1",
        content: "Hello World"
    }
    res.send(content);
  
})

app.listen(3100, () => {
    console.log("Server is running on port 3100");
});

module.exports = app