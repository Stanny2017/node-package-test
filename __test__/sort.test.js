const quickSort = require('../src/index')

describe('quickSort', () => {
    test('quicSort', () => {
        const res = quickSort([3, 4, 2, 1, 0])

        console.log(res)
        expect(res).toEqual([0, 1, 2, 3, 4])
    });
});