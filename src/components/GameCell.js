import React from 'react';
import PropTypes from "prop-types";
export const GameCell = (props) => {

    const handleClick = () => {
        if (props.isActive) {
            props.onClick(props.row, props.column);
        }
    }

    return (
        <button
            className="game__cell"
            onClick={handleClick}
        >
            {props.value}
        </button>
    );
}

GameCell.propTypes = {
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}