import { getStaggerDelay, getMaxDelay } from './index.jsx';

describe('Stagger', () => {
    test('getStaggerDelay returns correct delay', () => {
        const props = {
            delay: 100,
        };
        const idx = 10;
        const expected = props.delay * idx;
        const actual = getStaggerDelay(idx, props.chunk, props.delay);

        expect(actual).toBe(expected);
    });

    test('getStaggerDelay returns chunked delays', () => {
        const props = {
            delay: 100,
            chunk: 5,
        };
        const idx = 5;
        const expected = 0;
        const actual = getStaggerDelay(idx, props.chunk, props.delay);

        expect(actual).toBe(expected);
    });

    test('getMaxDelay returns correct value', () => {
        const props = {
            chunk: 0,
            delay: 100,
            duration: 500,
        };

        const count = 5;
        const expected = 900;
        const actual = getMaxDelay(
            count,
            props.chunk,
            props.delay,
            props.duration
        );

        expect(actual).toBe(expected);
    });

    test('getMaxDelay returns correct value when chunking', () => {
        const props = {
            delay: 100,
            duration: 500,
            chunk: 2,
        };

        const count = 5;
        const expected = 600;
        const actual = getMaxDelay(
            count,
            props.chunk,
            props.delay,
            props.duration
        );

        expect(actual).toBe(expected);
    });
});
