const express = require('express');

const app = express();
app.get('/api/users', (req, res) => {
    const users = [
      {
        id: 1,
        firstName: "John",
        lastName: "Venus",
        email: "johnvenus@gmail.com",
      },
      {
        id: 2,
        firstName: "Peter",
        lastName: "Venus",
        email: "petervenus@gmail.com",
      },
      {
        id: 3,
        firstName: "Christian",
        lastName: "Venus",
        email: "christianvenus@gmail.com",
      },
      {
        id: 4,
        firstName: "Randy",
        lastName: "Venus",
        email: "randyvenus@gmail.com",
      }
    ];
    res.json(users);
})
const port = 5000;

app.listen(port,() => console.log(`Server started on port ${port}`));