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
          <Route path="/private" element={<IsPrivate><PrivateView/></IsPrivate>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
