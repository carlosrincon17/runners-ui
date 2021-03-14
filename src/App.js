import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/auth/login.component';
import DashboardBase from './components/commons/base.component';
import Register from './components/auth/register.component';
import LandingPage from './components/landing/landing.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
