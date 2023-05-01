import { MouseEvent } from 'react';

interface KSAttrs {
    key: string;
    src: string;
}

interface ClickableAttrs {
    onClick: ClickFn;
};

type Attributes = KSAttrs | ClickableAttrs | (KSAttrs & ClickableAttrs);
// Clickable types
type ClickFn =
    (event: MouseEvent) => MouseEvent | void

type PureFn = <T extends Attributes>(arg: T) => JSX.Element;


const megaWrap = ((fn: PureFn) => (arg: Attributes) => fn(arg));

const PurePhoto = (attrs: Attributes) => <img {...attrs} />;
export const Photo = megaWrap(PurePhoto);

/**
 * I will refactor this later
 */
const withClick = (fn: PureFn) =>
    (clickableAttrs: ClickableAttrs) =>
        (attrs: KSAttrs) => fn({ ...attrs, ...clickableAttrs });


// The wrapped component with click
const handleClick = (event: MouseEvent) => console.log(event);
export const ClickPhoto = withClick(Photo)({ onClick: handleClick });

