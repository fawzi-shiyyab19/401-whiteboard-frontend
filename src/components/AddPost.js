
import axios from 'axios';
import React from 'react';

function AddPost(props) {
  
    const addPost=  async(e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            content: e.target.content.value
          }
          try {
              
           await axios.post(`https://whitebord-backend.herokuapp.com/post/`,data)
    
           props.getDataFun()
            
          } catch (error) {
            alert('error')
          }
      }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={addPost}>


                <label htmlFor=''>Enter content </label>
                <input type="text" name="content" />

                <input type="submit" value="Add Post" />

                </form>
        </div>
    );
}

export default AddPost;