import { Store } from './store'
import Field from './code/Field';
import _ from 'lodash';

interface ActionBase {
    type: string
}

interface OpenAction extends ActionBase {
    x: number;
    y: number;
}

interface FlagAction extends ActionBase {
    x: number;
    y: number;
}

type Action = OpenAction;

const field = new Field(30, 16, 99);
//TODO вот с этим надо что-то сделать
export function getInitialState(): Store {
    return {
        field: _.cloneDeep(field.fieldMatrix.toDoubleArray())
    }
}

export default function(store: Store | undefined, action: Action): Store {
    switch(action.type) {
        case 'OPEN': 
            field.open(action.x, action.y);
            return getInitialState();
        case 'TOGGLE_FLAG':
            const cell = field.cellAt(action.x, action.y);
            cell.flagged = !cell.flagged;
            return getInitialState();
        case 'AUTO_OPEN':
            field.autoOpen(action.x, action.y);
            return getInitialState();
        default: return getInitialState();
    }
}