import { FcCheckmark } from 'react-icons/fc'

const IsValidEmail=()=>{
    return(
        <div className="flex items-center space-x-2 pl-2 text-xs text-gray-500"><FcCheckmark/><span className='text-green-500'>Successfully enter valid email.</span></div>
    )
}
export default IsValidEmail;
