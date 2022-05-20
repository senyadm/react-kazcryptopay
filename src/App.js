import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import MyAccount from './components/pages/MyAccount';
import Api from './components/pages/Api';
import SignIn from './components/pages/SignIn';

 
function App() {
  return (
    <Router>
      <Navbar /> 
      <Switch>
        <Route path='/' exact component={Home} /> 
      </Switch>
    <Switch>
      <Route path='/my-account' exact component={MyAccount} />
    </Switch>
    <Switch>
      <Route path='/currency' exact component={Api} />
    </Switch>
    <Switch>
      <Route path='/sign-up' exact component={SignIn} />
    </Switch>
      <Footer />
    </Router>
  );
}

export default App;
