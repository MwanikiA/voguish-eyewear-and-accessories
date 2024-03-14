import { useState } from "react";
import { supabase } from "../utils/supabaseConfig";
import { Link } from "react-router-dom"
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail(e) {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if ( error ) {
        console.log(error)
    } else {
        console.log(data)
        window.location.href = '/loginmain'
    }
  }
  
  return (
    <div className="parent-container" >
    <form onSubmit={signInWithEmail}>
      <h2 className="title">Login</h2>

      <div className="child" >
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <h2 className="title"> Password</h2>
      <div className="child">
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>

     <div className="child2">
      <Link  to={"/"} >
        <button type="submit">Submit</button>
        </Link>
      </div>
    </form>
    </div>
  );
};

export default Login;