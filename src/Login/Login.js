import {Component} from 'react'

import Cookies from 'js-cookie'



import './Login.css';

class Login extends Component {
    state={User:"",Password:"",Warning:"",Counter:0,CounterView:true}

    GetUser=(event)=>{
        this.setState({User:event.target.value})
    }

    GetPassword=(event)=>{
        this.setState({Password:event.target.value})
    }

    Success = (Token) => {
        const { history } = this.props;
        
    
        Cookies.set("JWT", Token, {
            expires: 30,
            path: "/"
        });
        
        const Timer=setInterval(() => {
            const{Counter}=this.state
            this.setState(prevState=>({Counter:prevState.Counter+1}))
            if(Counter===100){
                clearInterval(Timer)
                history.push("/");
            }
        }, 50);
        
    
        
    };
    

    Failure=(Warn)=>{
        this.setState({Warning:Warn})
    }

    LoginCounter=()=>{
        const {Counter}=this.state
       
        return(
            <div className='LoginCounter'>
               
                <h1 className='Heading'>{Counter}%</h1>
               
                


            </div>
        )
    }

    LoginIndex=()=>{
        const {Warning}=this.state
        return(
            <div>
        <form onSubmit={this.Login} className='LoginFrame'>
       
        <img className='LoginHeading' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="Logo"/>
       
        <div>
        <input onChange={this.GetUser} type='Text' placeholder='EnterUserName'/>
        </div>
        <div>
        <input onChange={this.GetPassword} type='Text' placeholder='Enter Password'/>

        
        </div>
        <button type='Submit' >
            Login
        </button>
         
      
        </form>
        <p className='Warning'>*{Warning}</p>
        </div>
        )
    }

    Login=async(event)=>{
        
        event.preventDefault();
        const{User,Password}=this.state
        const New={
            username:User,
            password:Password
        }
        const options={
            method:"POST",
            body:JSON.stringify(New)

        }

        const Url="https://apis.ccbp.in/login"

        const Responce=await fetch(Url,options)

        const Code=await Responce.json()
       
if(Responce.ok){
    this.Success(Code.jwt_token)
    this.setState({CounterView:false})

    

}else{
    this.Failure(Code.error_msg)
}

    }
render(){
    const{CounterView}=this.state
    return(
        <div className='Main'>
        <div>{CounterView?this.LoginIndex():this.LoginCounter()}</div>
        
        
    </div>
    )
}
}



export default Login