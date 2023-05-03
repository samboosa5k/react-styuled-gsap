import { MappedText } from '@shared/components/MappedText';
import { ClickPhoto, Photo } from '@shared/components/Photo';

import tommy_portret from '../src/assets/tommy_portret.png';

const YEARS = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

const clickHandler = (data: unknown) => console.log(data)
const TextMap = (textArr: string[] | number[]) =>
    textArr.map((text, index) =>
        MappedText(text, `${text}-${index}`)({
            onClick: ()=>clickHandler(text),
        }));

export const VerbonApp = () => {
    return (
        <div>
            <h1>Verbon</h1>
            {Photo({
                src: tommy_portret,
                ...{
                    key: 'tommy_key',
                    alt: 'Tommy',
                    id: 'Tommy',
                },
            })}
            {ClickPhoto({
                src: tommy_portret,
                ...{
                    key: 'tommy_key-2',
                    alt: 'Tommy',
                    id: 'Tommy-2',
                },
            })}
            {TextMap(YEARS)}
        </div>
    );
};

// I can't believe react doesn't actually complain about this XD
