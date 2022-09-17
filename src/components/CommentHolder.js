import React from 'react'

function CommentHolder({data}) {
  return (
    <div className='cmntHolder'>
      {data.map((item,i)=> <div key={i}><p>{item.text}</p><hr ></hr></div>)}
    </div>
  )
}

export default CommentHolder