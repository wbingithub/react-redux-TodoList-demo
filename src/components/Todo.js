import React from 'react'

// import PropTypes from 'prop-types'


class Todo extends React.Component {
    render() {
        const { onClick, completed, text } = this.props;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: completed ? 'default' : 'pointer'
                }}
            >
                {text}
            </li>
        );
    }
}




export default Todo