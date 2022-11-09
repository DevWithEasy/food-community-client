import axios from "axios"
export const getProfile=async(setProfile)=>{
    const res = await axios.get("http://localhost:3001/api/about/me",{
        headers : {
            "x-access-token" : localStorage.getItem("token")
        }
    })
    setProfile(res.data.data)
}

export const findAccount=async(value,setuser,setValue,setLoading,dispatch,findUser)=>{
    try {
        setLoading(true)
        const res = await axios.get(`http://localhost:3001/api/auth/find?q=${value}`)
        if(res.data.status === 200){
            setLoading(false)
            setuser(res.data.data)
            dispatch(findUser(res.data.data))
            setValue('')
        }
    } catch (err) {
        console.log(err.message)
    }
}
