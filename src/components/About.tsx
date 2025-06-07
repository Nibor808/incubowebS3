import React, {memo, Suspense, lazy} from 'react';
import {useTime} from '../hooks/useTime';
import robin from '../styles/images/robin-head.jpeg';

export const myInfo = {
    name: 'Robin Erickson',
    title: 'software developer',
    blurb: 'Exploring technology one language at a time.',
};

const Stats = lazy(() => import('./Stats'));

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
                    loading="lazy"
                    decoding="async"
                />
                <h2>{myInfo.name}</h2>
                <p>{myInfo.title}</p>
                <p>{myInfo.blurb}</p>
            </div>

            <Suspense fallback={<div>Loading stats...</div>}>
                <Stats time={time} />
            </Suspense>
        </div>
    );
});
