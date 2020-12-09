import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

@inject( 'todoList' )
@observer
class AddTodo extends Component {
    state = {
        inputVal: ""
    }

    change = (e) => {
        const inputVal = e.target.value;
        if( inputVal.trim() !== "" ){
            this.setState({
                inputVal
            });

        }
    }
    submit = (e) => {
        e.preventDefault();
        const inputVal = this.state.inputVal;
        this.props.todoList.addTodo( inputVal );
        this.setState({
            inputVal : ""
        });
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text" className="todoinput" onChange={this.change} value={this.state.inputVal}/>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
            </form>


        )

    }
}
export default AddTodo;