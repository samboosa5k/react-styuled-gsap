import tommy_portret from '../src/assets/tommy_portret.png';
import { Photo, ClickPhoto } from '@shared/components/Photo';

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
                }
            })}
        </div>
    );
};

// I can't believe react doesn't actually complain about this XD