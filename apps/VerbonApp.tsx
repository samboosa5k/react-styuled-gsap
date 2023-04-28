interface KSAttrs {
    key: string;

    [key: string]: string;
}

export type PureFn<T> = (arg: T) => JSX.Element;
const superWrap = (
    (fn: (src: string) => (attrs: KSAttrs) => JSX.Element) => ((src: string) => (attrs: KSAttrs) => fn(src)(attrs)));

const Photo =
    (src: string) =>
        ({ key, ...rest }: KSAttrs) =>
            <img src={src} key={key} {...rest} />;


/**
 * superWrap works,
 * but I need to work on composing other functions
 * and wrappers into it.
 */
//@ts-ignore
const PhotoWithFrame = superWrap(Photo);

export const VerbonApp = () => {
    return (
        <div>
            <h1>Verbon</h1>
            {PhotoWithFrame('https://images.dog.ceo/breeds/terrier-norwich/n02094258_100.jpg')({
                key: 'tommy_key',
                alt: 'Tommy',
                id: 'Tommy',
            })}
        </div>
    );
};


// Now I will use the superWrap HOF (higher order function)
// ...or I will call it a HOC (higher order component)
// const SimpleFrame = (arg: any) => <div>{arg}</div>;
// const DogPhoto = PhotoWithFrame(SimpleFrame);


// const TommyPhoto = DogPhoto('https://images.dog.ceo/breeds/terrier-norwich/n02094258_100.jpg');