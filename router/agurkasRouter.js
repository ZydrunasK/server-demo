import e from "express";

export const agurkasRouter = e.Router();

agurkasRouter.get('/', (req, res) => {
    return res.json({
        status: 'success',
        msg: 'radai agurkus',
    });
});

agurkasRouter.get('/add', (req, res) => {
    return res.json({
        status: 'success',
        msg: 'Agurkas pridetas',
    });
});
agurkasRouter.get('/remove', (req, res) => {
    return res.json({
        status: 'success',
        msg: 'Agurkas atimtas',
    });
});