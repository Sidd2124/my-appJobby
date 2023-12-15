import './App.css';

import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";

import Home from '../src/Home/Home';

import Login from '../src/Login/Login'

import JobDescription from '../src/JobDescription/JobDescription'

import NotFound from '../src/NotFound/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Description/:id" component={JobDescription}/>
        <Route exact path="/NotFound" component={NotFound}/>
        <Redirect to="/NotFound"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
