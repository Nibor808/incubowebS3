import React, {memo} from 'react';
import {TimeValues} from '../types';
import {useStats} from '../hooks/useStats';

interface StatsProps {
    time: TimeValues;
}

export const Stats: React.FC<StatsProps> = memo(({time}) => {
    const stats = useStats(time);

    return <pre>{`var STATS = ${JSON.stringify(stats, null, 2)};`}</pre>;
});

export default Stats;
