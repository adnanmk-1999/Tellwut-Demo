import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

function FormButton({buttonTitle, ...rest}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

export default FormButton;
