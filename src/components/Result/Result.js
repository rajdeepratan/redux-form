import React, { Component } from 'react';

class Result extends Component {
    render() {
        const { result, close } =this.props;

        console.log('Result Page: ', result);
        
        return (
            <React.Fragment>
                <div className="row">
                    <div className="colm">
                        First Name: {this.props.result.firstName}
                    </div>
                    <div className="colm">
                        Last Name: {this.props.result.lastName}
                    </div>
                    <div className="colm">
                        Number: {this.props.result.number}
                    </div>
                    <div className="colm">
                        Email: {this.props.result.email}
                    </div>
                    <div className="colm">
                        <button onClick={close}>
                            Close
                        </button>
                    </div>
                </div>   
            </React.Fragment>
        );
    }
}

export default Result;