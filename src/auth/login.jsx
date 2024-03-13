import { useState } from "react";
import { supabase } from "../utils/supabaseConfig";
import { Link } from "react-router-dom"

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
    <div class="flex flex-col justify-center content-center">
    <form onSubmit={signInWithEmail}>
      <h2>Login</h2>

      <div class="border-solid border-black ">
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <h2> Password</h2>
      <div class="border-solid border-black ">
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>

      <Link to={"/"} class="border-solid border-black ">
        <button  type="submit">Submit</button>
        </Link>
    </form>
    </div>
  );
};

export default Login;