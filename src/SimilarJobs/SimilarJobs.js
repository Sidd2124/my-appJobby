import './SimilarJoba.css'

const SimilarJobs=(props)=>{
    const{SimilarJobDetails}=props
    const{CompanyLogo,CompanyType,Description,Location, Rating, Title}=SimilarJobDetails
    const Colores = ["#98FB98", "#A9A9A9", "#DEB887", "#ADD8E6", "#C0C0C0", "#ADFF2F"];
    const Colur = Colores[Math.floor(Math.random() * Colores.length)]; 

    return(
        <div className='Top JobItems'  style={{ backgroundColor: Colur, height: '360px',padding:"5px"}}>
        <h1>{Title}</h1>
     <img src={CompanyLogo} className='CompanyLogo' alt="Logo"/>
     
  
     <p className='Description'>{Description}</p>
     <div className="LowerPart">           <h4>Location:{Location}📍</h4>
     
     <h3>{Rating}⭐Rating</h3>
     <h4>{CompanyType}</h4>
     </div>

 
     
 </div>
    )

}

export default SimilarJobs