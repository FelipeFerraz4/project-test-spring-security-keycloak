import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
    </Router>
  )
}

export default App;