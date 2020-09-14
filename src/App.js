import React, { Component } from 'react';
//import logo from './assets/images/logo.svg';
import batmanSad from './assets/images/batmanSad.png';
import './assets/css/App.css';
import Navigazione from './components/Navigazione';
import Guardie from './components/Guardie';
import Criminali from './components/Criminali';

// function App() {
//   return (
//     <div className="App">
//       <Navigazione />
//       <div className="row">
//       <Guardie />
//       </div>
//     </div>
//   );
// }

class App extends Component {

  state = {
    data: []
  }

  SalvaDati = (datiDaGuardie) => {
    this.setState({
      data: [...this.state.data, datiDaGuardie]
    })

  }

  render() {
    const { data } = this.state;

    const listaCriminali = data.map(el => {
      return (
        <Criminali key={el.unique} name={el.name} crimine={el.crimine} age={el.age} />
      )
    })

    const zeroCriminali = <div className="col-md-8 offset-md-2 my-4">
      <div className="card card-header text-center">
      <h3>Non ci sono ancora dati da Criminali nel sistema</h3>
      <img className="mx-auto" src={batmanSad} width='70px' height='70px' alt=""/>
      </div>
    </div>


    return (
      <div>
        <Navigazione total={data.length} />
        <div className="container">
        <div className="row">
          <Guardie saveData={this.SalvaDati} />
          <div className="col-md-8">
            <div className="row">
              {(data.length === 0) ? zeroCriminali : listaCriminali

              }
              {
                console.log(data)
              }
            </div>
          </div>
        </div>
        </div>

      </div>
    );
  }
}

export default App;
