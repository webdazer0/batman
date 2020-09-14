import React, { Component } from 'react';

class Guardie extends Component {

    state = {
        name: '',
        age: '',
        crimine: ''
    }

    componentDidMount() {
        this.setState({
            unique: Date.now()
        })
    }

    ottieniDati = (e) => {

        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
        //console.log(this.state);
    };

    Save = (e) => {
        e.preventDefault();
        const { saveData } = this.props;
        const dateNow = Date.now();
        this.setState({ unique: dateNow })
        saveData(this.state);
        return this.setState({
            name: '',
            age: '',
            crimine: ''
        })
    }

    render() {
        const { name, age, crimine } = this.state;
        return (
            <React.Fragment>

                <div className="col-md-4 mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h3>Inserisci Dati:</h3>
                        </div>
                        <div className="card-body">

                            <form onSubmit={this.Save}>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        placeholder="Nome"
                                        name="name"
                                        onChange={this.ottieniDati}
                                        value={name}
                                        autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control"
                                        placeholder="Età"
                                        name="age"
                                        onChange={this.ottieniDati}
                                        value={age}
                                        autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        placeholder="Crimine"
                                        name="crimine"
                                        onChange={this.ottieniDati}
                                        value={crimine}
                                        autoComplete="off" />
                                </div>
                                <button className="btn btn-primary btn-block" type="submit">Salva dati</button>
                            </form>



                        </div>
                    </div>

                </div>
            </React.Fragment>

        )
    }
}

export default Guardie;