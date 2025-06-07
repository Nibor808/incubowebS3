import React from 'react';
import {TimeValues} from '../types';

interface StatsData {
    location: {
        province: string;
        country: string;
    };
    time_active: TimeValues;
    skills: string[];
}

export const useStats = (time: TimeValues): StatsData => {
    return React.useMemo(
        () => ({
            location: {
                province: 'Ontario',
                country: 'Canada',
            },
            time_active: time,
            skills: ['problem_solving', 'clean_ui', 'clean_code', 'collaboration'],
        }),
        [time]
    );
};
