import React from 'react';
import './css/App.css';

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <header className="header">
          <h1 className="title">Прогноз погоды</h1>
          <form className="form" id ="form">
            <input id = "inputCity" className="input" type='text' placeholder='Введите название города'></input>
            <button className="btn">Показать</button>
          </form>
        </header>     

        <script src="./main.js"></script>
      </React.Fragment>
    )
  }
}

export default App;
