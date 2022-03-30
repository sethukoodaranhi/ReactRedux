import React from 'react'
import { useDispatch } from 'react-redux'
import { login,logout } from '../features/User'
export default function Login() {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(login({name:'vyshnavi',age:24,email:'vyshnavi@gmail.com'}))}}>Login</button>
        <button onClick={()=>{dispatch(logout())}}>logout</button>
    </div>
  )
}
