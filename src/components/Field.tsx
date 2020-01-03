import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell'
import { Store } from '../store'

interface StateProps {
    field: { closed: boolean, bomb: boolean, number: number }[][]
}

type Props = StateProps;

const Field: React.FunctionComponent<Props> = function({ field }: Props) {
    return <React.Fragment>
        {field.map((r, i) => <div className="row" key={i}>
                {r.map((c, j) => 
                    <Cell key={j} y={i} x={j} closed={c.closed} bomb={c.bomb} number={c.number}/>)}
                </div>)}
    </React.Fragment>
}

export default connect<StateProps, {}, {}, Store>(store => ({ field: store.field }))(Field);