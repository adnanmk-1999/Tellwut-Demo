import {StyleSheet} from 'react-native';
import {scaleValueBasedOnHeight} from '../../utils/scaleHelper';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: scaleValueBasedOnHeight(45),
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});

export default styles;
