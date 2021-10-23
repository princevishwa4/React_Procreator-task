import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Onboarding from './components/Onboarding/Onboarding';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Onboarding />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/storage_management">
          <Home />
        </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
