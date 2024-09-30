import express from 'express';
import { reqLog } from './middleware/reqLog.js';
import { apiRouter } from './router/apiRouter.js';
import { buttonClick } from './middleware/buttonStuff.js';
import { PageHome } from './pages-oop/PageHome.js';
import { PageNotFound } from './pages-oop/PageNotFound.js';
import { PageLogin } from './pages-oop/PageLogin.js';
import { PageContactUs } from './pages-oop/PageContactUs.js';
import { PageServices } from './pages-oop/PageServices.js';
import { PageRegister } from './pages-oop/PageRegister.js';
import { PageSecret } from './pages-oop/pageSecret.js';
import { PageButtons } from './pages-oop/PageButtons.js';
import { PageService } from './pages-oop/PageService.js';
import { PageServiceNotFound } from './pages-oop/PageServiceNotFound.js';

const app = express();
const port = 5114;

app.use(express.static('public'));

// global middlewares
app.use(reqLog);

app.use('/api', apiRouter); 

// routes


app.get('/', (req, res) => res.send(new PageHome().render(req)));
app.get('/login', (req, res) => res.send(new PageLogin().render()));
app.get('/contact-us', (req, res) => res.send(new PageContactUs().render()));
app.get('/services', (req, res) => res.send(new PageServices().render()));
app.get('/register', (req, res) => res.send(new PageRegister().render()));
app.get('/secret', (req, res) => res.status(401).send(new PageSecret().render()));
app.get('/buttons', buttonClick, (req, res) => res.send(new PageButtons().render()));

app.get('/services/:name', (req, res) => {
    const services = {
        html: 'HTML yra cool',
        css: 'CSS yra grazu',
        js: 'JS tiesiog yra',
        git: 'Git it',
    };

    if (services[req.params.name]) {
        return res.send(new PageService().render(req, req.params.name, services[req.params.name]));
    } else {
        return res.send(new PageServiceNotFound().render(req, req.params.name));
    }
});



app.get('*', (req, res) => res.status(404).send(new PageNotFound().render()));


app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Serveris sukasi ant http://localhost:${port}`);
});