import React from 'react';

export default class ClassComponent extends React.Component {
    
    constructor(props){
        super(props);

        this.state = { value: props.initialValue };
    }

    sum(delta){
        this.setState({ ...this.state, value: this.state.value + delta });
    }

    render() {
        return(
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <div className="btn-group">
                    <button className="btn btn-primary" onClick={() => this.sum(-1)}>Dec</button>
                    <button className="btn btn-primary" onClick={() => this.sum(1)}>Inc</button>
                </div>
            </div>
        );
    }


}