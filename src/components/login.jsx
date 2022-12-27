import React from 'react'
import "../CSS/login.css"
export default function login() {
    return (
        <>
            <div className='login-form'>
                <label >FirstName</label>
                <input type="text" />
                <label >LastName</label>
                <input type="text" />
                <label >EmailId</label>
                <input type="mail" />
                <label >Password</label>
                <input type="number" />

                <button type="submit">Login</button>

                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </>
    )
}
