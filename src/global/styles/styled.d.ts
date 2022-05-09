import 'styled-components';
import { Theme } from './type';

declare module 'styled-components' {
  type ThemeType = Theme;

  // eslint-disable-next-line prettier/prettier
  export interface DefaultTheme extends ThemeType { }
}
