import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignUp() {

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  // let history = useHistory();

  function login({email,password}){
    console.log('login: ', email,password);
    dispatch(signInRequest(email,password));
    // history.push('/dashboard')
  }

  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <input name="email" type="email" placeholder="Seu email" ref={register}/>
        <input name="password" type="password" placeholder="Sua senha" ref={register}/>
        <button type="submit">Acessar</button> 
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}