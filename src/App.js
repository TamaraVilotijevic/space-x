import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from './components/views/HomeView';
import LaunchesView from './components/views/LaunchesView';
import RocketsView from './components/views/RocketsView';
import ShipsView from './components/views/ShipsView';
import LaunchesContextProvider from './context/LaunchesContext';
import RocketsContextProvider from './context/RocketsContext';
import SingleLaunch from './components/launches/SingleLaunch';
import SingleRocket from './components/rockets/SingleRocket';
import SingleShip from './components/ships/SingleShip';
import ShipsContextProvider from './context/ShipsContext';

function App() {
  return (
    <div className="App">
      <Router>
        <LaunchesContextProvider>
          <RocketsContextProvider>
            <ShipsContextProvider>
              <Navbar />
              <Routes>
                <Route path='/launches' element={<LaunchesView />} />
                <Route path='/launches/:launchId' element={<SingleLaunch />} />
                <Route path='/rockets' element={<RocketsView />} />
                <Route path='/rockets/:rocketId' element={<SingleRocket />} />
                <Route path='/ships' element={<ShipsView />} />
                <Route path='/ships/:shipId' element={<SingleShip />} />
                <Route path='/' element={<HomeView />} />
              </Routes>
            </ShipsContextProvider>
          </RocketsContextProvider>
        </LaunchesContextProvider>
      </Router>
    </div>
  );
}

export default App;
