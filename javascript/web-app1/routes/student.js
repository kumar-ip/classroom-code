const express = require('express');
const fs = require('fs');

const router = express.Router();


router.get('/', (req, res) => {

    fs.readFile('./data/students.json', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.json(JSON.parse(data.toString()));
    })

});

router.get('/:id', (req, res) => {

    fs.readFile('./data/students.json', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const students = JSON.parse(data.toString());

        const filteredStudents = students.filter(student => student.id == req.params.id);

        res.json(filteredStudents[0]);
    })

});


module.exports = router;