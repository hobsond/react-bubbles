import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [value,setValue] = useState({
    username:'',
    password:''
  })
  const onChangeHandle= evt=>{
    const name = evt.target.name;
    const changevalue = evt.target.value;
    setValue({...value,[name] : changevalue})

  }

  const login =evt=>{
    evt.preventDefault()
    axios.post('http://localhost:5000/api/login',value)
    .then(res=>{
      localStorage.setItem('token',res.data.payload)
      props.history.push('/bubbles')
    })
    .catch(err=>console.log(err))
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form>
        <input onChange={onChangeHandle} name='username' type='text'/>
        <input onChange={onChangeHandle} name='password' type='password'/>
        <button onClick={login} >Login</button>
      </form>

    </>
  );
};

export default Login;
