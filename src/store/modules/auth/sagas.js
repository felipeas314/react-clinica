import {
  takeLatest,
  call,
  put,
  all
} from 'redux-saga/effects';

import { toast } from 'react-toastify';

import history from '../../../services/history';

import api from '../../../services/axios';
import { signInSuccess, signFailure } from './actions'

export function* signIn({payload}) {
  try{
    const {email,password} = payload;

  const response = yield call(api.post, 'login',{
    email,
    password
  });

  const { token } = response.data;

  yield put(signInSuccess(token,'Felipe'));
  
  api.defaults.headers['Authorization'] = `Bearer ${token}`;

  history.push('/dashboard');
  }catch(err){
    toast.error('Falha na autenticação');
    yield put(signFailure());
  }
  
}

export function* signUp({payload}){
  
  try{
    const { name, email, password} = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password
    })

    history.push('/');

  }catch(err){
    toast.error('Falha no cadastro, verifique seus dados');

    yield put(signFailure());
  }

}

export function setToken({payload}){
  if(!payload) return;

  const {token } = payload.auth;

  if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);