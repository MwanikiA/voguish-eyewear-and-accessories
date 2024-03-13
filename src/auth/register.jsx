import { useState } from "react"
import { supabase } from '../utils/supabaseConfig'
import { Link } from "react-router-dom"


const Register = ()=> {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function signUpNewUser(e) {
        e.preventDefault();
        
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            emailRedirectTo: 'http://localhost:5173/',
          },
        })

        if ( error ) {
            console.log(error)
        } else {
            console.log(data)
        }
      }
      
    return (
        <div class="flex flex-col justify-center content-center">
        <form onSubmit={signUpNewUser}>
            <h2>Register</h2>
            <div class="border-solid border-black ">
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <h2> Password</h2>
            <div class="border-solid border-black ">
            <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div class="border-solid border-black ">
                <Link to={"/loginmain"}>
                    <button type="submit">Submit</button>
                    </Link>
            </div>
        </form>
        </div>
    )
}

export default Register