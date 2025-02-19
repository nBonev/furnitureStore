import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'It works!'});
});


app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));