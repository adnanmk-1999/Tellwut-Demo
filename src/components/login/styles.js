import { StyleSheet } from 'react-native';

import {colors} from '../../styles/basic';
import {scaleValueBasedOnHeight, scaleValueBasedOnWidth} from '../../utils/scaleHelper';

const styles = StyleSheet.create({
  formInputContainer: {
    flexDirection: 'row',
    height: scaleValueBasedOnHeight(45),
    backgroundColor: colors.white,
    borderColor: colors.rectangleShapeBorder,
    borderRadius: 6,
    paddingHorizontal: scaleValueBasedOnWidth(10),
    borderWidth: scaleValueBasedOnWidth(1),
  },
  formInputField: {
    flex: 1,
  },
  eyeIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  errorLabel: {
    color: colors.errorTextRed,
    paddingStart: scaleValueBasedOnWidth(6),
    fontFamily: 'Rubik',
    fontSize: scaleValueBasedOnHeight(10),
  },
});

export default styles;