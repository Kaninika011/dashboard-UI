import React from 'react';
import './authScreen.css';
import AuthScreen from '../components/authScreen';
import 'animate.css';
import Socials from '../components/Socials';



const AuthPage = () => {


  return (
    <div className='signin__page__container'>
         
              <div className="form__container">
            
                <div className ="animate__animated animate__bounce animate__delay-1s" id='text-main'>BASE</div>
                <AuthScreen/>
            </div>
            <Socials/>
</div>
            
    
  )
}

export default AuthPage;