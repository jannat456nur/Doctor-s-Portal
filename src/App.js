import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';

import Appointment from './pages/Home/Appointment/Appointment/Appointment';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
          </Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
