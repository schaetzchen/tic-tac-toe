import React from 'react';
import PropTypes from "prop-types";
export const GameBtn = (props) => {
    return (
        <button
            className="game__btn"
            onClick={props.onClick}
        >
            Start over
        </button>
    );
}

GameBtn.propTypes = {
    onClick: PropTypes.func.isRequired
}