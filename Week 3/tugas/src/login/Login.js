import React from 'react';
import './Login.css'

export default function Login() {
    return(
        <div className="login">
            <h1>Form Login</h1>
      <form>
          <h1> Tugas Pertemuan <br></br>Ketiga</h1>
        <label>
          <p>Username <input type="text" placeholder="masukam username" /> </p>
        </label>
        <label>
          <p>Password <input type="password" placeholder="masukan pasword"/> </p>
        </label>
        <div>
          <buttonLogin type="submit">Submit</buttonLogin><br></br>
        </div>
        <label class="checkbox">
    <input type="checkbox" value="remember-me" id="remember_me"/> Remember Me
        </label>
        <div>
          <buttonCancel type="cencel">Cancel</buttonCancel><br></br>
        </div>
      </form>
      </div>
    )
  }