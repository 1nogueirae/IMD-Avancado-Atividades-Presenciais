import React from 'react';
import ReactDOM from 'react-dom/client';

class ClicksCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  handleClick = () => {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: true });
    this.setState(prevState => ({
      clicks: prevState.clicks + 1,
      timestamp: timestamp
    }));
    this.props.addClick(timestamp);
  }

  render() {
    return (
      <div>
        <p>Registro de Horário de Clicks</p>
        <button onClick={this.handleClick}>Clique aqui</button>
      </div>
    );
  }
}

class ClicksList extends React.Component {

    render() {
    return (
      <div>
        <ul>
          {this.props.clicks.map((timestamp, index) => (
            <li key={index}>{timestamp}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function App() {

  const [clicks, setClicks] = React.useState([]);

  const addClicks = (timestamp) => {
    setClicks(prevClicks => [...prevClicks, timestamp]);
  }

  return (
    <div className="App">
      <ClicksCounter addClick={addClicks} />
      <ClicksList clicks={clicks} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
