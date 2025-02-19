import express from 'express';
import mongoose from 'mongoose';

const app = express();

try {
    const uri = 'mongodb://localhost:27017/furnitures';
    await mongoose.connect(uri);
    console.log('DB connected successfully!');
    
}catch(err) {
    console.log('Connection to DB failed!');
    console.log(err.message);
    
    
}


app.get('/', (req, res) => {
    res.json({message: 'It works!'});
});


app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));