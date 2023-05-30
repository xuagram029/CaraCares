import { Axios } from "axios"
import { useState, useEffect } from "react"

const Reg = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [loginStatus, setLoginStatus] = ('')
    
const register = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:8000/register', {
        username,
        password
    }).then(res => {
        console.log(res)
    })
}

const login = () => {
    Axios.post('http://localhost:8000/register', {
        username,
        password
    }).then(res => {
        if(!res.data.message){
            setLoginStatus(res.data.message)
        }else{
            console.log(res.data)
            setLoginStatus(res.data[0].username)
        }
    })
}

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen bg-gradient-to-r from-green-400 to-green-600">
        <div className="register ">
            <label htmlFor="username">USERNAME</label>
            <input 
            type="text" 
            id="username" 
            autoComplete="off"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}} 
            className="block w-full border-2 rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500"/>
            <label htmlFor="password">PASSWORD</label>
            <input 
            type="text" 
            id="password" 
            value={password}
            onChange={(e) => {setPassword(e.target.value)}} 
            className="block w-full border-2 rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500"/>
            <button
          className="block w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-800 hover:to-green-600 text-gray-200 font-bold py-2 px-4 rounded mt-4 hover:shadow-lg"
          type="submit"
          onClick={register}
        >
          REGISTER
        </button>
        </div>

        <div className="login ">
            <label htmlFor="user">USERNAME</label>
            <input 
            type="text" 
            id="user" 
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
            autoComplete="off" 
            className="block w-full border-2 rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500"/>
            <label htmlFor="pwd">PASSWORD</label>
            <input 
            type="text" 
            id="pwd" 
            value={password}
            onChange={(e) => {setPassword(e.target.value)}} 
            className="block w-full border-2 rounded-md px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 focus:border-blue-500"/>
            <button
          className="block w-full bg-gradient-to-r from-green-600 to-green-800 hover:from-green-800 hover:to-green-600 text-gray-200 font-bold py-2 px-4 rounded mt-4 hover:shadow-lg"
          type="submit"
          onClick={login}
        >
          REGISTER
        </button>
        </div>


    </div>
  )
}

export default Reg