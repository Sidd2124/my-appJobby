import React, { useContext } from 'react';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Detail  from '../Context/Context';

import SaveItems from '../SavedItems/Saveditems'

import './SavedJobs.css';


const NothingView=()=>{
    return(
        <div className='Center'>
             
             <h2 className='NoJobs'>No Jobs Saved🤐</h2>
               
             <Link className='JobItem' to="/">
        <h1 className='Back' >Back to Home</h1>
    </Link>
        </div>
    )
}

const SavedJobs=()=>{
    const { SavedJobs } = useContext(Detail);

    return(
        <div >
             
            <div  >
           
            {SavedJobs.length===0?NothingView()
:<div><h1>SavedJobs:</h1><div className='Saved'>{SavedJobs.map((each)=><SaveItems SavedInfo={each}/>)}</div></div>}
</div>
        </div>
    )
    
}

export default SavedJobs


