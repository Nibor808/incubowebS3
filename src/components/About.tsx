import React, { memo } from 'react';
import { useStats } from '../hooks/useStats';
import { useTime } from '../hooks/useTime';
import robin from '../styles/images/robin-head.jpeg';

export const myInfo = {
    name: 'Robin Erickson',
    title: 'software developer',
    blurb: 'Exploring technology one language at a time.',
};

export const About: React.FC = memo(() => {
    const time = useTime();

    return (
        <div className="top-box d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center flex-column">
                <img
                    src={robin}
                    alt={myInfo.name}
                    height="350px"
                    width="350px"
                    className="img-fluid"
                />
                <h2>{myInfo.name}</h2>
                <p>{myInfo.title}</p>
                <p>{myInfo.blurb}</p>
            </div>

            {/* eslint-disable-next-line react/no-danger */}
            <span dangerouslySetInnerHTML={{__html: useStats(time)}} />
        </div>
    );
});
