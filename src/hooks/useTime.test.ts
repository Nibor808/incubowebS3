import {useTime} from './useTime';
import {renderHook} from '@testing-library/react';

describe('useTime', () => {
    it('should return an object with time values', () => {
        const {result} = renderHook(useTime);
        expect(result.current).toHaveProperty('years');
        expect(result.current).toHaveProperty('months');
        expect(result.current).toHaveProperty('days');
        expect(result.current).toHaveProperty('hours');
        expect(result.current).toHaveProperty('minutes');
        expect(result.current).toHaveProperty('seconds');
    });
});
