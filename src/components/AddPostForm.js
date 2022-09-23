import React from 'react'

function AddPostForm({apfunc}) {
  return (
      <form onSubmit={apfunc} className='AddPostForm'>
      <input type='text' placeholder='Title' name='title' id='ttt'></input>
      <br></br>
      <input type='text' placeholder='Content' name='contnet' id='tttC'></input>
      <br></br>
      <input type='submit' value='Post' id='tttS'></input>
      </form>
  )
}

export default AddPostForm