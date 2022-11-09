import axios from "axios"

const signIn =async (e,data,loading,setLoading,dispatch,login,navigate,location) =>{
    setLoading(!loading)
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:3001/api/auth/signin",data)
      if(res){
        setLoading(false)
        dispatch(login(res.data.data))
        localStorage.setItem("token",res.data.token)
      }
      if(!res.data.data.isVerified){
        navigate("/unverified_user")
      }
      if(location.state?.from){
        navigate(location.state.from)
      }
      if(res.data.data.isVerified && !location.state?.from){
        navigate("/")
      }
    }catch(err){
      console.log(err)
      if(err){
        setLoading(false)
      }
    }
  }
  export default signIn;