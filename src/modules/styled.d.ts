import 'styled-components/native';
import theme from '../utils/theme';

type ThemeColors = typeof theme.colors;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeColors {}
}
