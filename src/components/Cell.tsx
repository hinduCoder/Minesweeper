import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import './Cell.css';

interface DispatchProps {
    open: () => void;
    toggleFlag: () => void;
    autoOpen: () => void;
}

interface OwnProps {
    bomb: boolean;
    closed: boolean;
    number?: number | null;
    flagged: boolean;
    x: number;
    y: number;
}

type Props = DispatchProps & OwnProps;

function Cell(props: Props) {
    return (
    <div 
        className="cell" 
        onClick={() => props.open()} 
        onContextMenu={e => { e.preventDefault(); props.toggleFlag() }}
        onDoubleClick={props.autoOpen}
    >
        {renderContent()}
    </div>);

    function renderContent() {
        if (props.closed) {
            return (
                <div className="cover">
                    {props.flagged ? '⛳️' : null}
                </div>
            );
        } else {
            return props.bomb ? '💣' : props.number
        }
    }
}

interface DispatchProps {
    open: () => void
}

export default connect<{}, DispatchProps, OwnProps>(null, (dispatch, props) => {
    return {
        open: () => dispatch({type: 'OPEN', x: props.x, y: props.y}),
        toggleFlag: () => dispatch({type: 'TOGGLE_FLAG', x: props.x, y: props.y}),
        autoOpen: () => dispatch({type: 'AUTO_OPEN', x: props.x, y: props.y})
    }
})(Cell);