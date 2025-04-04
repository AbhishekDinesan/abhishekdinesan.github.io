import './App.css';
import { Provider} from "./components/ui/provider"
import Navbar from './components/navbar'
import Block from './components/footer'



function App() {
  return (
    <Provider>
    <div className="App" >
      <Navbar />
      <Block />
    </div>
    </Provider>
    
  );
}

export default App;
