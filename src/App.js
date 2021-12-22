import './App.css';

import LandingPage from './pages/jsFiles/LandingPage';
import AdminPage from './pages/jsFiles/AdminPage';
import Footer from './components/jsFiles/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
