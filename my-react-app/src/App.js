import logo from './logo.svg';
import './App.css';

const Descripcion = (props) => {

  return <p style={{color: props.color}}>{props.message}</p>
  
}

const App = () => {
  return (
    <div className="App">
      <Descripcion color='red' message='Estamos trabajando ' />
      <Descripcion color='green' message='En un curso ' />
      <Descripcion color='blue' message='De React ' />

    </div>
  );
}

export default App;
