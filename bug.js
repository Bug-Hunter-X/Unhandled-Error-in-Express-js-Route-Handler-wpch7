const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  console.log(users[userId]); // Accessing users array directly without error handling
  res.send(`User ${userId} information`);
});

app.listen(3000, () => console.log('Server is running on port 3000'));