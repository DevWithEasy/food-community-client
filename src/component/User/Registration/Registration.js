import { useState } from "react";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Loading from "../../others/Loading";
import handleRegistrationInput from "../../../utils/handleRegistrationInput";
import axios from "axios"

const Registration = () => {
  const [loading,setLoading] =useState(false)
  const [error,setError] = useState({
    username: "",
    name : "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  //login form state
  const [signUp, setSignUp] = useState({
    username: "",
    name : "",
    email: "",
    password: "",
    confirmPassword: "",
    image : {
      public_id:"",
      url : ""
    }
  });

  const signIn =(e) =>{
    e.preventDefault();
    setLoading(true)
    const {confirmPassword,...data} = signUp
    axios.post('http://localhost:3001/api/auth/signup',data)
    .then(res=>{
      if(res.data.success){
        console.log(res)
        setLoading(false)
    }})
    .catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }
  return (<>
      {
        loading ? <Loading text='signing'/>
        :
        <div className="px-3 pt-5 pb-10 space-y-6 m-2 my-10 border rounded-md bg-gray-50">
      <div className="">
        <h1 className="text-xl text-slate-500 font-bold">Welcome to TFT Foundation</h1>
        <span className="text-gray-400 text-sm block w-3/4">Join our professional family and creat your professional profile easily.
        Communicate all member and get job offer and circular
        </span>
      </div>
      <form className="w-full space-y-3" onSubmit={(e)=>signIn(e)}>
        <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100 bg-white">
          <span className="flex items-center px-3 "><FaUserAlt className="text-gray-400"/></span>
          <input
            type="text"
            name="username"
            className="w-full p-2 border-none focus:outline-none rounded"
            placeholder="Enter username"
            required
            onChange={(e) =>handleRegistrationInput(e,signUp,setSignUp,error,setError)}
          />
        </div>
        {error.username && <p>{error.username}</p>}
        <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100 bg-white">
          <span className="flex items-center px-3 "><FaUserAlt className="text-gray-400"/></span>
          <input
              type="text"
              name="name"
              className="w-full p-2 border-none focus:outline-none rounded"
              placeholder="Enter full name"
              required
              onChange={(e) =>handleRegistrationInput(e,signUp,setSignUp,error,setError)}
          />
        </div>
        {error.name && <p>{error.name}</p>}
        <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100 bg-white">
          <span className="flex items-center px-3 "><FaUserAlt className="text-gray-400"/></span>
          <input
              type="email"
              name="email"
              className="w-full p-2 border-none focus:outline-none rounded"
              placeholder="Enter valid email address"
              required
              onChange={(e) =>handleRegistrationInput(e,signUp,setSignUp,error,setError)}
          />
        </div>
        {error.email && <p>{error.email}</p>}
        <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100 bg-white">
          <span className="flex items-center px-3 "><FaKey className="text-gray-400"/></span>
          <input
            type="text"
            name="password"
            className="w-full p-2 border-none focus:outline-none rounded"
            placeholder="Enter strong password"
            required
            onChange={(e) =>handleRegistrationInput(e,signUp,setSignUp,error,setError)}
          />
        </div>
        {error.password && <p>{error.password}</p>}
        <div className="flex items-center border border-blue-100 rounded shadow shadow-blue-100 bg-white">
          <span className="flex items-center px-3 "><FaKey className="text-gray-400"/></span>
          <input
              type="text"
              name="confirmPassword"
              className="w-full p-2 border-none focus:outline-none rounded"
              placeholder="Enter confirm password"
              required
              onChange={(e) =>handleRegistrationInput(e,signUp,setSignUp,error,setError)}
          />
        </div>
        {error.confirmPassword && <p>{error.confirmPassword}</p>}
          <input
            type="submit"
            value="Sign Up"
            className="block w-40 mx-auto p-2 bg-blue-500 text-white rounded cursor-pointer"
          />
      </form>
      <div className="text-center text-gray-400">
        <span>Are you already user ? <Link to='/login' className="font-bold text-green-500">Login now</Link></span><br />
        <span>Forget your password? <Link to='/forgetPassword' className="font-bold text-blue-500">Reset now</Link></span>
      </div>
    </div>
      }
  </>);
};
export default Registration;
