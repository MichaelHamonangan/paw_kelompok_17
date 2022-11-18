import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login';
import Home from './pages/Home/Home' ;
import AddData from './pages/AddData/AddData' ;
import Register from './pages/Register';
import Sidebar from './components/Sidebar/Sidebar'
import Sales from './pages/Sales/Sales';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            
            <Route path='/' element={
              <>
                <Sidebar />
                <Home />
              </>
            }/>

            <Route path='/dashboard' element={
              <>
              <Sidebar />
              <Dashboard />
              </>
            }/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/penjualan-lpg' element={
              <>
              <Sidebar />
              <Sales />
              </>
            }/>
            
            <Route path='/input-data' element={
              <>
                <Sidebar />
                <AddData />
              </>
            }/>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
