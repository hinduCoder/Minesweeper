import Cell from './Cell';
import Matrix from './Matrix';

export default class Field {
    private _field: Matrix<Cell>;

    public get fieldMatrix(): Matrix<Cell> {
        return this._field;
    }

    public get cells(): Cell[] {
        return this._field.items;
    }

    constructor(private _width: number = 10, private _height: number = 10, private _bombCount = 10) {
        this._field = new Matrix(_width, _height);
        this._field.fill(() => ({ bomb: false, closed: true, flagged: false }));
        this.generate();
    }

    public cellAt(x: number, y: number): Cell {
        return this._field.itemAt(x, y);
    }
 

    public open(x: number, y: number): void {
        const thisCell = this.cellAt(x, y);
        if (!thisCell.closed || thisCell.flagged) {
            return;
        }

        thisCell.closed = false;

        if (thisCell.bomb) {
            this.cells.forEach(c => c.closed = false);
            return;
        }

        if (thisCell.number != null) {
            return;
        }

        const openInner = (x: number, y: number) => {
            this.fieldMatrix.get3X3SubMatrixAround(x, y).iterate((cell, x1, y1) => {
                if (!cell || cell.bomb || !cell.closed) {
                    return;
                }
                cell.closed = false;
                if (cell.number == null)
                    openInner(x+x1-1, y+y1-1);
            })
        }

        openInner(x, y);
    }

    private generate(): void {
        this.populateBombs();
    }
    
    public populateBombsFromPattern(pattern: string): void {
        const bomb = '*';
        const empty = '_';
        const boundary = '|'

        let x = 0;
        let y = 0;
        for (let currentSign of pattern) {
            switch(currentSign) {
                case boundary: x++; y = 0; continue;
                case bomb: this.cellAt(x, y).bomb = true; break;
                case empty: this.cellAt(x, y).bomb = false; break;
            }
            y++;
        }

        this.setNumbers()
    }

    private populateBombs(): void {
        let bombCount = this._bombCount;
        while (bombCount > 0) {
            const position = [this.random(this._height), this.random(this._width)];
            const cell = this.cellAt(position[0], position[1])
            if (cell.bomb)
            {
                continue;
            }
            cell.bomb = true;
            bombCount--;
        }
        
        this.setNumbers();
    }
    
    private setNumbers(): void {
        
        this.iterateField((cell, x, y) => {
            
            if (cell.bomb){
                cell.number = null;
                return;
            }
            const cellsAround = this._field.getItemsAround(x, y);
            const number = cellsAround.reduce((result, cell) => result + (cell.bomb ? 1 : 0), 0);
            cell.number = number || null;
        })
    }
    
    private random(max: number): number {
        return Math.floor(Math.random() * (max))
    }

    public iterateField(callback: (cell: Cell, x: number, y: number) => void): void {
        this._field.iterate(callback);
    }
    
}