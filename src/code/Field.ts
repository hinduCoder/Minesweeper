import Cell from './Cell';

export default class Field {
    private _field: Cell[];
    public get cells() {
        return this._field;
    }

    constructor(private _width: number = 10, private _height: number = 10, private _bombCount = 10) {
        this._field = Array.from({length: this._width * this._height}, () => ({ bomb: false, closed: true }));
        this.generate();
    }

    public cellAt(x: number, y: number): Cell | null {
        if (x < 0 || x >= this._width) {
            return null;
        }
        if (y < 0 || y >= this._height) {
            return null;
        }
        return this._field[x*this._width + y];
    }

    public modifyCellAt(x: number, y: number, callback: (cell: Cell) => void): void {
        const cell = this.cellAt(x, y);
        if (cell != null) {
            callback(cell);
        }
    }
 

    public open(x: number, y: number): void {
        // if (x < 0 || x >= this._height || y < 0 || y >= this._width)
        //     return;

        // const current = this.cellAt(x,y);
        // current.closed = false;
        // if (current.bomb || current.number)
        //     return;
        
        // for (let x = -1; x <= 1; x++)
        // {
        //     for (let y = -1; y <= 1; y++) {
        //         if (x === 0 && y === 0 || !this.cellAt(x+x,y+y).closed)
        //             continue;
        //         this.open(x+x, y+y)
        //     }
        // }

        // current.closed = false;
    }

    private generate(): void {
        this.populateBombs();
    }
    
    public populateBombsFromPattern(pattern: string): void {
        const bomb = '*';
        const empty = '_';

        this.iterateField((cell, x, y) => {
            if (bomb==pattern[x*this._height+y]){
                cell.bomb = true;
            } 
        })

        this.setNumbers()
    }

    private populateBombs(): void {
        let bombCount = this._bombCount;
        while (bombCount > 0) {
            const position = [this.random(this._width), this.random(this._height)];
            const cell = this.cellAt(position[0], position[1])!
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
            let number = 
                this.checkBomb(x-1,y-1) + 
                this.checkBomb(x,y-1) + 
                this.checkBomb(x+1,y-1) + 
                this.checkBomb(x-1,y) + 
                //this.checkBomb(x,y) + 
                this.checkBomb(x+1,y) + 
                this.checkBomb(x-1,y+1) + 
                this.checkBomb(x,y+1) + 
                this.checkBomb(x+1,y+1);
            cell.number = number || null;
        })
    }
    
    private checkBomb(x: number, y: number): number {
        const cell = this.cellAt(x,y);
        if (cell == null)
            return 0;
        return cell.bomb ? 1 : 0
    }
    
    private random(max: number): number {
        return Math.floor(Math.random() * (max))
    }

    public iterateField(callback: (cell: Cell, x: number, y: number) => void): void {
        for(let x = 0; x < this._height; x++) {
            for(let y = 0; y < this._width; y++) {
                callback(this.cellAt(x, y)!, x, y);
            }
        }
    }
    
}