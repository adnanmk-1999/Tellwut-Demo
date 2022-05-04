/**
 * Login container style file
 */

import {StyleSheet} from 'react-native';
import {colors} from '../../styles/basic';
import {
  scaleValueBasedOnHeight,
  scaleValueBasedOnWidth,
} from '../../utils/scaleHelper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginStart: scaleValueBasedOnWidth(16),
    marginTop: scaleValueBasedOnHeight(20),
  },
  bodyLogin: {
    paddingTop: scaleValueBasedOnHeight(50),
    marginStart: scaleValueBasedOnWidth(16),
    marginEnd: scaleValueBasedOnWidth(16),
    flexDirection: 'column',
  },
  subText: {
    fontFamily: 'Rubik',
    fontSize: scaleValueBasedOnHeight(12),
    color: colors.light_grey,
    marginTop: scaleValueBasedOnHeight(8),
  },
  loginAccounts: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    left: scaleValueBasedOnWidth(0),
    right: scaleValueBasedOnWidth(0),
    top: scaleValueBasedOnHeight(130),
    bottom: scaleValueBasedOnHeight(0),
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebook: {
    marginStart: scaleValueBasedOnWidth(9),
  },
  login_label_view: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginFormContainer: {
    marginTop: scaleValueBasedOnHeight(28),
    flex: 1,
    backgroundColor: 'black',
  },
  remember_me_view: {
    flexDirection: 'row',
    marginTop: scaleValueBasedOnHeight(10),
    height: 50,
    alignItems: 'center',
  },
  login_button: {
    marginTop: scaleValueBasedOnHeight(15),
  },
  sign_up: {
    flexDirection: 'row',
    marginTop: scaleValueBasedOnHeight(18),
    marginBottom: scaleValueBasedOnHeight(28),
  },
  login_label: {
    color: colors.black,
    fontFamily: 'Rubik-Bold',
    fontSize: scaleValueBasedOnHeight(20),
  },
  scrollviewContainer: {
    backgroundColor: colors.backgroundColor,
  },
});

export default styles;
