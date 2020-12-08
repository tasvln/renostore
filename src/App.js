import Navbar from './components/Navbar';
import Foot from './components/Foot';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Home/>
      <Foot/>
    </div>
  );
}

export default App;
