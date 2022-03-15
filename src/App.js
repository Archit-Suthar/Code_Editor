import './App.css';
// import Header from './Components/Header';
import Home from './Components/Home';
import DataProvider from './Context/DataProvider';

function App() {

  return (
    <DataProvider>
      <Home/>
    </DataProvider>
    
  );
}

export default App;
