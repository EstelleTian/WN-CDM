import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("todoList")
@observer
class TodoItem extends Component{
    render(){
        const todo = this.props.todo;
        return <div>
            <input type="checkbox" onChange={ () => todo.toggleFinished() } />
            <span className={`${todo.finished ? `finished` : `` }`}>{todo.title}</span>
        </div>
    }
}

export default TodoItem;