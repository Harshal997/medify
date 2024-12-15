import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Find from './components/find-doctors/Find';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
      </Routes>
    </div>
  );
}

export default App;
