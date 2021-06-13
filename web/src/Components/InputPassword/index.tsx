/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { InputStyled, Eyev, EyeS, Container } from './styles';

interface InputProps {
  variant?: 'input' | 'ckeckbox';
  name?: string;
  placeholder: string;
  Change?: (e: any) => void;
  required?: boolean;
  value?: string;
  className?: 'displayErrors' | 'none';
}

const InputPassword: React.FC<InputProps> = ({
  Change,
  placeholder,
  variant = 'input',
  className,
  value,
  required,
  name,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container>
      {passwordShown && <EyeS onClick={togglePasswordVisiblity} />}
      {!passwordShown && <Eyev onClick={togglePasswordVisiblity} />}
      <InputStyled
        value={value}
        name={name}
        type={passwordShown ? 'text' : 'password'}
        placeholder={placeholder}
        variant={variant}
        onChange={Change}
        required={required}
        className={className}
      />
    </Container>
  );
};

export default InputPassword;
