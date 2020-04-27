import {Platform} from 'react-native';

export const isWeb = Platform.OS === 'web';
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isIPad = Platform.OS === 'ios' && Platform.isPad;
