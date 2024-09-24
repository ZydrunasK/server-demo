import express from 'express';

export const studentRouter = express.Router();

let students = [];

studentRouter.get('/', (req, res) => {
    return res.json({
        studentCount: students.length,
    });
});

studentRouter.get('/add', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Reikia nurodyti varda',
    });
});

studentRouter.get('/add/:name', (req, res) => {
    for (const student of students) {
        if (student.name === req.params.name) {
            return res.json({
                status: 'error',
                msg: 'Toks studentas jau yra uzregistruotas',
            });
        }
    };

    students.push({
        name: req.params.name,
        marks: [],
        average: 0,
        phone: [],
    });

    return res.json({
        status: 'success',
        msg: 'Pridetas naujas studentas',
    });
});

studentRouter.get('/remove', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Reikia nurodyti varda',
    });
});

studentRouter.get('/remove/:name', (req, res) => {
    const prev = students.length;
    students = students.filter(s => s.name !== req.params.name);
    const curr = students.length;

    if (prev === curr) {
        return res.json({
            status: 'error',
            msg: 'Norimas pasalinti studentas nerastas',
        });
    };

    return res.json({
        status: 'success',
        msg: 'Studentas pasalintas',
    });
});

studentRouter.get('/names', (req, res) => {
    if (students.length === 0) {
        return res.json({
            status: 'error',
            msg: 'Nera uzregistruotas nei vienas studentas',
        });
    };

    return res.json({
        status: 'success',
        msg: 'Studentai: ' + students.map(s => s.name).join(', '),
    });
});

studentRouter.get('/:name', (req, res) => {
    const student = students.filter(s => s.name === req.params.name);

    if (student.length === 0) {
        return res.json({
            status: 'error',
            msg: 'Tokio studento nera',
        });
    };

    return res.json({
        status: 'success',
        msg: 'Studentas egzistuoja. Gali suzinoti jo pazymius ir ju vidurki',
    });
});

studentRouter.get('/:name/marks', (req, res) => {
    const student = students.filter(s => s.name === req.params.name)[0];

    if (!student) {
        return res.json({
            status: 'error',
            msg: 'Tokio studento nera',
        });
    };

    if (student.marks.length === 0) {
        return res.json({
            status: 'success',
            msg: 'Studentas dar neturi jokio pazymio',
        });
    };

    return res.json({
        status: 'success',
        msg: 'Studento pazymiai: ' + student.marks.join(', '),
    });
});

studentRouter.get('/:name/marks/add/:mark', (req, res) => {
    const student = students.filter(s => s.name === req.params.name)[0];
    student.marks.push(Number(req.params.mark))
    student.average = (student.marks.reduce((a, b) => a + b) / student.marks.length).toFixed(1);

    if (!student) {
        return res.json({
            status: 'error',
            msg: 'tokio studento nera',
        });
    };
    return res.json({
        status: 'success',
        msg: 'Studentui ' + req.params.name + ' pridetas pazimys ' + req.params.mark,
    });
});

studentRouter.get('/:name/marks/average', (req, res) => {
    const student = students.filter(s => s.name === req.params.name)[0];

    if (!student) {
        return res.json({
            status: 'error',
            msg: 'tokio studento nera',
        });
    };
    if (student.marks.length === 0) {
        return res.json({
            status: 'success',
            msg: 'Studentas dar neturi jokio pazymio',
        });
    };

    return res.json({
        status: 'success',
        msg: 'Studentas: ' + req.params.name + ' | pazymiu vidurkis: ' + student.average,
    });
});

studentRouter.get('/marks/average/list', (req, res) => {
    const list = [];
    
    if (students.length === 0) {
        return res.json({
            status: 'error',
            msg: 'nera studentu',
        });
    };
    for (const student of students) {
        list.push('Studentas: ' + student.name + ' | pazymiu vidurkis: ' + student.average);
    };

    return res.json({
        status: 'success',
        msg: list,
    });
});

studentRouter.get('/:name/phone/add/:num', (req, res) => {
    const student = students.filter(a => a !== req.params.name)[0];

    if (student.name !== req.params.name) {
        return res.json({
            status: 'error',
            msg: 'tokio studento nera',
        });
    };
    
    if (student.phone.includes(req.params.num)) {  
        return res.json({
            status: 'error',
            msg: 'sis numerius jau egzistuoja',
        });
    };
    
    if (!student.phone.includes(req.params.num)) {
        student.phone.push(req.params.num);
    };
    console.log(student.phone);
    
    return res.json({
        status: 'success',
        msg: 'pridetas telefono numerius: ' + req.params.num,
    });
});

studentRouter.get('/:name/phone', (req, res) => {
    const student = students.filter(a => a !== req.params.name)[0];
    if (!student) {
        return res.json({
            status: 'error',
            msg: 'tokio studento nera',
        });
    };
    if (student.phone.length === 0) {  
        return res.json({
            status: 'error',
            msg: 'Studentas neturi numerio',
        });
    };


    return res.json({
        status: 'success',
        msg: 'Studentas: ' + student.name + ' | telefono numeris: ' + student.phone.join(', '),
    });
});


// extra: studentas gali tureti po kelis telefono numerius