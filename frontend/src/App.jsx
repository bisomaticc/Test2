import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/NavBar'
import './App.css';
import Form from './components/Form';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreOptions from './components/MoreOptions';
import SignUp from './components/SignUp';
import Login from './components/Login';
import InLogin from './components/InLogin';
import FlightResult from './components/FlightResult';
const CONSTANT_BACKGROUND_IMAGE = './components/pic/Background';


const App = () => {
  return (
    <div className="App">
      <div
        className="background"
        style={{ backgroundImage:  `url(${CONSTANT_BACKGROUND_IMAGE})`  }}
      />
      <div className="overlay">
        <Router>
          <Navbar/>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path ="/more-options" element={<MoreOptions />}></Route>
            <Route path="*" element={<Form />} />
            <Route path="/SignUp" element={<SignUp />}/>
            <Route path ="/login" element={<Login />}/>
            <Route path ="/InLogin" element={<InLogin />}/>
            <Route path="/flight-details" element={<FlightResult />}/>
            <Route path="/more-option-flight-details" element={<FlightResult />}/>
            <Route path="/get-flight-details" element={<FlightResult />}/>
            <Route path="/flightResult" element={<FlightResult />} />
            

          </Routes>
          
        </Router>
      </div>
    </div>
  );
}



export default App;
