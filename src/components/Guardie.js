import React, { Component } from 'react';

class Guardie extends Component {

    state = {
        name: '',
        age: '',
        crimine: ''
    }

    ottieniDati = (e) => {
        
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    Save = (e) =>{
        e.preventDefault();
    }

    render() {
        return(
            <div className="col-md-4 mx-auto">
                <div className="card">

                <div className="card-body">
                    <div className="card-header">
                       <h3>Inserisci Dati Criminale</h3>
                    </div>
                <div className="form">
                <div className="form-group">
                        <input type="text" className="form-control" placeholder="Nome" name="name" onChange={this.ottieniDati} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Età" name="age" onChange={this.ottieniDati} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Crimine" name="crimine" onChange={this.ottieniDati} />
                    </div>
                    <button className="btn btn-primary btn-block" onClick={this.Save}>Salva dati</button>
                </div>
                </div>
                </div>

            </div>
        )
    }
}

export default Guardie;