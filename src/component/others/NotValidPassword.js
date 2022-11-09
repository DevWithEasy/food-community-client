import { FcHighPriority } from 'react-icons/fc'

const NotValidPassword=()=>{
    return(
        <div className="pl-2 text-xs text-gray-500">
            <p className='flex items-center space-x-2'>
                <FcHighPriority/><span className=''>Minimum length six charecter</span>
            </p>
            <p className='flex items-center space-x-2'>
                <FcHighPriority/><span className=''>Special charecter</span>
            </p>
            <p className='flex items-center space-x-2'>
                <FcHighPriority/><span className=''>Must have Uppercase,Lowercase and number</span>
            </p>
        </div>
    )
}

export default NotValidPassword;
