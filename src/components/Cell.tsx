import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import './Cell.css';

interface DispatchProps {
    open: () => void
}

interface OwnProps {
    bomb: boolean;
    closed: boolean;
    number?: number | null;
    x: number;
    y: number;
}

type Props = DispatchProps & OwnProps;

function Cell(props: Props) {
    return (
    <div 
        className={classnames('cell', { closed: props.closed })} 
        onClick={() => props.open()}>
            {props.bomb ? '💣' : props.number}
    </div>);
}
interface DispatchProps {
    open: () => void
}

export default connect<{}, DispatchProps, OwnProps>(null, (dispatch, props) => {
    return {
        open: () => dispatch({type: 'OPEN', x: props.x, y: props.y})
    }
})(Cell);