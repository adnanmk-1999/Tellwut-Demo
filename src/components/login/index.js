import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

function EmailLoginForm({ text, onChangeText, value, errorCheck, isShownError, placeholder }) {
  return (
    <View>
      <Text>{text}</Text>
      <View style={{backgroundColor: 'red'}}>
        <TextInput
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
    </View>
  );
};

function PasswordLoginForm({
  text,
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
      <Text >{text}</Text>
      <View >
        <TextInput
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          style={styles.password_text_input}
          returnKeyType="done"
          secureTextEntry={showPass}
          ref={input => {
            this.passwordTextInput = input;
          }}
        />

        <TouchableOpacity
          activeOpacity={1}
          style={styles.password_eye_icon}
          onPress={onPress}>
          <Image source={imageUrl} />
        </TouchableOpacity>
      </View>
      {isShownError == true ? (
        <Text style={styles.error_label}>{errorCheck}</Text>
      ) : null}
    </View>
  );
}


export {
    EmailLoginForm,
    PasswordLoginForm
}