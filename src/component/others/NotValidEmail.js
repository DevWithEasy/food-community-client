import { FcHighPriority } from 'react-icons/fc'
const NotValidEmail=()=>{
    return(
        <div className="flex items-center space-x-2 pl-2 text-xs text-gray-500"><FcHighPriority/><span className=''>Please enter a valid email address...</span></div>
    )
}
export default NotValidEmail;
