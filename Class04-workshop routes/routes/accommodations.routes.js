import { Router } from "express";

const AccommondationsRouter = Router();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
});

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
});

app.get('/users/:userId/posts/:postId', (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
});

app.get('/search', (req, res) => {
  const query = req.query.q;
});


app.get('/protected', (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); 
  } else {
    res.status(401).send('Unauthorized');
  }
}, (req, res) => {
  res.send('Protected Route');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default AccommondationsRouter;