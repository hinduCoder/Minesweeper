import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import { Store } from '../store'
import ICell from '../code/Cell';

import './Field.css';

interface StateProps {
    field: ICell[][]
}

type Props = StateProps;

const Field: React.FunctionComponent<Props> = function({ field }: Props) {
    return <React.Fragment>
        {field.map((r, i) => <div className="row" key={i}>
                {r.map((c, j) => 
                    <Cell key={j} y={j} x={i} closed={c.closed} bomb={c.bomb} number={c.number}/>)}
                </div>)}
    </React.Fragment>
}

export default connect<StateProps, {}, {}, Store>(store => ({ field: store.field }))(Field);