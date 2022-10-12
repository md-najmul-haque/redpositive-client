import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Form />
      <Table />
    </div>
  );
}

export default App;
