import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Sidebar from './component/Sidebar';
import Home from '../src/loom/Home';
import Dashboard from '../src/component/Dashboard';
import LoomDetails from './loom/LoomDetails';
import LoomBooking from './loom/LoomBooking';
import Jobwork from './loom/Jobwork';
import Liveorder from './loom/Liveorder';
import Cancelledorder from './loom/Cancelledorder';
import GetYarn from './loom/GetYarn'; 
import Calculation from './loom/Calculation';
import CompletedOrder from './loom/CompletedOrder';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/sidebar' element={<Sidebar />}>
            <Route path='home' element={<Home/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='loomdetails' element={<LoomDetails/>} />
            <Route path='loomBooking' element={<LoomBooking/>} />
            <Route path='jobwork-enquiry' element={<Jobwork/> } />
            <Route path='live-orders' element={<Liveorder/> } />
            <Route path='cancelled-order' element={<Cancelledorder/> } />
            <Route path='get-yarn' element={<GetYarn/> } />
            <Route path='calculation' element={<Calculation/> } />
            <Route path='completed-orders' element={<CompletedOrder/> } />

     
           
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
