import express from 'express';

const app = express();
const port = 5114;

app.get('/', (req, res) => {
   return res.send('Home page');
});

app.get('/login', (req, res) => {
   return res.send('Login page');
});

app.get('/register', (req, res) => {
   return res.send('Register page');
});
app.get('*', (req, res) => {
   return res.send('404 page');
});

app.listen(port, () => {
    console.log(`Serveris sukasi ant http://localhost:${port}`);
});
