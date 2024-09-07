import moment from 'moment/moment';
import React from 'react';
import {TimeValues} from '../types';

export const useTime = (): TimeValues => {
    const [time, setTime] = React.useState<TimeValues>({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const timeActive = () => {
        const timeSinceStartDate = moment().diff([2016, 0, 1]);
        const duration = moment.duration(timeSinceStartDate);

        setTime({
            years: duration.years(),
            months: duration.months(),
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        });
    };

    React.useEffect(() => {
        const timeActiveId = setInterval(timeActive, 1000);
        return () => clearInterval(timeActiveId);
    }, []);

    return time;
};
