import blogs from "../data/blogs.data.js";


const authenticator = (req, res, next) =>{
    const id = req.params.id;
    const name = req.query.name.trim();
    console.log(name);
    const blog = blogs.find(blog=> blog.id === id);
    console.log(blog);
    if(name === blog.author){
        next();
    }else{
        return res.status(401).json({ message: 'You are not authorized to make this request' });
    }
}

export default authenticator;