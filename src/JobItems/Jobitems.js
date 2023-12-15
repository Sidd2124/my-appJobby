import {Link} from 'react-router-dom'




import './Jobitem.css';

const JobItems=(props)=>{
    const{Details}=props
    const{CompanyLogo,Type,id,Description,Location, Package,Rating,Title}=Details
  
    const Colores=["#98FB98","#A9A9A9","#DEB887","#ADD8E6","#C0C0C0","	#ADFF2F"]
    const Colur = Colores[Math.ceil(Math.random() * Colores.length)];

    return(
        
                 
                <div className='Top'>
             <div className='JobItems' style={{ backgroundColor: Colur }}>
            <img className='CompanyLogo' src={CompanyLogo} alt="Company Name" />
            <h4>{Type}</h4>

            <p className='Description'>{Description}</p>

            <h4>{Rating} ⭐ Rating</h4>
            <h1>{Title}</h1>

        </div><div className='Bottom'>
                <div>

                    <h4>₹{Package}</h4>
                    <p>{Location}</p>
                </div>
                <Link className='JobItem' to={`/Description/${id}`}>
                    <button className='Button'>Details</button>
                </Link>
              
            </div></div>


       
    )
}

export default JobItems