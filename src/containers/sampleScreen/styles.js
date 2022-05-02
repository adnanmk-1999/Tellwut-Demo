import {StyleSheet} from 'react-native';

import {colors} from '../../styles/basic';
import {
  scaleValueBasedOnHeight,
  scaleValueBasedOnWidth,
} from '../../utils/scaleHelper';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: colors.infoRedBackground,
    width: scaleValueBasedOnWidth(167),
    height: scaleValueBasedOnHeight(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'Rubik-Regular',
    color: colors.infoRed
  },
});
