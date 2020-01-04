export default interface Cell {
    number?: number | null;
    bomb: boolean;
    closed: boolean;
    flagged: boolean;
}