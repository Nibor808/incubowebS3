import moment from 'moment/moment';
import React, {useCallback} from 'react';
import {TimeValues} from '../types';

const START_DATE = [2016, 0, 1];

export const useTime = (): TimeValues => {
    const [time, setTime] = React.useState<TimeValues>({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const timeActive = useCallback(() => {
        const timeSinceStartDate = moment().diff(START_DATE);
        const duration = moment.duration(timeSinceStartDate);

        setTime({
            years: duration.years(),
            months: duration.months(),
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        });
    }, []);

    React.useEffect(() => {
        timeActive(); // Initial calculation
        const timeActiveId = setInterval(timeActive, 1000);
        return () => clearInterval(timeActiveId);
    }, [timeActive]);

    return time;
};
