import React from 'react';

import ButtonContainer from './styles';

function Button({
  children, type, disabled, onClick,
}) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} type={type}>{children}</ButtonContainer>
  );
}

export default Button;
