import { Component } from "react";

import Cookies from 'js-cookie'
import CircleLoader from "react-spinners/CircleLoader";

import SimilarJobs from "../SimilarJobs/SimilarJobs"

import Skills from '../Skills/Skills'

import './JobDescription.css'

class JobDescription extends Component{

    state={Fulldetails:{},Load:true}

    componentDidMount(){
        this.DescriptionDetails()
    }


    DescriptionDetails=async()=>{
       

        const {match} = this.props
        const {params} = match
        const {id} = params

        const options={
            method:"GET",
            headers:{
             
                Authorization:`Bearer ${Cookies.get("JWT")}`
            }
        }
    

        const Url=`https://apis.ccbp.in/jobs/${id}`

        const Responce=await fetch(Url,options)
        const Code=await Responce.json()

      

       
      
const Det={JobDescription:Code.job_details.job_description,
           EmploymentType:Code.job_details.employment_type,
           LifeatCompanyDescription:Code.job_details.life_at_company.description,
           Logo:Code.job_details.life_at_company.image_url,
           ApplyURL:Code.job_details.company_website_url,
           JobTitle:Code.job_details.title,

           Skill:Code.job_details.skills.map((each)=>({SkillLogo:each.image_url,
                                                        SkillName:each.name
           })),

           Similar:Code.similar_jobs.map((each)=>({CompanyLogo:each.company_logo_url,
                                                    CompanyType:each.employment_type,
                                                    Description:each.job_description,
                                                    Location:each.location,
                                                    Rating:each.rating,
                                                    Title:each.title
           }))

}


    this.setState({Fulldetails:Det,Load:false})
}

LoadingView=()=>{
    return(
        <div>
<CircleLoader  color="#36d7b7" />
        </div>
    )
}



SuccessDescription=()=>{
    const{Fulldetails}=this.state
        const{JobDescription,EmploymentType,LifeatCompanyDescription,Logo,ApplyURL,JobTitle,Similar,Skill}=Fulldetails
        
    return(
        <div>
           <h1>{JobTitle}</h1>
        <h3>{EmploymentType}</h3>
        <p>{JobDescription}</p>
              
                <a href={ApplyURL} target="_blank" rel="noreferrer" >Apply</a>
                <img src={Logo} alt="Logo"/>
                <p>{LifeatCompanyDescription}</p>
                <div>
                    {Skill.map((each)=><Skills  Skillinfo={each}/>)}
                </div>
                <div>
                {Similar.map((each)=><SimilarJobs  SimilarJobDetails={each}/>)}
                </div>
            </div>
    )
}

    render(){
        const{Load}=this.state
       
        return(
           <div className="Siddu">
           
            {Load?this.LoadingView():this.SuccessDescription()}
           </div>
        )
    }
}

export default JobDescription