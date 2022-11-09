import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendVerificationCode, VerifyEmail } from '../../../libs/Verification';

const UnverifiedAccount = () => {
    const user = useSelector(state=>state.auth.user)
    const navigate = useNavigate()
    const [message,setMessage] = useState({})
    const [code,setCode] = useState('')
    const [inputView,setInputView] = useState(false)
    return (
        <div>
            {
                !inputView && <div className="m-4 border rounded">
                    <h3 className="text-xl font-bold px-4 py-2">Please verify account !</h3>
                    <hr />
                    <p className='px-4 py-2 text-gray-600'>
                        Your are not a verified user.Please verify your email address.if you used a verified email address of your now verify your account.
                    </p>
                    <p className='text-center px-4 py-2'>
                        <button className='px-2 py-1 bg-blue-400 text-white rounded' onClick={()=>sendVerificationCode(setMessage,setInputView)}>Send verfication code</button>
                    </p>
            </div>
            }
            {
                inputView && <div className="m-4 border rounded space-y-3">
                    <h3 className="text-xl font-bold px-4 py-2">Verification code</h3>
                    <hr />
                    <div className="text-center px-4 py-2 space-y-2">
                        <label htmlFor="">
                            We sent a verification code your <span className='font-bold'>{user.email}</span> email address.
                        </label>
                        <input type="text" className='w-1/2 p-2 border rounded focus:outline-none focus:border-blue-400' placeholder='Verification code' onChange={(e)=>setCode(e.target.value)}/>
                    </div>
                    <hr />
                    <div className="px-4 py-2 flex justify-end">
                        <button className='px-4 py-2 bg-blue-400 text-white rounded' onClick={()=>VerifyEmail(code,setMessage,navigate)} >{code.length === 0 ? "Please enter code" : "Verify"}</button>
                    </div>
            </div>
            }
            {message.message}
        </div>
    );
};

export default UnverifiedAccount;