import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import axios from "axios"
import { useNavigate } from "react-router"

const Login2 = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        pass: undefined
    })

    const {user, loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try {
            const res = await axios.post("http://localhost:8000/admin/login", credentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            navigate('/')
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE"})
            console.log(err.response.data)
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGOUT" })
        try {
            await axios.post("http://localhost:8000/admin/logout")
            // console.log(res.data.message)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(user){
            navigate("/")
        }
    }, [user, navigate])

  return (
    <div>
        <input type="text" placeholder="username" id="username" onChange={handleChange}/>
        <input type="text" placeholder="password" id="pass" onChange={handleChange}/>
        <button disabled={loading} onClick={handleClick}>Login</button>
        {error && <span>{error.message}</span>}
        <button disabled={loading} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Login2