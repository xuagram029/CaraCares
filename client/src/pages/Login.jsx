import { useRef, useEffect, useState, useContext } from "react"
import  AuthContext from '../context/AuthProvider'
import axios from "axios"

const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/user', 
                JSON.stringify({username:user, password:pwd}),
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log(JSON.stringify(res?.data))
            const accessToken = res?.data?.accessToken;
            const roles = response?.data?.roles
            setAuth({user, pwd, roles, accessToken})

            setUser('')
            setPwd('')
            setSuccess(true)
        } catch (err) {
            if(!err?.response){
                setErrMsg('No Server Response')
            }else if(err.response?.status === 400){
                setErrMsg('Missing Username or Password')
            }else if(err.response?. status === 401){
                setErrMsg('Unauthorized')
            }else{
                setErrMsg('Login Failed')
            }
            errRef.current.focus();
        }
    }

  return (
    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
    ) : (
        <div className="flex flex-col justify-center items-center min-h-[100vh] p-5 ">
            <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-4 bg-[rgba(0,0,0,0.4)]">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-evenly grow pb-4">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <a href="#">Sign Up</a>
                    </span>
                </p>
            </section>
        </div>
    )}
</>
  )
}

export default Login