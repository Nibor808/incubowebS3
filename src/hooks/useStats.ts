import React from 'react';
import {TimeValues} from '../types';

export const useStats = (time: TimeValues) => {
    return React.useMemo(() => {
        /* indentation matters here between the back ticks */
        return `<pre>
var STATS = {
  "location": {
    "province": "Ontario",
    "country": "Canada",
  },
  "time_active": {
    "years": ${time.years},
    "months": ${time.months},
    "days": ${time.days},
    "hours": ${time.hours},
    "minutes": ${time.minutes},
    "seconds": ${time.seconds},
  },
  "skills": [
    "problem_solving",
    "clean_ui",
    "clean_code",
    "collaboration",
  ]
};
      </pre>`;
    }, [time]);
};
