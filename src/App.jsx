import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import localStorage from './Api/localStorage';
import './App.css'
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar'
import { checkRefreshToken } from './Redux/actions/userAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const trackingData = localStorage.getItemFromLocalStorage("trackingData");
    trackingData?.accessToken && dispatch(checkRefreshToken(trackingData.accessToken))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  )
}

export default App
