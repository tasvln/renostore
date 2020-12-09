import Navbar from './components/Navbar';
import Foot from './components/Foot';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      <Foot/>
      </div>
    </Router>
  );
}

export default App;
