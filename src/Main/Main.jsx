import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            items: []
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                input: event.target.value
            }
        )
    }

    handleSubmit(event) {
        event.preventDefault(); // не дать перезагрузить
        this.setState(
            {
                input: this.state.input,
                items: [...this.state.items, this.state.input]
            }
        )
    }

    handleRemove(event) {
       event.target.setAttribute('hidden', true)

    
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="">
                    <ol onDoubleClick ={this.handleRemove}>
                        {this.state.items.map((item, index) => (
                            <li key ={index} >{item}</li>
                        ))}
                    </ol>
                    <input placeholder ='Enter the task' value={this.state.input} onChange={this.handleChange} type="text" name="" id="" />
                    <button>Submit</button>
                </form>

            </div>
        );
    }
}

