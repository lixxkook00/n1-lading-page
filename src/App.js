import { useState } from 'react';
import './App.scss';
import LandingPage from './pages/LandingPage';
import LoadingScreen from './pages/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  },1500)

  return (
    <div className={`App ${loading && 'loading'}`}>

      {
        loading
        &&
        <LoadingScreen />
      }
      
      <LandingPage />


    </div>
  );
}

export default App;
