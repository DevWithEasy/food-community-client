import { useEffect, useState } from "react";
import { getAllPost } from "../../libs/post";
import { CreatePost, Post, SinglePost } from "../others/Post";


const Homepage = () => {
  const [showPost,setShowPost] = useState(false)
  const postView=()=>{
    setShowPost(!showPost)
  }
  const [posts,setPosts] = useState({})
  useEffect(()=>{
    getAllPost(setPosts)
  },[])
  console.log(posts)
  return (
    <div className="relative flex justify-between bg-slate-200">
      <div className="w-6/12 mx-auto space-y-4">
        {/* CREATE POST DISPALY */}
        <Post postView={postView}/>
        {/* CREATE POST DISPALY POPUP*/}
        {
          showPost && <CreatePost postView={postView}/>
        }
        {/* ALL POST RENDERING */}
        <div className="space-y-2">
          {
            posts.length>0 && posts.map(post=><SinglePost post={post}/>)
          }
        </div>
      </div>
    </div>
  );
};
export default Homepage;
