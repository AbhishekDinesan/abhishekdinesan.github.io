import './App.css';
import { Provider} from "./components/ui/provider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Block from './components/footer'
import LandingPage from './pages/LandingPage'
import PersonalPage from './pages/PersonalPage';
import CareerPage from './pages/CareerPage';
import IdeasPage from './pages/IdeasPage';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div
          className="App"
          style={{
            display: 'flex',
            flexDirection: "column",
            minHeight: "100vh",
            paddingLeft: "1em",
            paddingRight: "1em"
          }}
        >
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/personal" element={<PersonalPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/ideas" element={<IdeasPage />} />
            </Routes>
          </div>
          <Block />
        </div>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
