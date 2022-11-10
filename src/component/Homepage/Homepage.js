import { useState } from "react";
import { CreatePost, Post } from "../others/Post";

const Homepage = () => {
  const [showPost,setShowPost] = useState(false)
  const postView=()=>{
    setShowPost(!showPost)
  }
  return (
    <div className="relative flex justify-between bg-slate-100">
      <div className="w-3/12">
        left
      </div>
      <div className="w-6/12 space-y-4">
        <Post postView={postView}/>
        {
          showPost && <CreatePost postView={postView}/>
        }
      </div>
      <div className="3/12">
        right
      </div>
    </div>
  );
};
export default Homepage;
