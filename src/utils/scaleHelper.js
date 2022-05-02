import {Dimensions} from 'react-native';

const designWidth = 375;
const designHeight = 667;

let deviceWidth = Dimensions.get('screen').width;
let deviceHeight = Dimensions.get('screen').height;
if (deviceWidth > deviceHeight) {
  deviceWidth = deviceWidth + deviceHeight;
  deviceHeight = deviceWidth - deviceHeight;
  deviceWidth = deviceWidth - deviceHeight;
}

const widthRatio = deviceWidth / designWidth;
const heightRatio = deviceHeight / designHeight;

export const scaleValueBasedOnWidth = value => {
  return value * widthRatio;
};

export const scaleValueBasedOnHeight = value => {
  return value * heightRatio;
};

export default {
  scaleValueBasedOnWidth,
  scaleValueBasedOnHeight,
};
