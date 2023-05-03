import { ReactNode, SyntheticEvent } from 'react';

type Attributes<K extends string, T> = {
    [key in K]: T;
};
// type PureC<T> = (arg: T) => JSX.Element;

type ClickFn = (event: SyntheticEvent) => void;

type ClickableAttrs = Attributes<'onClick', ClickFn>;
type MappedKey = `${string}-${number}`;

// Define the react element
export const MappedText = ( children:ReactNode, _key: MappedKey)=> (attrs?:ClickableAttrs) => (
    <span key={_key} {...attrs}>
        {children}
    </span>
);
