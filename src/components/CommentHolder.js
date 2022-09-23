import React from 'react'
import cookies from "react-cookies";

function CommentHolder({ data, comments }) {

  return (
    <div className='cmntHolder'>
      {data.map((item, i) => <div key={i}><p style={{ color: 'Green', fontWeight: 'bolder' }}>By :{cookies.load('name')} </p><p>{item.text}</p><hr></hr></div>)}
    </div>
  )
}

export default CommentHolder