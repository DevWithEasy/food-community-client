import axios from "axios"

export const userInfo=async(id,setUser)=>{
    const res = await axios.get(`http://localhost:3001/api/auth/user/${id}`,{
        headers : {
            "x-access-token" : localStorage.getItem("token")
        }
    })
    setUser(res.data.data)
}