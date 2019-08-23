import { sumSquareOfBiggestTwo } from "./exercise-1.3";

describe('1.3 Sum of Squares of Two Biggest Numbers', () => {

    test('sums the squares of the two largest integers', () =>
        expect(sumSquareOfBiggestTwo(2, 2, 3)).toEqual(13));

    test('sums the squares of the two largest floats', () =>
        expect(sumSquareOfBiggestTwo(2.0, 2.0, 3.5)).toEqual(16.25));

    // TODO: Discuss -1 vs. throwing an error.
    test('returns a -1 when a null is provided', () =>
        expect(sumSquareOfBiggestTwo(2, null, 3)).toEqual(-1));

    test('returns -1 when a NaN is provided', () =>
        expect(sumSquareOfBiggestTwo(2, NaN, 3)).toEqual(-1));

    // TODO: Discuss what other cases are missing
    // TODO: Discuss how we might package this function as a CLI tool if we wanted to do so.
});