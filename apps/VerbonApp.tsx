import tommy_portret from '../src/assets/tommy_portret.png';
import { ClickPhoto, Photo } from '@shared/components/Photo';
import { useState } from 'react';

const abc = (a: number) => ClickPhoto({
    src: tommy_portret, ...{
        key: `tommy_key-2${a}`,
        alt: 'Tommy',
        id: 'Tommy-2',
    },
});

const testFunc = () => {
    const [state, setState] = useState<JSX.Element[]>([<span key='abn'>aasdfgas</span>]);
    console.log('state', state.length)
    return <p key={`${state.length}_key`}
              onClick={() => setState([...state, abc(state.length)])}>hello{[...state]}</p>;
};


export const VerbonApp = () => {
    return (
        <div>
            <h1>Verbon</h1>
            {Photo({
                src: tommy_portret, ...{
                    key: 'tommy_key',
                    alt: 'Tommy',
                    id: 'Tommy',
                },
            })}
            {ClickPhoto({
                src: tommy_portret, ...{
                    key: 'tommy_key-2',
                    alt: 'Tommy',
                    id: 'Tommy-2',
                },
            })}
            {
                testFunc()
            }
        </div>
    );
};

// I can't believe react doesn't actually complain about this XD