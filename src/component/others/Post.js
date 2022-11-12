import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { BsEmojiSmile, BsImages, BsShare, BsThreeDotsVertical } from 'react-icons/bs';
// import { MdAddPhotoAlternate } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { format } from 'timeago.js';
import { userInfo } from '../../libs/auth';
import { createPost } from '../../libs/post';

export const CreatePost = ({postView}) => {
      const user = useSelector(state=>state.auth.user)
      const [text,setText] = useState("")
      // const [file,setFile] = useState("")
      // const [preview,setPreview] = useState("")
      // const imageSet =(e)=>{
      //   setFile(e.target.files[0])
      //   setPreview(URL.createObjectURL(e.target.files[0]));
      // }
      // const imageRemove =(e)=>{
      //   setFile(null)
      //   setPreview(null);
      // }
    return (
        <div className='absolute left-0 -top-20 w-full h-screen bg-gray-500/50 pt-10'>
            <div className="w-8/12 mx-auto bg-white rounded-md">
                <h3 className="flex justify-between items-center px-4 py-2">
                    <span className="font-bold text-xl">Create post</span>
                    <button onClick={()=>postView()} className="h-8 w-8 rounded-full p-1 bg-gray-100 flex justify-center items-center">X</button>
                </h3>
                <hr />
                <form onSubmit={(e)=>createPost(e,text)} className="px-4 py-2 space-y-2">
                    <div className="flex space-x-2">
                    <img src={user?.image?.url} alt="" className="w-10 h-10 rounded-full"/>
                    <span>{user?.name}</span>
                    </div>
                    <textarea name="text" onChange={(e)=>setText(e.target.value)} rows="10" placeholder={`What's on you mind, ${user?.name} ?`} className="w-full focus:outline-none">
                    </textarea>
                    {/* {
                        file && <div className="relative w-40 h-40 mx-auto box-border">
                            <img src={preview} alt="" className='w-full h-40 rounded'/>
                            <button onClick={()=>imageRemove()} className='absolute -right-2 -top-3 flex justify-center items-center bg-red-400 h-6 w-6 rounded-full text-white'>X</button>
                        </div>
                    }
                    <label htmlFor="image" className="flex flex-col items-center text-green-500 border rounded px-4 py-2 cursor-pointer">
                    <MdAddPhotoAlternate size={25} />
                    <span className="text-gray-600">Add to your post</span>
                    </label>
                    <input type="file" name="image" id="image" className="hidden" onChange={(e)=>imageSet(e)}/> */}
                    <button type='submit' className="w-full py-2 bg-blue-500 text-white rounded" >Post</button>
                </form>
            </div>
        </div>
    );
};


export const Post = ({postView}) => {
    const user = useSelector(state=>state.auth.user)
    return (
        <div className="p-2 bg-white rounded-md">
          <div className="flex items-center py-2 space-x-2">
            <input onClick={()=>postView()} type="text" placeholder={`What's on you mind, ${user?.name} ?`} className="w-full px-4 py-2 bg-gray-200 rounded-full cursor-pointer focus:outline-none"/>
          </div>
          <hr />
          <div className="pt-2 flex ">
            <button onClick={()=>postView()} className="flex items-center space-x-1 px-4 py-1 rounded hover:bg-gray-50 text-green-500">
              <BsImages size={20}/>
              <span className="text-gray-600">Photo</span>
            </button>
            <button onClick={()=>postView()} className="flex items-center space-x-1 px-4 py-1 rounded hover:bg-gray-50 text-yellow-500">
              <BsEmojiSmile size={20}/>
              <span className="text-gray-600">Feeling/Activity</span>
            </button>
          </div>
        </div>
    );
};

export const SinglePost=({post})=>{
  const [user,setUser] = useState({})
  const {userId} = post;
  useEffect(()=>{
    userInfo(userId,setUser)
  },[userId])
  console.log(user)
  return (
    <div className="bg-white rounded-md space-y-2">
      <div className="flex justify-between items-center px-2 py-1">
        <div className="flex space-x-2">
          <img src={user?.image?.url} alt=""  className='w-10 h-10 rounded-full border'/>
          <p className='flex flex-col text-sm font-semibold'>
            <span>{user?.name}</span>
            <span>{format(post?.createdAt)}</span>
          </p>
        </div>
        <BsThreeDotsVertical/>
      </div>
      <div className="px-2 text-justify">
        {post?.text}
      </div>
      <div className="flex justify-between text-xs px-2 py-1">
        <p>123 Likes</p>
        <p>123 comments</p>
      </div>
      <hr />
      <div className="flex justify-between items-center px-4 pb-1">
        <p className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-1 rounded-md transition-all duration-300">
          <AiOutlineLike/>
          <span>Like</span>
        </p>
        <p className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-1 rounded-md transition-all duration-300">
          <BiComment/>
          <span>Comment</span>
        </p>
        <p className="flex items-center space-x-2 hover:bg-gray-200 px-4 py-1 rounded-md transition-all duration-300">
          <BsShare/>
          <span>Share</span>
        </p>
      </div>
    </div>
  )
}