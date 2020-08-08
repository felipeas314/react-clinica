import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function SignUp() {

  const { register, handleSubmit, errors } = useForm();

  function login(data){
    console.log('login: ', data);
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