import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { signUpRequest } from '../../store/modules/auth/actions'

export default function SignUp() {

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  function signUp({name,email,password}){
    dispatch(signUpRequest(name,email,password))
  }

  return (
    <>
      <form onSubmit={handleSubmit(signUp)}>
        <input name="name" type="text" placeholder="Seu nome" />
        <input name="email" type="email" placeholder="Seu email" />
        <input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar</button> 
        <Link to="/">Já tenho conta</Link>
      </form>
    </>
  );
}