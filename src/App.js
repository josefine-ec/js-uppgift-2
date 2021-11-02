import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes
import RegisterCustomer from './views/RegisterCustomer';
import Home from './views/Home';

// Components
import Navbar from './components/Navbar';


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/registercustomer" exact component={RegisterCustomer} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
