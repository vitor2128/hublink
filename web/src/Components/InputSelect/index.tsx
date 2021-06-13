import React from 'react';

import { ArrowIosUpwardOutline, ArrowIosDownwardOutline } from 'styled-icons/evaicons-outline';

import { Container, DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './styles';

const dropdownOptions = [
  {
    label: '🍝 Restaurante',
    value: 1,
  },
  {
    label: '🍔 Hamburgueria',
    value: 2,
  },
  {
    label: '🍕 Pizzaria',
    value: 3,
  },
  {
    label: '🍣 Oriental',
    value: 4,
  },
  {
    label: '☕ Café',
    value: 5,
  },
  {
    label: '🍺 Bar',
    value: 6,
  },
  {
    label: '😋 Outros',
    value: 7,
  },
];

interface InputProps {
  name?: string;
  className?: string;
  toggling: () => void;

  selectedOptionLabel: string;
  isOpen: boolean;

  setSelectedOption: (e: any) => void;
  setSelectedOptionLabel: (e: any) => void;
  setIsOpen: (e: any) => void;
}

type SelectProps = {
  Open: boolean;
};

const InputSelect: React.FC<InputProps> = ({
  name,
  className,
  toggling,

  selectedOptionLabel,
  isOpen,
  setSelectedOption,
  setSelectedOptionLabel,
  setIsOpen,
}) => {
  const onOptionClicked = (e: any) => () => {
    setSelectedOption(e.value);
    setSelectedOptionLabel(e.label);
    setIsOpen(false);
  };

  return (
    <Container className={className}>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOptionLabel || 'Selecione o segmento'}
          {isOpen && <ArrowIosDownwardOutline />}
          {!isOpen && <ArrowIosUpwardOutline />}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer Open={isOpen}>
            <DropDownList>
              {dropdownOptions.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option.label}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Container>
  );
};

export default InputSelect;
