const deleteBtn = document.getElementById('delete');
const id = deleteBtn.dataset.id;

deleteBtn.addEventListener('click',()=>{
    const name = prompt("Enter your name first");
    if(name){
        deletePost(id,name);
    }else{
        alert("Name is required");
    }
})
 
 
const deletePost = async (id, name) => {
    try {
      const response = await axios.delete(`/delete/${id}?name=${name}`);
      console.log('Post deleted:', response.data);
  
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete the post. Please try again.');
    }
  };
  
   
 