import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: true
         }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else    
            this.setState({isLogin: true});
    }

    render() { 
        return ( 
            <div style={{marginTop:"50px"}}>
                <Grid container>
                    <Grid item xs={8}>
                    <img src='https://www.bindcover.com/icon/login-ico.png' alt = ''/>
                    </Grid>
                    <Grid item xs={4}>
                       <div className="loginpage__main">
                           
                           <div>
                               <div className="loginpage_rightcomponent">
                        
                                     {
                                         this.state.isLogin ? <SignIn/> : <SignUp/>
                                     }

                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            
                                            <div className="login__dividor"></div>
                                        </div>

                               </div>

                                <div className="loginpage__signupoption" >
                                    {
                                        this.state.isLogin ?
                                        <div className="loginPage__signin">
                                                 Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"500", "color":"blue", "fontSize" : "14px"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"500", "color":"blue", "fontSize" : "14px"}}>Sign in</span>
                                        </div>
                                    }
                                    
                                   
                                </div>
                           </div>
                       </div>
                    </Grid>
                    
                </Grid>
            </div>
         );
    }
}
 
export default Login;