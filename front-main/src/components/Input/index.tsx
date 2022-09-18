import React from 'react';

import { Container, InputStyled } from './styles';

interface InputProps{
  label: string,
  name: string,
  value:string,
  onChange: Function
}

const Input = (props: InputProps) => {
  return (
    <Container>
      <label>{props.label}</label>
      <InputStyled name={props.name}
      value={props.value}
      onChange={e=>{props.onChange((prev: any)=>({...prev, [props.name]:e.target.value}))}}/>
    </Container>
  );
};

export default Input;
