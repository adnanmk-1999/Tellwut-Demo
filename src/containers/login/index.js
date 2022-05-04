import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {EmailLoginForm, PasswordLoginForm} from '../../components/login';
import FormButton from '../../components/formButton';
import {EmailValidation} from '../../utils/validations';
import Images from '../../assets';
import {colors} from '../../styles/basic';
import styles from './styles';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setHidePass] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [validationError, getValidationError] = useState(false);
  const [isLoadingData, setLoading] = useState(false);

  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    console.log(password);
  }, [password]);
  useEffect(() => {
    console.log(emailError);
  }, [emailError]);
  useEffect(() => {
    console.log(passwordError);
  }, [passwordError]);

  //Check Email and password validations[Empty and Email format]
  function loginValidations() {
    if (!email.trim()) {
      setEmailError('Required Email');
      getValidationError(true);
      return false;
    } else {
      getValidationError(false);
      setEmailError('');
    }
    if (!EmailValidation(email)) {
      setEmailError('Invalid Email Format');
      getValidationError(true);
      return false;
    } else {
      getValidationError(false);
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Required Password');
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

  //Function to set the password data
  function setPasswordData(text) {
    setPassword(text.trim());
    getValidationError(false);
    setPasswordError('');
  }

  return (
    <ScrollView style={styles.scrollviewContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.bodyLogin}>
          <Text>Log In</Text>
          <View styles={styles.loginFormContainer}>
            <EmailLoginForm
              placeholder={'Email'}
              onChangeText={text => setEmailData(text)}
              value={email}
              errorCheck={emailError}
              isShownError={validationError}
            />
            <PasswordLoginForm
              onChangeText={text => setPasswordData(text)}
              placeholder={'Password'}
              value={password}
              showPass={isHide}
              errorCheck={passwordError}
              isShownError={validationError}
              imageUrl={isHide ? Images.iconEyeOn : Images.iconEyeOff}
              onPress={() => setHidePass(!isHide)}
            />
          </View>
          <FormButton
            buttonTitle="Sign In"
            onPress={() => loginValidations()}
          />
        </View>

        {isLoadingData ? (
          <ActivityIndicator
            style={styles.activity_indicator}
            size="large"
            color={colors.progressbar}
          />
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}
