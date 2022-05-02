import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

import {EmailLoginForm, PasswordLoginForm} from '../../components/login';
import Images from '../../assets';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setHidePass] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [validationError, getValidationError] = useState(false);

  //Check Email and password validations[Empty and Email format]
  function loginValidations() {
    if (!email.trim()) {
      setEmailError('requiredEmail');
      getValidationError(true);
      return false;
    } else {
      getValidationError(false);
      setEmailError('');
    }
    if (!EmailValidation(email)) {
      setEmailError('invalidEmailFormat');
      getValidationError(true);
      return false;
    } else {
      getValidationError(false);
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('requiredPassword');
      getValidationError(true);
      return false;
    } else {
      getValidationError(false);
      setPasswordError('');
    }
  }

  //Function to set the email data
  function setEmailData(text) {
    setEmail(text.trim());
    getValidationError(false);
    setEmailError('');
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <Text>LogIn</Text>
        </View>
        <View>
          <EmailLoginForm
            placeholder={'Email'}
            onChangeText={text => setEmailData(text)}
            value={email}
            errorCheck={emailError}
            isShownError={validationError}
            text={'emailAddress'}
          />
          <PasswordLoginForm
            onChangeText={text => setPasswordData(text)}
            placeholder={'Password'}
            value={password}
            showPass={isHide}
            errorCheck={passwordError}
            isShownError={validationError}
            imageUrl={isHide ? Images.icEyeOn : Images.icEyeOff}
            onPress={() => setHidePass(!isHide)}
            text={'password'}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
