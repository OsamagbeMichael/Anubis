import React,{useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import SignInImage from "/Users/uhunmwaghoosamagbemichael/Desktop/CommuniCADE/client/src/assets/signup.jpg";

const cookies = new Cookies();
const initialState = {
    fullName: '',
    username: '',
    password: '',
    phoneNumber: '', 
    avatarURL : '',
}
const Auth = () => {



const [form,setform] = useState(initialState);
// we are creating a state to know if we are on the sign up or we are not. 
const [isSignup,setIsSignup]=useState(true);
const handleChange=(e)=>{
    setform({...form, [e.target.name]: e.target.value});

    console.log(form);



}
const switchMode = () => {
    setIsSignup((prevIsSignup)=> !prevIsSignup);
}

const handleSubmit = async(e)=>{
    e.preventDefault();

    const {fullName,username,password,phoneNUmber,avatarURL}=form;
    const URL = 'http://localhost:5000/auth';


    const {data:{token,userId,hashedPassword}} = await axios.post(`${URL}/${isSignup ? 'signup':'login'}`, {
        fullName,username,password,phoneNUmber,avatarURL,

    });
    cookies.set('token',token);
    cookies.set('username',username);
    cookies.set('fullName',fullName);
    cookies.set('userId',userId);
    
    if(isSignup){
        cookies.set('phoneNumber',phoneNUmber);
        cookies.set('avatarURL',avatarURL);
        cookies.set('hashedPassword',hashedPassword);
    }

    window.location.reload();
}
  return (
    <div className="auth__form-container">
        <div className='auth__form-container_fields'>
            <div className = "auth__form-container_fields-content">
                {/* if isSignUp is true, sign up otherwise show sign in */}
                <p> {isSignup? 'Sign Up': 'Sign In'}</p>

                {/*  the && points out what we will want to show if it is on sign up*/}
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                                 <input 
                                 name = "Full Name"
                                type="text"
                                placeholder="Full Name"
                                onChange = {handleChange}
                                required
                                 />
                        </div>
                    )}
                      <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='username'>Username</label>
                                 <input
                                     name = "Full Name"
                                     type="text"
                                    onChange={handleChange}
                                    placeholder="UserName"
                                    required
                                />
                        </div>
                        {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <input 
                                name = "phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                                onChange = {handleChange}
                                required
                            />
                        </div>
                    )}

                {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="avatarURL">Avatar URL </label>
                            <input 
                                     name = "avatarURL"
                                     type="text"
                                     placeholder="Avatar URL"
                                     onChange = {handleChange}
                                    required
                            />
                        </div>
                    )}

                      <div className='auth__form-container_fields-content_input'>
                            <label htmlFor="avatarURL">Password </label>
                             <input 
                                  name = "password"
                                type="password"
                                placeholder="Password"
                                onChange = {handleChange}
                                required
                            />
            </div>


            {isSignup && (
                    <div className='auth__form-container_fields-content_input'>
                          <label htmlFor="confirmPassword">Confirm Password </label>
                              <input 
                                  name = "confirmPassword"
                                  type="password"
                                    placeholder="Confirm Password"
                                    onChange = {handleChange}
                                    required
                                />
                    </div>
                     )}


                     <div className='auth__form-container_fields-content_button'>
                        <button> {isSignup ? "Sign Up" : "Sign In"} </button>
                     </div>

        </form>
        <div  className='auth__form-container_fields-account'>
           <p>
                {
                    isSignup
                    ? "Already have an acccount?"
                    : "Dont have an account?"
                }

                <span onClick={switchMode}>
                    {isSignup ? 'Sign In':'Sign Up'}
                </span>
            </p>
        </div>
      </div>
    </div>
    <div className='auth__form-container_image'>
        <img src = {SignInImage} alt= "sign in"/>
    </div>
    </div>
  )
}

export default Auth
