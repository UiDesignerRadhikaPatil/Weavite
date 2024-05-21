import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Sidebar from './component/Sidebar';
import Home from '../src/loom/Home';
import Dashboard from '../src/component/Dashboard';
// import LoomDetails from './pages/LoomDetails';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sidebar' element={<Sidebar />}>
            <Route path='home' element={<Home/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            

     
           
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
