import { Router } from "express";
import { getBlogs, getBlog, postBlog, editBlog, deleteBlog } from "../controller/posts.controller.js";
import authenticator from "../controller/auth.controller.js";
const postsRouter = Router();

postsRouter.get('/',getBlogs);
postsRouter.get('/:id',getBlog);
postsRouter.post('/posts',postBlog);
postsRouter.patch('/edit/:id',editBlog);
postsRouter.delete('/delete/:id', authenticator, deleteBlog);


export default postsRouter;