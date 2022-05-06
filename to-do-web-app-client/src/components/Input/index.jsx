import React from 'react';

import InputContainer from './styles';

function Input({
  id, type, name, value, onChange, leftIcon, rightIcon,
}) {
  return (
    <InputContainer>
      {!!leftIcon && leftIcon}
      <input id={id} type={type} name={name} value={value} onChange={onChange} />
      {!!rightIcon && rightIcon}
    </InputContainer>
  );
}

export default Input;
