import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

try {
    const uri = 'mongodb://localhost:27017/furnitures';
    await mongoose.connect(uri);
    console.log('DB connected successfully!');
    
}catch(err) {
    console.log('Connection to DB failed!');
    console.log(err.message);
    
    
}

//Setup CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

//     next();
// })

app.use(cors());


app.get('/', (req, res) => {
    res.json({message: 'It works!'});
});

app.get('/data/catalog', (req, res) => {
    res.json({message: 'Some data'});
});


app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));