import { useContext } from "react"
import Detail from "../Context/Context"

const SaveItems=(props)=>{

    const{SavedInfo}=props
    const{CompanyLogo, Type, id, Description, Location, Package, Rating, Title}=SavedInfo

    const{Remove}=useContext(Detail)
    const Colores = ["#98FB98", "#A9A9A9", "#DEB887", "#ADD8E6", "#C0C0C0", "#ADFF2F"];
  const Colur = Colores[Math.floor(Math.random() * Colores.length)]; 

    const Out=()=>{
        Remove(id)
    }
    return(
        <div className='Top JobItems'  style={{ backgroundColor: Colur, height: '360px',padding:"5px"}}>
               <h1>{Title}</h1>
            <img src={CompanyLogo} className='CompanyLogo' alt="Logo"/>
            <h4>{Type}</h4>
         
            <p className='Description'>{Description}</p>
            <div className="LowerPart">           <h4>Location:{Location}📍</h4>
            <h4>CTC:{Package}💰</h4>
            <h3>{Rating}⭐Rating</h3>
            </div>
 
        
            <button onClick={Out} className='Button'>Remove Job</button>
        </div>
    )

}

export default SaveItems