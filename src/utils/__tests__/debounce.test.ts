import {debounce} from '../debounce';

describe('debounce', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should call the function after the wait time', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 1000);

        debouncedFn();
        expect(mockFn).not.toBeCalled();

        jest.advanceTimersByTime(1000);
        expect(mockFn).toBeCalledTimes(1);
    });

    it('should cancel previous calls when called multiple times', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 1000);

        debouncedFn();
        jest.advanceTimersByTime(500);
        debouncedFn();
        jest.advanceTimersByTime(500);
        expect(mockFn).not.toBeCalled();

        jest.advanceTimersByTime(500);
        expect(mockFn).toBeCalledTimes(1);
    });

    it('should pass arguments to the debounced function', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 1000);

        debouncedFn('test', 123);
        jest.advanceTimersByTime(1000);

        expect(mockFn).toBeCalledWith('test', 123);
    });

    it('should handle different wait times', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 500);

        debouncedFn();
        jest.advanceTimersByTime(400);
        expect(mockFn).not.toBeCalled();

        jest.advanceTimersByTime(100);
        expect(mockFn).toBeCalledTimes(1);
    });
});
