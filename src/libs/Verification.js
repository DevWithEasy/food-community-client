import axios from "axios";
export const sendVerificationCode=(setMessage,setInputView)=>{

    axios.post("http://localhost:3001/api/auth/verify",{},{headers:{
        "x-access-token" : localStorage.getItem("token")
    }}).then(res=>{
        if(res){
            setInputView(true)
        }
        setMessage(res.data)
    })

}


export const VerifyEmail=async(code,setMessage,navigate)=>{

    const res = await axios.put(`http://localhost:3001/api/auth/verify/${code}`,{},{
        headers:{
            "x-access-token" : localStorage.getItem("token")
        }
    })
    if(res){
        setMessage(res.data)
        navigate("/")
    }
}

export const forgetPassword=async(id,navigate)=>{

    const res = await axios.post(`http://localhost:3001/api/auth/forget/${id}`)
    if(res.data.status === 200){
        navigate("/new_password")
    }
}

export const checkVerifyCode=async(id,code,setMsg)=>{
    const res = await axios.get(`http://localhost:3001/api/auth/forget_verify/${id}/${code}`)
    setMsg(res.data)
}

export const confirmPassword =async(id,code,password,navigate)=>{
    const res = await axios.put(`http://localhost:3001/api/auth/forgetVerify/${id}/${code}/${password}`)
    if(res.data.status === 200){
        navigate("/login")
    }
}