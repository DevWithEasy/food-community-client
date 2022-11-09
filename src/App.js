import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import './index.css';
import Routers from './routers/Routers';

export default function App() {
  return (
    <div className="">
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  );
}
