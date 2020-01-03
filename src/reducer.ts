import { Store } from './store'
import Field from './code/Field';

interface ActionBase {
    type: string
}

interface OpenAction extends ActionBase {
    x: number;
    y: number;
}

type Action = OpenAction;

const field = new Field(10, 10, 10);

export function getInitialState(): Store {
    return {
        field: field.fieldMatrix.toDoubleArray()
    }
}

export default function(store: Store | undefined, action: Action): Store {
    switch(action.type) {
        case 'OPEN': 
            field.open(action.x, action.y);
        default: return getInitialState();
    }
}