// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  // Add a new comment here
  res.send('New comment is created');
});

// Get all comments
app.get('/comments', (req, res) => {
  // Get all comments here
  res.send('Get all comments');
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  // Get a comment by id here
  res.send('Get a comment by id');
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
  // Update a comment by id here
  res.send('Update a comment by id');
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
  // Delete a comment by id here
  res.send('Delete a comment by id');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});