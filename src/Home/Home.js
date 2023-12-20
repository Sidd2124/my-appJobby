import {Component}  from 'react'

import './Home.css'
import { Redirect,Link } from 'react-router-dom';



import CircleLoader from "react-spinners/CircleLoader";

import Cookies from 'js-cookie'

import JobItems from '../JobItems/Jobitems'




class Home extends Component{
state={CompanyList:[],Type:"FULLTIME",IsLoading:true}

componentDidMount(){
  this.Start()
}



JobTypeFullTime=()=>{
  this.setState({Type:"FULLTIME"},this.Start)
}

JobTypePartTime=()=>{
  this.setState({Type:"PARTTIME"},this.Start)
}
JobTypeIntership=()=>{
  this.setState({Type:"INTERNSHIP"},this.Start)
}

JobTypeFreelance=()=>{
  this.setState({Type:"FREELANCE"},this.Start)
}

LogOut=()=>{
  Cookies.remove("JWT")
  const{history}=this.props
  history.push("/Login")
}



  Start=async()=>{
    const{Type}=this.state
const options={
  method:"GET",
  headers:{
    Authorization:`Bearer ${Cookies.get("JWT")}`
  }
}
    const Url=`https://apis.ccbp.in/jobs?employment_type=${Type}`

    const Responce=await fetch(Url,options)
    const Code =await Responce.json()

    const Updated =  Code.jobs.map((each) => ({
      CompanyLogo: each.company_logo_url,
      Type: each.employment_type,
      id: each.id,
      Description: each.job_description,
      Location: each.location,
      Package: each.package_per_annum,
      Rating: each.rating,
      Title: each.title,
    })) 
    

  this.setState({CompanyList:Updated,IsLoading:false})


  }

  

  

  render(){
    const{CompanyList,IsLoading,Type}=this.state
    const Result = Cookies.get("JWT");
  if (Result === undefined) {
    return <Redirect  to="/Login"/>
  }
    
    return(
      <div className='Home'>
     
    <div className='TopJobs'>
     <img className='AppLogo' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="Logo"/>
     <Link className='SavedJob' to="/SavedJobs">
  <h1>Saved Jobs</h1>
</Link>
</div>
         <h1 className='JobTypeHeading'>Employment Type</h1>
<div className='JobsMain'>
  
      <div className='JobsTypesContainer'>
     
<div className='JobTypes'>
  <input type='checkBox' onClick={this.JobTypeFullTime} checked={Type==="FULLTIME"}/>
  <h4>FullTime</h4>
</div>
<div className='JobTypes'>
  <input type='checkBox' onClick={this.JobTypePartTime} checked={Type==="PARTTIME"}/>
  <h4>PartTime</h4>
</div>
<div className='JobTypes'>
  <input type='checkBox' onClick={this.JobTypeIntership} checked={Type==="INTERNSHIP"}/>
  <h4>InterShip</h4>
</div>
<div className='JobTypes'>
  <input type='checkBox' onClick={this.JobTypeFreelance} checked={Type==="FREELANCE"}/>
  <h4>Freelance</h4>
 
</div>


</div>





      
<div  >




{IsLoading?<CircleLoader  color="#36d7b7" />:<div className='JobsItem'>

<h1 className='JobRecomendation'>RecomendedJobs:{CompanyList.length}</h1>
<button className='LogOut' onClick={this.LogOut}>Logout</button>



<div className='Jobs'>{CompanyList.map((each) => <JobItems key={each.id} Details={each} />)}
</div>
</div> }
</div>

    
 
    </div>
    </div>
  )

  }
}




export default Home;
