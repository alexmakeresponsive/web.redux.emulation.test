import React, { Component } from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    state = { value: 10 };

    increment = () => {
        this.setState(prevState => {
            console.log(prevState);
            return {value: prevState.value + 1}
        });
    };

    decrement = () => {
        this.setState(prevState => {
            console.log(prevState);
            return {value: prevState.value - 1}
        });
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
