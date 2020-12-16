import React, {Component} from 'react';
import AddTodo from '../../components/AddTodo/AddTodo';
import TodoList from '../../components/TodoList/TodoList';
import TodoLeft from '../../components/TodoLeft/TodoLeft';

class TodoPage extends Component{
    render(){
        return <div>
            <AddTodo></AddTodo>
            <TodoList></TodoList>
            <TodoLeft></TodoLeft>
        </div>
    }
}

export default TodoPage;