import Field from "../code/Field"

it('Hello', () => {
    const field = new Field();
    expect(field.cells).toHaveLength(100);
    expect(field.cells.filter(c => c.bomb)).toHaveLength(10);
    expect(field.cells.every(c => c.closed)).toBeTruthy();
})

it ('Bombs', () => {
    const field = new Field();
    field.iterateField((cell, x, y) => {
        if (cell.number) {
            const bombsAround = [[x-1, y-1], [x, y-1], [x+1, y-1], 
             [x-1, y],             [x+1, y],
             [x-1, y+1], [x, y+1], [x+1, y+1]]
            .map(point => field.cellAt(...point))
            .filter(cell => cell && cell.bomb)
            .length;

            expect(cell.number).toBe(bombsAround)
        }
    })
})
