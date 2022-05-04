import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react';

import styles from './styles';

function EmailLoginForm({ onChangeText, value, errorCheck, isShownError, placeholder }) {
  return (
    <View>
      <View style={styles.formInputContainer}>
        <TextInput
          style={styles.formInputField}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          returnKeyType={'next'}
          autoFocus={true}
          onSubmitEditing={() => {
            this.passwordTextInput.focus();
          }}
        />
      </View>

      <Text style={styles.errorLabel}>
      {isShownError == true ?
        errorCheck
       : null}</Text>
    </View>
  );
};

function PasswordLoginForm({
  imageUrl,
  showPass,
  onPress,
  onChangeText,
  value,
  errorCheck,
  isShownError,
  minLength,
  maxLength,
  placeholder,
}) {

  return (
    <View>
      <View style={styles.formInputContainer}>
        <TextInput
          style={styles.formInputField}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          returnKeyType="done"
          secureTextEntry={showPass}
          ref={input => {
            this.passwordTextInput = input;
          }}
        />

        <TouchableOpacity
          activeOpacity={1}
          style={styles.eyeIcon}
          onPress={onPress}>
          <Image source={imageUrl} />
        </TouchableOpacity>
      </View>
      <Text style={styles.errorLabel}>
        {isShownError == true ? errorCheck : null}
      </Text>
    </View>
  );
}


export {
    EmailLoginForm,
    PasswordLoginForm
}