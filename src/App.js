import {useRef,useState} from "react";
import {signup,useAuth,login,logout} from "./firebase";
import './App.css';

function App() {
 const [loading,setLoading] = useState(false);
 const currentUser = useAuth();

const emailRef = useRef(null);
const passwordRef = useRef(null);

    async function handleSignup(){
        try{
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("error")
        }
        setLoading(false)
    }
    async function handleLogin(){
        try{
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("error")
        }
        setLoading(false)
    }

    async function handleLogout(){
        setLoading(true)
        try{
            await logout();
        } catch {
            alert("error!");
        }
        setLoading(false)
    }

  return (
     <div id="main">
         <div>
             Currently logged in as:{currentUser?.email}
         </div>
         <div id="fields">
         <input ref={emailRef} placeholder="Email" />
         <input ref={passwordRef} type="password" placeholder="Password" />
         </div>

         <button disabled={loading || currentUser} onClick={handleSignup}>Sign Up</button>
         <button disabled={loading || currentUser} onClick={handleLogin}>Log in</button>
         <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>
     </div>
  )
}

export default App;
