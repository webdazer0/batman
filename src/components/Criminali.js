import React, { Component } from 'react';

class Criminali extends Component {
     render() {

        const { name, crimine, age, unique } = this.props;

        return (
            <div className="col-md-4 mt-4 text-center">
                <div className="card">
                    <div className="card-header">
                        <div>
                        <h3>{name}</h3>
                        <span className="badge badge-pill badge-danger">{age}</span>
                        </div>
                        
                    </div>
                <div className="card-body  d-flex justify-content-between">
                    <p className="lead"><span className="fa fa-user-secret"></span> {crimine}</p>
                    <img src={`https://gravatar.com/avatar/${unique}/?d=monsterid&s=45`} alt=""/>
                </div>
            </div>
            </div>
        )
    }
}

export default Criminali;