import axios from "axios";
import { Router } from "express";

const blogRouter = Router();
const API_URI = "http://localhost:5000";


//Renders home page   
blogRouter.get('/',async (req, res)=>{
    try {
        const response = await axios.get(API_URI);
        res.render("index.ejs",{post:response.data});
    } catch (error) {
        console.error({message:`Error has occor due to ${error}`});
    }
})
//Reders blogs page
blogRouter.get('/blogs',async (req, res)=>{
    try {
        const response = await axios.get(API_URI);
        res.render("blogs.ejs",{post:response.data});
    } catch (error) {
        console.error({message:`Error has occor due to ${error}`});
    }
})

//Get specific post
blogRouter.get('/blog/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const response = await axios.get(`${API_URI}/${id}`);
        res.render("blog.ejs",{post:response.data});
    } catch (error) {
        console.error({message:`Error has occor due to ${error}`});
    }
})

//Render to a form to create or edit a post
blogRouter.get('/new',(req, res)=>{
    res.render("form.ejs");
})
blogRouter.get('/form/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const response = await axios.get(`${API_URI}/${id}`);
        res.render("form.ejs",{post:response.data});
    } catch (error) {
        console.error({message:`Error has occor due to ${error}`});
    }
})

//Create a post request
blogRouter.post("/post", async (req, res) => {
    try {
      const response = await axios.post(`${API_URI}/posts`, req.body);
      console.log(response.data);
      res.redirect("/");
    } catch (error) {
      res.status(500).json({ message: "Error creating post" });
    }
  });

//Partially edit a post
blogRouter.post('/edit/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const response = await axios.patch(`${API_URI}/edit/${id}`, req.body);
        console.log(response.data);
        res.redirect("/");
    } catch (error) {
      res.status(500).json({ message: "Error updating post" });
    }
})

//Delete a post
blogRouter.delete('/delete/:id', async(req, res)=>{
    const id = req.params.id;
    const name = req.query.name;
    try {
        const response = await axios.delete(`${API_URI}/delete/${id}?name=${name}`);
        console.log(response.data);
        res.redirect("/");
    } catch (error) {
      res.status(500).json({ message: "Error deleting post" });
        
    }
})

export default blogRouter;