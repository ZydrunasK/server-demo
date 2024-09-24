import e from "express";

export const studentRouter = e.Router();

const students = [
];

studentRouter.get('/', (req, res) => {
    return res.json({
        studentCount: students.length,
    });
});
studentRouter.get('/add', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'reikia nurodyti varda',
    });
});
studentRouter.get('/add/:name', (req, res) => {
    students.push({
        name: req.params.name,
        marks: [],
    })
    return res.json({
        status: 'success',
        msg: 'Pridetas studentas',
    });
});
studentRouter.get('/remove/:name', (req, res) => {
    students.push({
        name: req.params.name,
        marks: [],
    })
    return res.json({
        status: 'success',
        msg: 'Pridetas studentas',
    });
});
studentRouter.get('/names', (req, res) => {
    if (students.length === 0) {
        return res.json({
            status: 'error',
            msg: 'Nera studentu',
        });
    }
    return res.json({
        status: 'success',
        msg: 'Studentai:' + students.map(s => s.name).join(', '),
    });
});