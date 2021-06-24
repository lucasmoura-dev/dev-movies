import colors from '@styles/colors';
import React from 'react';

import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon, ClearIcon} from './styles';

interface InputProps extends TextInputProps {
  value: string;
  onSubmit: () => void;
  onClear: () => void;
}

const Input: React.FC<InputProps> = ({value, onClear, onSubmit, ...rest}) => {
  const handleClearButton = () => {
    const canClearInput = value.length > 0;
    if (canClearInput) {
      onClear();
    }
  };

  return (
    <Container>
      <Icon name="search" size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        value={value}
        onSubmitEditing={() => onSubmit()}
        placeholder="Buscar..."
        returnKeyType="search"
        selectionColor={colors.purple}
        {...rest}
      />

      {value.length > 0 && (
        <ClearIcon
          name="close-outline"
          size={26}
          color="#666360"
          onPress={handleClearButton}
        />
      )}
    </Container>
  );
};
export default Input;
