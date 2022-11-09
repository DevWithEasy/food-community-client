import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkVerifyCode, confirmPassword } from '../../../libs/Verification';

const NewPassword = () => {
    const user = useSelector(state=>state.auth.findUser)
    const navigate = useNavigate()
    const [code,setCode] = useState('')
    const [msg,setMsg] = useState({})
    const [password,setPassword] = useState('')
    const [confirm_Password,setConfirm_Password] = useState('')
    return (
        <div className="m-4 border rounded">
            {
                !msg.status && <div className="px-4 py-2 space-y-2">
                <input type="text" onChange={(e)=>setCode(e.target.value)} className="w-full p-2 border rounded focus:border-blue-400 focus:outline-none"/>
                <button onClick={()=>checkVerifyCode(user._id,code,setMsg)} className="px-4 py-2 bg-blue-500 text-white rounded">Verify code</button>
            </div>
            }
            {
                msg.status &&  <div className="px-4 py-2 space-y-2">
                            <input type="text" onChange={(e)=>setPassword(e.target.value)} name="password" className="w-full p-2 border rounded focus:border-blue-400 focus:outline-none"/>
                            <input type="text" name="confirm_password" onChange={(e)=>setConfirm_Password(e.target.value)} className="w-full p-2 border rounded focus:border-blue-400 focus:outline-none"/>
                            <button onClick={()=>confirmPassword(user._id,code,password,navigate)} className="px-4 py-2 bg-blue-500 text-white rounded">Confirm</button>
                        </div>
            }
        </div>
    );
};

export default NewPassword;