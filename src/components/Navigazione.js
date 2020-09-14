import React, { Component } from 'react';

class Navigazione extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
        <a className="navbar-brand" href="/">BatmanApp <span className="badge badge-pill badge-danger">{this.props.total}</span></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav d-flex justify-content-between ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Detenuti <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Signin</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
        )
    }
}

export default Navigazione;