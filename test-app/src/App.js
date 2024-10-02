import logo from './logo.svg';
import './App.css';
import Test, {add} from './Test';

function App() {
  return (
    <>
    <p>비트캠프</p>
    <Test/>
    <p>{add(1,1)}</p>
    </>
  );
}

export default App;
