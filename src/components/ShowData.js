import React from 'react';

function ShowData(props) {
    return (
        <div className="show">
        { props.data &&<>
          {
            props.data.map((item,idx)=>{
                return(
                <div key={idx}>

                    <h1>Post # {item.id}</h1>
                     <p>content : {item.content}</p>
                     <p>createdAt : {item.createdAt}</p>
                     <p>updatedAt : {item.updatedAt}</p>
                      <ul>
                      {item.comments.map((item,idx)=><li key={idx}>{item.comment}</li>)}
                      </ul>
                  
                </div>
                  )
            })
          }

        </>
        }


    </div>
    );
}

export default ShowData;