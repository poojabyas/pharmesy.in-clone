import React, { useState } from 'react';
import './LoginPopup.css'; 

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}> Login </button>
      {isOpen && (
        <div className="login-popup-overlay">
            <div className="login-popup">
              <div className="login-popup-content" >
          <div className="login-popup-container" >
                <span className="close" onClick={togglePopup} >&times;</span>
                <h2>Login</h2>
                <form >
                  <input type="text" placeholder="Username" /> <br/> <br/>
                  <input type="password" placeholder="Password" /> <br/> <br/>
                  <button type="submit">Login</button> <br/> <br/>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
