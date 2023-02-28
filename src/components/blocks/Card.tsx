import { FC } from 'react';

import { Wrapper } from '@/components';

type Props = { [key: string]: string };

export const Card: FC<Props> = (props: Props) => (
    <Wrapper>
        {props
            ? Object.keys(props).map((key: string, idx: number) => (
                  <p key={`card_${key}-${props[key]}-${idx}`}>
                      {String(props[key])}
                  </p>
              ))
            : null}
    </Wrapper>
);
