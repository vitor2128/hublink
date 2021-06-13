/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import React, { useState, useCallback, useRef } from 'react';

import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container } from './styles';

interface InputProps {
  variant?: 'input' | 'ckeckbox' | 'description' | 'password';
  name?: string;
  type?: string;
  placeholder?: string;
  Change?: (e: any) => void;
  required?: boolean;
  value?: string;
  className?: string;

  bluer?: (e: any) => void;
  click?: () => void;
  focus?: (e: any) => void;
  src?: string;
  autofocus?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
  iconEye?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  type,
  placeholder,
  Change,
  variant = 'input',
  required,
  className,
  name,
  click,
  src,
  icon: Icon,
  iconEye,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const handleinputBluer = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} variant={variant} isFocused={isFocused}>
      {Icon && <Icon />}
      <input
        ref={inputRef}
        onClick={click}
        value={value}
        name={name}
        type={type || (iconEye && passwordShow) ? 'text' : 'password'}
        placeholder={placeholder}
        onChange={Change}
        required={required}
        className={className}
        onFocus={() => setIsFocused(true)}
        onBlur={handleinputBluer}
        src={src}
      />
      {iconEye && !passwordShow && <FiEye onClick={togglePasswordShow} cursor="pointer" />}
      {iconEye && passwordShow && <FiEyeOff onClick={togglePasswordShow} cursor="pointer" />}
    </Container>
  );
};

export default Input;
