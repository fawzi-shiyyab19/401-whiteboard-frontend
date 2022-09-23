import axios from "axios";
import AddPostForm from "./AddPostForm";
import PostCard from "./PostCard";
function Main({ data, dfunc, acfunc, apfunc, comments }) {


  return (
    <div className="main">
      <AddPostForm apfunc={apfunc} />
      <div className='boxPlace'>
        {data?.map((item, i) => <PostCard key={i} comments={comments} item={item} acfunc={acfunc} dfunc={dfunc} />)}
      </div>
    </div>
  )

}

export default Main