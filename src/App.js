import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Find from './components/find-doctors/Find';
import Bookings from './components/bookings/Bookings';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </div>
  );
}

export default App;
