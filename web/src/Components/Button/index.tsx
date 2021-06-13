/* eslint-disable react/prop-types */
import React from 'react';

import { ButtonStyled } from './styles';

interface ButtonStyledProps {
  variant?: 'primary' | 'secondary' | 'buttonAccordion';
  size?: 'default' | 'small';
  label?: string;
  type?: 'submit';
  click?: () => void;
}

const Button: React.FC<ButtonStyledProps> = ({
  children,
  click,
  type,
  variant = 'primary',
  label = '',
  size = 'default',
}) => {
  return (
    <ButtonStyled variant={variant} size={size} type={type} onClick={click}>
      <p>{label}</p>
      {children}
    </ButtonStyled>
  );
};

export default Button;
