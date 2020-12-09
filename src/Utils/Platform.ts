import {Platform} from 'react-native';

/**
 * isWeb
 * - true if platform is Web
 */
export const isWeb = Platform.OS === 'web';
/**
 * isIOS
 * - true if platform is iOS
 */
export const isIOS = Platform.OS === 'ios';
/**
 * isAndroid
 * - true if platform is Android
 */
export const isAndroid = Platform.OS === 'android';
/**
 * isIpad
 * - true if platform is iPad
 */
export const isIPad = Platform.OS === 'ios' && Platform.isPad;
