const express = require('express');
const app = express();
const users = {
  '1': { name: 'John Doe', age: 30 },
  '2': { name: 'Jane Smith', age: 25 }
};
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (!users[userId]) {
    return res.status(404).send('User not found');
  }
  res.send(users[userId]);
});
app.listen(3000, () => console.log('Server is running on port 3000'));