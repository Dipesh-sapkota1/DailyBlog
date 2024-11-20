import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import postsRouter from './router/posts.routes.js';
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',postsRouter);





app.listen(PORT,()=>console.log(`Blog API is running on port ${PORT}`));