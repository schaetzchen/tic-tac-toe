import React from 'react';
import PropTypes from "prop-types";
export const GameInfo = (props) => {
    return (
        <span className="game__info">{props.value}</span>
    );
}

GameInfo.propTypes = {
    value: PropTypes.string.isRequired
}