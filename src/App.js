import './App.css';

import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom";

import Home from '../src/Home/Home';

import Login from '../src/Login/Login'

import JobDescription from '../src/JobDescription/JobDescription'

import NotFound from '../src/NotFound/NotFound'

import SavedJobs from './SavedJobs/SavedJobs'

import Detail from './Context/Context'


import { Component } from 'react';

class App extends Component{

  state={NewJobs:[]}

  Nikalo=(J)=>{

    const {NewJobs}=this.state
    const UpdatedJobs=NewJobs.filter((each)=>each.id!==J)
    this.setState({NewJobs:UpdatedJobs})
  }

  Mix=(Product)=>{

this.setState(prevState=>({NewJobs:[...prevState.NewJobs,Product]}))
  }

  

  render(){
    const{NewJobs,}=this.state
   return(
<Detail.Provider value={{SavedJobs:NewJobs,Marge:this.Mix,Remove:this.Nikalo}}>
<BrowserRouter>
      <Switch>
        
        <Route exact path="/"  component={Home} />
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Description/:id" component={JobDescription}/>
        <Route exact path="/SavedJobs" component={SavedJobs}/>
        <Route exact path="/NotFound" component={NotFound}/>
        <Redirect to="/NotFound"/>
      </Switch>
    </BrowserRouter>
</Detail.Provider>
   )
  }
}




export default App;
