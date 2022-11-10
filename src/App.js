import { useSelector } from 'react-redux';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import LogIn from './component/User/LogIn/LogIn';
import './index.css';
import Routers from './routers/Routers';

export default function App() {
  const auth = useSelector(state=>state.auth)
  return (
    <div className="">
      <Header/>
      {
        !auth.isAuth && <LogIn/> 
      }
      {
        auth.isAuth && <Routers/>
      }
      <Footer/>
    </div>
  );
}
