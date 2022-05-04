import {StyleSheet} from 'react-native';
import {scaleValueBasedOnHeight} from '../../utils/scaleHelper';

import {colors} from '../../styles/basic';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: scaleValueBasedOnHeight(45),
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Rubik-bold',
  },
});

export default styles;
