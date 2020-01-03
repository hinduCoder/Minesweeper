import { Store } from './store'

interface ActionBase {
    type: string
}

interface OpenAction extends ActionBase {
    x: number;
    y: number;
}

type Action = OpenAction;

export default function(store: Store | undefined, action: Action): Store {
    if (!store) 
    {
        return {
            field:[]
        };
    }

    const newState = {...store}
    switch(action.type){
        case 'OPEN': 
            newState.field = [...newState.field];
            const f = newState.field[action.y][action.x];
            f.closed=false;
            if (f.number == null && !f.bomb)
            {
                debugger;
                open(action.x, action.y);
            }
            return newState;
        default: return newState;
    }

    function open(x: number, y: number) {
        if (x < 0 || x >= 9 || y < 0 || y >= 9)
            return;
        debugger;
        const current = newState.field[y][x];
        if (current.bomb || current.number)
            return;
        
        for (let i = -1; i <= 1; i++)
        {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0 || !newState.field[y+i][x+j].closed)
                    continue;
                open(x+i, y+j)
            }
        }

        current.closed = false;
    }
}