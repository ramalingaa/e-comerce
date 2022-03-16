import React from 'react'
import "../Address/Address.css"
export default function Login() {
  return (
    <div className = "login-page-wrapper">
        <div className = "login-card-wrapper">
            <p className = "text-large login-header">Login</p>
            <label className = "input-label">
                <input type = "email" placeholder = " " className = "i-text input-name login-input"/>
                <span className = "input-placeholder">Email Address</span>
            </label>
            <label className = "input-label">
                <input type = "password" placeholder = " " className = "i-text input-name login-input"/>
                <span  className = "input-placeholder">Password</span>
            </label>
            <div className = "rememberMe-wrapper">
                <label><input type = "checkbox" className = "remember-checkbox"/>Remember me</label>
                <p className = "login-forgotPassword">Forgot password ?</p>
            </div>
            <button className = "btn primary">Login</button>
            <p className = "login-header create-account">Create new Account</p>
        </div>
    </div>
  )
}
