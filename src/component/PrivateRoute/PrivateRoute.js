import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';
const PrivateRoute = () => {
  const auth = useSelector((state)=>state.auth)
  const location = useLocation()
  return(
    <div className="">
      {
        auth.isAuth? <Outlet/>:<Navigate to='/login' replace state={{from:location}}/>
      }
    </div>
  )
};
export default PrivateRoute;
