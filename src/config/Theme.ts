import {Dimensions} from 'react-native';

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    alabaster: '#EDEADE',
    gray: 'gray',
    red: '#7C0A02',
  },
  font: {
    primary: 16,
  },
  dimensions: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  SIZE: 100.0,
};
