import React from 'react';

import { Wrapper, Content } from './styles';

import logo from '../../../assets/image_login.jpg';

export default function AuthLayout({children}){
  return (
    <Wrapper>
      <Content>
      <img src={logo} />
        {children}
      </Content>
    </Wrapper>
  );
}
