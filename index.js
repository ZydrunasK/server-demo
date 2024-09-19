import express from 'express';

const app = express();
const port = 5114;

app.get('/', (req, res) => {
   return res.send('<main>ka tu</main>');
});

app.get('/login', (req, res) => {
   return res.send('Login page');
});

app.get('/register', (req, res) => {
   return res.send('Register page');
});
app.get('/secret', (req, res) => {
   return res.send('Secret page');
});
app.get('/ai+', (req, res) => {
   return res.send('ai page');
});
app.get('*', (req, res) => {
   return res.send('404 page');
});
app.use((req, res, next) => {
    return res
    .status(404)
    .send("Sorry can't find that!");
});

app.listen(port, () => {
    console.log(`Serveris sukasi ant http://localhost:${port}`);
});
