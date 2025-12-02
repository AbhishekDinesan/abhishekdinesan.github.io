import './App.css';
import { Provider} from "./components/ui/provider"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Block from './components/footer'
import LandingPage from './pages/LandingPage'
import PersonalPage from './pages/PersonalPage';
import CareerPage from './pages/CareerPage';
import IdeasPage from './pages/IdeasPage';
import GalleryPage from './pages/GalleryPage';
import RewrittenPage from './pages/RewrittenPage';

function App() {
  return (
    <Provider>
      <Router>
        <div
          className="App"
          style={{
            display: 'flex',
            flexDirection: "column",
            minHeight: "100vh",
            paddingLeft: "clamp(0.5rem, 2vw, 2rem)",
            paddingRight: "clamp(0.5rem, 2vw, 2rem)",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%"
          }}
        >
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/personal" element={<PersonalPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route path="/ideas" element={<IdeasPage />} />
              <Route path="/ideas/rewritten" element={<RewrittenPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </div>
          <Block />
        </div>
      </Router>
    </Provider>
  );
}


export default App;
