import axios from "axios"

export const postJob=(e,data)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/job',data,{
        headers :{
            "x-access-token" : localStorage.getItem("token")
        }
    })
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

export const getAllJob=(setJobs)=>{
    axios.get('http://localhost:3001/api/job/find/all')
    .then(res=>{
        setJobs(res.data.data)
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}
export const getJob=(id,setJob)=>{
    axios.get(`http://localhost:3001/api/job/${id}`)
    .then(res=>{
        setJob(res.data.data)
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}