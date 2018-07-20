const Joi = require("joi")
const express = require('express');
const app = express();

app.use(express.json());

let courses = [
    { id: 1, name: 'c' },
    { id: 2, name: 'c++' },
    { id: 3, name: 'java' }
];
console.log("baher", this.courses);
app.get('/', function (req, res) {

    res.send('hello world');
});

app.get('/api/course', (req, res) => {

    res.send(courses);
});
app.get('/api/course/:id', (req, res) => {

    let cid = courses.find(c => c.id == req.params.id);
    if (!cid) res.status(404).send(`course with given id ${req.params.id} is not available`);
    res.send(cid);
});

app.post('/api/course', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);
    //console.log(result);
    if (result.error) {
        res.status(404).send(result.error);
        /* return; */
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.put('/api/course/:id', (req, res) => {

    let cid = courses.find(c => c.id == req.params.id);
    if (!cid) res.status(404).send(`course with given id ${req.params.id} is not available`);

    //const result = validateCourse(req.body)
    const { error } = validateCourse(req.body)
    if (error) {
        res.status(404).send(error);
        /* return; */
    }
    console.log(courses.name);
    console.log(req.body.name);
    courses.find(data => data.name = req.body.name)
    //courses.name = req.body.name;
    res.send(courses);
});

app.delete('/api/course/:id', (req, res) => {
    let korse = courses.find(c => c.id === parseInt(req.params.id));
    if (!korse) return res.status(404).send(`course with given id ${req.params.id} is not available`);
    const index = courses.indexOf(korse);
    courses.splice(index, 1);
    res.send(korse);
    //return the same course

});

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`listining on port ${port}`);
})

function validateCourse(course) {

    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}


/* app.post();
app.put();
app.delete(); */