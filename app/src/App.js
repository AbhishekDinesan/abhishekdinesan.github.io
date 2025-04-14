import './App.css';
import { Provider} from "./components/ui/provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Block from './components/footer'
import LandingPage from './pages/LandingPage'
import PersonalPage from './pages/PersonalPage';
import CareerPage from './pages/CareerPage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/personal" element={<PersonalPage />} />
            <Route path="/career" element={<CareerPage />} />
          </Routes>
          <Block />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
