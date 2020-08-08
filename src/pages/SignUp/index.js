import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Criar</button> 
        <Link to="/">Já tenho conta</Link>
      </form>
    </>
  );
}