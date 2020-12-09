import React, { Component } from 'react';
import { inject, observer,  } from 'mobx-react';
import { trace } from 'mobx';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.scss';

@inject( 'todoList' )
@observer
class TodoList extends Component {
    render() {
        trace();
        const { todoList } = this.props;
        const { todos } = todoList;
        return (
            <ul>
                {
                    todos.map( todo =>
                        (
                            <li key={todo.id}>
                                <TodoItem todo={todo} />
                                <span className="remove" onClick={ () => {
                                    todoList.delTodo( todo );
                                }}>X</span>
                            </li>
                        )
                     )
                }

            </ul>

        )

    }
}
export default TodoList;