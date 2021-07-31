import React, { useState } from 'react';

import { Container } from './styles';

interface InputProps {
  colorText?: string;
  colorBorder?: string;
  colorBackground?: string;
}

const Admin: React.FC<InputProps> = () => {
  const [colorText, setColorText] = useState('');
  const [colorBorder, setColorBorder] = useState('');
  const [colorBackground, setColorBackground] = useState('');

  console.log(colorText);

  return (
    <Container id="top" colorText={colorText} colorBorder={colorBorder} colorBackground={colorBackground}>
      <br />
      <br />
      <br />
      <h1>color</h1>
      <br />
      <br />
      <input type="color" name="colorBorder" onChange={(e) => setColorText(e.target.value)} />
      <input type="color" name="colorBorder" onChange={(e) => setColorBorder(e.target.value)} />
      <input type="color" name="colorBorder" onChange={(e) => setColorBackground(e.target.value)} />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Admin;
