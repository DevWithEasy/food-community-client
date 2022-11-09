import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { findUser } from '../../features/slice/authSlice';
import { findAccount } from '../../libs/getSingleData';
import { forgetPassword } from '../../libs/Verification';
import hiddenEmail from '../../utils/hiddenEmail';

export const FindSearch = ({value,setUser,setValue,setLoading}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className="m-4 border rounded space-y-2">
        <h3 className="text-xl px-4 py-2">Find Your Account</h3>
        <hr />
        <div className="px-4 py-2 space-y-3">
            <p className="">Please enter your email address or username to search for your account.</p>
            <input type="text" onChange={(e)=>setValue(e.target.value)} className="w-full p-2 border rounded text-gray-500 focus:outline-none focus:border-blue-400 "/>
        </div>
        <hr />
        <div className="px-4 py-2 flex justify-end space-x-2">
            <button onClick={()=>navigate('/login')} className="px-4 py-2 bg-gray-200 text-gray-600 rounded">Cancel</button>
            <button onClick={()=>findAccount(value,setUser,setValue,setLoading,dispatch,findUser)} className="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
        </div>
      </div>
    );
};

export const FindAccount = ({user,setUser}) => {
    const navigate = useNavigate()
    const {email} = user
    const mail = hiddenEmail(email)
    return (
        <div className='m-4 border rounded space-y-2'>
            <h3 className="text-xl px-4 py-2">Find Your Account</h3>
            <hr />
            <div className="flex items-center px-4 py-2 space-x-4">
                <img src={user?.image?.url} alt="" className='h-10 w-10 rounded-full'/>
                <div className="space-y-2">
                    <p>{user?.name}</p>
                    <p>{mail}</p>
                </div>
            </div>
            <hr />
            <div className="px-4 py-2 flex justify-end space-x-2">
            <button onClick={()=>setUser({})} className="px-4 py-2 bg-gray-200 text-gray-600 rounded">Not Now</button>
            <button onClick={()=>forgetPassword(user._id,navigate)} className="px-4 py-2 bg-blue-500 text-white rounded">Continue</button>
        </div>
        </div>
    );
};