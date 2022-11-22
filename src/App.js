import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import Signup from './views/auth/Signup';
import Login from './views/auth/Login';
import Question1 from './views/Question1'
import Question2 from './views/Question2'
import Question3 from './views/Question3'
import PrivateView from './views/PrivateView';
import IsPrivate from './components/IsPrivate';
import Activity1 from "./views/Activity1";
import Activity1a from "./views/Activity1a";
import Activity1b from "./views/Activity1b";
import Activity2 from "./views/Activity2";
import Activity2a from "./views/Activity2a";
import Activity2b from "./views/Activity2b"
import Preactivity from "./views/Preactivity";
import EndOfActivities from "./views/EndOfActivities";

function App() {
  return (
    <div className="body">
      <Toaster/>
      <div className="container">      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
          <Route path="/question3" element={<Question3 />} />
          <Route path="/preactivity" element={<Preactivity />} />
          <Route path="/activity1" element={<Activity1 />} />
          <Route path="/activity1a" element={<Activity1a />} />
          <Route path="/activity1b" element={<Activity1b />} />
          
          <Route path="/activity2" element={<Activity2 />} />
          <Route path="/activity2a" element={<Activity2a />} />
          <Route path="/activity2b" element={<Activity2b />} />
          <Route path="/endofactivities" element={<EndOfActivities />} />
          <Route path="/private" element={<IsPrivate><PrivateView/></IsPrivate>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
