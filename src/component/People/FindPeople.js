import {  useState } from "react";
import { FindAccount, FindSearch } from "../others/FindAccount";
import Loading from "../others/Loading";

const FindPeople = () => {
  const [loading,setLoading] = useState(false)
  const [user,setUser]=useState({})
  const [value,setValue] = useState('')
  console.log(user,value)
  return (
    <div className="">
      {!user.email && <FindSearch value={value} setUser={setUser} setValue={setValue} setLoading={setLoading}/>
      }
      {loading && <Loading text="Searching"/>}
      {user.email && <FindAccount user={user} setUser={setUser}/>}
    </div>
  )
};
export default FindPeople;
