import React, { Component } from 'react';
import ReactDom from 'react-dom';




const counter = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
};




class App extends Component {
    state = counter(undefined, {});

    dispatch = (action) => {
        this.setState(prevState => {
            console.log(prevState);
            return counter(prevState, action);
        });
    };

    increment = () => {
        this.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.dispatch({ type: 'DECREMENT' });
    };


    render() {
        return (
            <div>
                <div className="t-center">
                    <h3>Use babel preset - stage-2</h3>
                </div>
                <div className="wr">
                    <div>
                        <button onClick={this.decrement}>
                            <span>-</span>
                        </button>
                        <div className="t-center">
                            {this.state.value}
                        </div>
                        <button onClick={this.increment}>
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDom.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);
