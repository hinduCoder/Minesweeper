import React from 'react';
import { connect } from 'react-redux';
import { Store } from '../store'

import './Stats.css';

interface StateToProps {
    bombs: number;
}

type Props = StateToProps;

function Stats(props: Props) {
    return (
        <div className="bombs">{`💣 ${props.bombs.toString().padStart(2, '0')}`}</div>
    )
}

export default connect<StateToProps, {}, {}, Store>(state => {
    return {
        bombs: state.bombs
    }
})(Stats);