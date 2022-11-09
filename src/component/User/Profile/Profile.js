import { useEffect, useState } from 'react';
import { getProfile } from '../../../libs/getSingleData';

const Profile = () => {
  const [profile,setProfile] = useState({})
  useEffect(()=>{
    getProfile(setProfile)
  },[])
  console.log(profile)
  return (
    <div className="">

    </div>
  );
};
export default Profile;
