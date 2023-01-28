import { FlattenSimpleInterpolation } from 'styled-components';

export enum ThemeKeys {
    Borders = 'borders',
    Colors = 'colors',
    Spacing = 'spacing',
    Typography = 'typography',
}

export type ThemeProps = {
    [key in ThemeKeys]: FlattenSimpleInterpolation;
};

export { GlobalStyle } from './globalStyles';
export { borders, colors, spacing, typography } from './vars';
