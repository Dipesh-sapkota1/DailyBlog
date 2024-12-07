import {} from 'dotenv/config';
import express from 'express';
import blogRouter from './routes/blogs.routes.js';

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.use('/',blogRouter);



app.listen(PORT,()=>{
    console.log(`User server has started on port ${PORT}...`);
})






