import axios from 'axios';
import React from 'react';

function AddComment(props) {

    const addCom =  async(e) => {
        e.preventDefault();
        let id = e.target.PostID.value
        const data = {
            comment: e.target.Comment.value
          }
          try {
              
           await axios.post(`https://whitebord-backend.herokuapp.com/comment/${id}`,data)
    
           props.getDataFun()
            
          } catch (error) {
            alert('error')
          }
      }

    return (
        <div>
            <h1>Add comment</h1>
            <form onSubmit={addCom}>
                <label htmlFor=''>Enter Post ID </label>
                <input type="text" name="PostID" />

                <label htmlFor=''>Enter Comment </label>
                <input type="text" name="Comment" />

                <input type="submit" value="Add Comment" />

                </form>
        </div>
    );
}

export default AddComment;