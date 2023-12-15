const SimilarJobs=(props)=>{
    const{SimilarJobDetails}=props
    const{CompanyLogo,CompanyType,Description,Location, Rating, Title}=SimilarJobDetails

    return(
        <div>
<img src={CompanyLogo} alt="Company Logo"/>
<h2>{CompanyType}</h2>
<p>{Description}</p>
<p>{Location}</p>
<p>{Rating}</p>
<h1>{Title}</h1>
        </div>
    )

}

export default SimilarJobs