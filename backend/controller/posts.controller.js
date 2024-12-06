import blogs from "../data/blogs.data.js";
import formattedDate from "../utils/dateGen.js";
import genId from "../utils/idGen.js";
import cutParagraph from "../utils/previewGen.js"; 



const getBlogs = (req, res)=>{
    res.json(blogs);
}

const getBlog = (req, res) =>{
    const id = req.params.id;
    const blog = blogs.find(blog=> blog.id === id);
    if(blog){
        res.json(blog);
    }else{
        return res.status(404).json({ message: 'Blog not found 404' });
    }
}

const postBlog = (req, res) =>{
    const text = req.body.description;
    const preview = cutParagraph(text);
    const newBlog = {
        id: genId(),
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        preview: preview,
        author: req.body.author,
        date: formattedDate
    };
    blogs.push(newBlog);
    res.json(newBlog);
}

const editBlog = (req, res) =>{
    const id = req.params.id;

    const currBlog = blogs.find(blog=> blog.id === id);
    const index = blogs.findIndex(blog=> blog.id === id);
    db.query("UPDATE blog set title")
   if(index !== -1) {
        blogs[index].id = currBlog.id;
        if(req.body.title) blogs[index].title = req.body.title || currBlog.title; 
        if(req.body.subtitle) blogs[index].subtitle = req.body.subtitle || currBlog.subtitle; 
        if(req.body.description) blogs[index].description = req.body.description || currBlog.description; 
        blogs[index].preview = cutParagraph(req.body.description || currBlog.preview); 
        if(req.body.author) blogs[index].author = req.body.author.trim() || currBlog.author; 
        if(req.body.category) blogs[index].category = req.body.category || currBlog.category;
        blogs[index].date = currBlog.date; 
        res.json(blogs[index]).send({message:`Blog with id${id} is edited`});
   }else{
      return res.status(404).json({ message: 'Blog not found 404' });
   }

}

const deleteBlog = (req, res) =>{
    const id = req.params.id;
    const index = blogs.findIndex(blog=> blog.id === id);
    if(index !== -1){
        blogs.splice(index, 1);
        res.send({message:`Blog with id ${id} is deleted`});
    }else{
        return res.status(404).json({ message: 'Blog not found 404' });
    }
}

export {getBlogs, getBlog, postBlog, editBlog, deleteBlog};