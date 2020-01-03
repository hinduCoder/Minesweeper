export default class Matrix<T> {
    private _items: T[];

    public get items(): T[] {
        return this._items;
    }

    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }

    constructor(private _width: number, private _height: number) {
        this._items = new Array(_width * _height)
    }

    public itemAt(x: number, y: number): T  {
        if (x < 0 || x >= this._width) {
            throw new Error('x is out of range');
        }
        if (y < 0 || y >= this._height) {
            throw new Error('y is out of range');
        }
        return this._items[this.calculateIndex(x, y)];
    }

    private unsageGetItemAt(x: number, y: number): T | undefined {
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return undefined;
        }
        return this._items[this.calculateIndex(x, y)];
    }

    public setItemAt(x: number, y: number, value: T) {
        if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
            return;
        }

        this._items[this.calculateIndex(x, y)] = value;
    }

    public fill(generator: (x: number, y: number) => T): void {
        this.iterate((_, x, y) => this.setItemAt(x, y, generator(x, y)));
    }

    public iterate(callback: (item: T, x: number, y: number) => void): void {
        for(let x = 0; x < this._height; x++) {
            for(let y = 0; y < this._width; y++) {
                callback(this.itemAt(x, y), x, y);
            }
        }
    }

    public getItemsAround(x: number, y: number): T[] {
        const result = [];
        for (let i = -1; i <= 1; i++) {
            for(let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) {
                    continue;
                }
                result.push(this.unsageGetItemAt(x+i, y+j));
            }
        }

        return result.filter(item => item !== undefined) as T[];
    }

    public get3X3SubMatrixAround(x: number, y: number): Matrix<T | undefined> {
        const subMatrix = new Matrix<T | undefined>(3, 3);
        subMatrix.fill((x1, y1) => this.unsageGetItemAt(x+x1-1, y+y1-1));
        return subMatrix;
    }

    private calculateIndex(x: number, y: number): number {
        return x*this._width + y;
    }
}