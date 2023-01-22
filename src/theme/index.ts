import * as Vars from './vars';

const Theme = {
    borders: Vars.borders,
    colors: Vars.colors,
    spacing: Vars.spacing,
    typography: Vars.typography,
};
export type ThemeType = typeof Theme;
export type ThemeTypeKeys = keyof typeof Theme;
export type ThemeTypeKeyValue<T extends ThemeTypeKeys> = typeof Theme[T];

export type ThemeProps = {
    [key in ThemeTypeKeys]: ThemeTypeKeyValue<ThemeTypeKeys>;
};

export default Theme;
export * from './globalStyles';
