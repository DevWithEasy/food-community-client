import axios from "axios"

export const getAllPost=async(setPosts)=>{
    const res = await axios.get(`http://localhost:3001/api/post/`,{
        headers : {
            "x-access-token" : localStorage.getItem("token")
        }
    })
    setPosts(res.data.data)
}

export const createPost =async(e,text)=>{
    e.preventDefault()
    const config = {
      headers:{
        "x-access-token" : localStorage.getItem("token")
      }
    }
    await axios.post("http://localhost:3001/api/post/",{text:text}, config)
  }

export const getSinglePost=async(id,setPost)=>{
    const res = await axios.get(`http://localhost:3001/api/post/${id}`,{
        headers : {
            "x-access-token" : localStorage.getItem("token")
        }
    })
    setPost(res.data.data)
}