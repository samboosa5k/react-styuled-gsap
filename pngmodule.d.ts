/**
 * Yoink!
 * Link: https://annacoding.com/article/5I7om6mCrW25KeA4ObeyMJ/Two-ways-to-solve:-Cannot-find-SVG-module-error-when-compiling-Typescript-in-React-application
 */
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
