import Matrix from "../code/Matrix";

it('New matrix has W*H items', () => {
    const matrix = new Matrix(10, 11);
    expect(matrix.width).toBe(10);
    expect(matrix.height).toBe(11);
    expect(matrix.items).toHaveLength(10*11);
});

it('Set item and get it then', () => {
    const matrix = new Matrix<number>(3, 3);
    expect(matrix.itemAt(1, 1)).not.toBe(5)
    
    matrix.setItemAt(1, 1, 5);
    expect(matrix.itemAt(1, 1)).toBe(5);
});

it('Get out of range throws an error', () => {
    const matrix = new Matrix<number>(3, 3);
    expect(() => matrix.itemAt(-1, 0)).toThrowError(/^x/);
    expect(() => matrix.itemAt(3, 0)).toThrowError(/^x/);
    expect(() => matrix.itemAt(0, -1)).toThrowError(/^y/);
    expect(() => matrix.itemAt(0, 3)).toThrowError(/^y/);
})

it('fill method fills as expected', () => {
    const matrix = new Matrix<number>(3, 3);
    
    matrix.fill((x, y) => (x+1)*10 + y+1);

    expect(matrix.itemAt(0, 0)).toBe(11);
    expect(matrix.itemAt(0, 1)).toBe(12);
    expect(matrix.itemAt(0, 2)).toBe(13);

    expect(matrix.itemAt(1, 0)).toBe(21);
    expect(matrix.itemAt(1, 1)).toBe(22);
    expect(matrix.itemAt(1, 2)).toBe(23);

    expect(matrix.itemAt(2, 0)).toBe(31);
    expect(matrix.itemAt(2, 1)).toBe(32);
    expect(matrix.itemAt(2, 2)).toBe(33);
});

it('get fields around', () => {
    const matrix = new Matrix<number>(3, 3);
    matrix.fill((x, y) => (x+1)*10 + y+1);

    const items = matrix.getItemsAround(1, 1);

    expect(items).toEqual([11,12,13,21,23,31,32,33]);
});

it('get fields around top center', () => {
    const matrix = new Matrix<number>(3, 3);
    matrix.fill((x, y) => (x+1)*10 + y+1);

    const items = matrix.getItemsAround(0, 1);

    expect(items).toEqual([11,13,21,22,23]);
});

it('get fields around top left', () => {
    const matrix = new Matrix<number>(3, 3);
    matrix.fill((x, y) => (x+1)*10 + y+1);

    const items = matrix.getItemsAround(0, 0);

    expect(items).toEqual([12,21,22]);
});

it('get fields around bottom left', () => {
    const matrix = new Matrix<number>(3, 3);
    matrix.fill((x, y) => (x+1)*10 + y+1);

    const items = matrix.getItemsAround(2, 0);

    expect(items).toEqual([21,22,32]);
});

it('get submatrix', () => {
    const matrix = new Matrix<number>(5, 5);
    matrix.fill((x, y) => (x+1)*10 + y+1);

    const newMatrix = matrix.get3X3SubMatrixAround(2, 2);

    expect(newMatrix.items).toEqual([22,23,24,32,33,34,42,43,44]);
});
