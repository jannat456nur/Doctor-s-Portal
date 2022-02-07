import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Home/Appointment/Appointment/Appointment';
import Home from './pages/Home/Home/Home/Home';



function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
        </Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
      </Router>
    </div>
  );
}

export default App;
