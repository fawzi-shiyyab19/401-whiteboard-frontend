import React, { useState } from 'react'
import cookies from "react-cookies";

function AddCommentForm({ acfunc, item }) {


  const [cmt , setCmn] = useState('');

  function addCooment(e) {
    e.preventDefault();

    let userID = cookies.load('id')
    let comment = {
      text : e.target.comment.value,
      textId : item.id,
      userId : userID,
    }
    acfunc(item.id,comment,userID);
    setCmn('');
  }

  return (
    <div>
      <form className='form' onSubmit={addCooment}>
        <input className='cmntInput' type='text' name='comment' placeholder='Commnet..'></input>
        <input type='submit' name='submit' className='cmntSubmit' value='Post..'></input>
      </form>
    </div>
  )
}

export default AddCommentForm