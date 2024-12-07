import {} from 'dotenv/config';
import express from 'express';
import path from 'path';
import blogRouter from './routes/blogs.routes.js';

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));


app.use('/',blogRouter);



app.listen(PORT,()=>{
    console.log(`User server has started on port ${PORT}...`);
})

module.exports = app;




