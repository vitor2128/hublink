/* eslint-disable no-multi-assign */
import React, { useRef, useState } from 'react';

import { Upload } from 'styled-icons/boxicons-regular/';

import { Button, Img, Input, Span } from './styles';

interface ButtonInterface {
  label?: string;
  className?: string;
}

const InputUpload: React.FC<ButtonInterface> = ({ className, label }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [fileUploaded, setFileUploaded] = useState('');

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (e: any) => {
    const FileUploaded = URL.createObjectURL(e.target.files[0]);
    setFileUploaded(FileUploaded);
  };

  return (
    <Button onClick={handleClick} className={className}>
      {fileUploaded ? (
        <Img src={fileUploaded} alt={fileUploaded} />
      ) : (
        <Span>
          <Upload />
          {label}
        </Span>
      )}
      <Input type="file" ref={hiddenFileInput} onChange={handleChange} accept="image/*" />
    </Button>
  );
};
export default InputUpload;
