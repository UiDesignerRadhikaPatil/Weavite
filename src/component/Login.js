import React, { useState } from "react";
import '../common/static/css/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiFacebook, CiTwitter, CiInstagram ,  } from "react-icons/ci";



const AdminLogin = () => {

    const [passShow, setPassShow] = useState(false);
    const navigate = useNavigate();

    
  const handleLogin = () => {
    // Perform login logic
    navigate('/sidebar');
  };


    return (
        <>
            <div>
                <div className='adminlogin-container'>
                    <div className='company-info'>
                        <div className='intro'>
                            <div className="logo">
                                <img src='' alt="" />
                            </div>
                        </div>
                        <h2>Textile Industry </h2>

                        <div className="social-icons">
                            <CiTwitter className="sicon" />
                            <CiFacebook className="sicon" />
                            <CiInstagram  className="sicon" />
                        </div>

                    </div>

                    <div className='login-container' >
                        <form autoComplete="off" className='login-form'>
                            <h2>Login </h2>
                            <label htmlFor="email">Email</label>
                            <input className="email-input" 
                                id="email"
                                type="email-address"
                                placeholder="Enter your email"
                            />

                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input
                                    id="password"
                                    type={passShow ? "text" : "password"}
                                    placeholder="Enter your password"
                                />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? <FaEyeSlash className="eye-icon" /> : <FaEye className="eye-icon" />}
                                </div>
                            </div>


                            <p className="forgot-password-link">
                                <Link to="/forgot-password" className="pass-link" style={{ textDecoration: 'none', fontWeight: '300', cursor: 'pointer', color: ' #FF5F15', fontSize:'14px' }}>Forgot Password?</Link>
                            </p>

                            <button type="submit" className="login-form-btn" onClick={handleLogin} >
                                Login
                            </button>
                            <p style={{fontSize:'14px'}}>
                                Don't have a Account ?
                            </p>

                            <div className="navlink-container">
                                <div className='loom-class'>
                                    <Link  className='loom' style={{ textDecoration: 'none', fontSize: '14px', color: '#135D66', outline: '2px solid #135D66', padding:'10px', borderRadius:'10px' }}>Create new loom unit</Link>
                                </div>

                                <div className='trader-class'>
                                    <Link className='trader'  style={{ textDecoration: 'none', fontSize: '14px', color: '#135D66', outline: '2px solid #135D66', padding:'10px', borderRadius:'10px' }}>Create new Trader</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AdminLogin