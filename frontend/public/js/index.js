document.addEventListener('DOMContentLoaded',()=>{
  const form = document.getElementById('blog-form');
  const deleteBtn = document.getElementById('delete');


if(form){
  form.addEventListener('submit',(e)=>{
    const title = document.getElementById('title').value.trim();  
    const subtitle = document.getElementById('subtitle').value.trim();  
    const description = document.getElementById('description').value.trim();  
    const author = document.getElementById('author').value.trim();  
    const error = document.querySelectorAll('.error');  
  if(!title || !subtitle || !description || !author){
       console.log(title,subtitle,description,author);
       e.preventDefault();
       error.forEach(err=>err.style.display = 'block');
  }else{
       error.forEach(err=>err.style.display = 'none');
  }
 });

}


if(deleteBtn){
  deleteBtn.addEventListener('click',()=>{
    const id = deleteBtn.dataset.id;
    const name = prompt("Enter your name first");
    if(name){
        deletePost(id,name);
    }else{
        alert("Name is required");
    }
  });
}
  
 const deletePost = async (id, name) => {
      try {
        const response = await axios.delete(`/delete/${id}?name=${name}`);
        console.log('Post deleted:', response.data);
    
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete the post. Please try again.');
      }
    };
    

});
  