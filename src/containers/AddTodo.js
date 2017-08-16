import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddTodo extends React.Component {
    render(){
        let input
        const { dispatch } = this.props;

        return(
            <div>
                <form
                    onSubmit={
                        e => {
                            e.preventDefault()
                            if (!input.value.trim()) {
                                return
                            }
                            let _json = addTodo(input.value)
                            dispatch(_json)
                            input.value = ''
                        }
                    }
                >
                    <input type="text"
                           ref={node => {
                               input = node
                           }}
                    />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}





AddTodo = connect()(AddTodo)

export default AddTodo