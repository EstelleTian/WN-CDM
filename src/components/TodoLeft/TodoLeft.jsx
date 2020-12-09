import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'

@inject( 'todoList' )
@observer
class TodoLeft extends Component {
    render() {
        return (
            <div>
                { this.props.todoList.unfinishedTodo } 条未完成。
            </div>
        )

    }
}
export default TodoLeft;