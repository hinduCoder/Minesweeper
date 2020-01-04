import Field from "../code/Field"
import { file } from "@babel/types";

it('Hello', () => {
    const field = new Field();
    expect(field.cells).toHaveLength(100);
    expect(field.cells.filter(c => c.bomb)).toHaveLength(10);
    expect(field.cells.every(c => c.closed)).toBeTruthy();
})

it('Bombs', () => {
    const field = new Field();
    field.iterateField((cell, x, y) => {
        if (cell.number) {
            const bombsAround = [[x-1, y-1], [x, y-1], [x+1, y-1], 
             [x-1, y],             [x+1, y],
             [x-1, y+1], [x, y+1], [x+1, y+1]]
            .map(point => field.fieldMatrix.unsageGetItemAt(...point))
            .filter(cell => cell && cell.bomb)
            .length;

            expect(cell.number).toBe(bombsAround)
        }
    })
})

it('Populates from pattern nicely', () => {
    const field = new Field(3, 3, 0);
    field.populateBombsFromPattern('*_*|_*_|___');

    expect(field.cellAt(0, 0).bomb).toBeTruthy();
    expect(field.cellAt(0, 1).bomb).toBeFalsy();
    expect(field.cellAt(0, 2).bomb).toBeTruthy();

    expect(field.cellAt(1, 0).bomb).toBeFalsy();
    expect(field.cellAt(1, 1).bomb).toBeTruthy();
    expect(field.cellAt(1, 2).bomb).toBeFalsy();

    expect(field.cellAt(2, 0).bomb).toBeFalsy();
    expect(field.cellAt(2, 1).bomb).toBeFalsy();
    expect(field.cellAt(2, 2).bomb).toBeFalsy();
})

it('opens bubble', () => {
    const field = new Field(5, 5, 0);
    field.populateBombsFromPattern('_____|_____|__*__|_____|_____');

    field.open(0, 0);

    expect(field.cells.every(c => c.bomb && c.closed || !c.bomb && !c.closed)).toBeTruthy();

})