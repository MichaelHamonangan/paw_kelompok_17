import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Home from './pages/Home/Home' ;
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/penjualan-lpg'/> element={<Sales />}*/}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
