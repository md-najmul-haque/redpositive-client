import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';
import InputForm from './Components/InputForm/InputForm';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <InputForm />
      <Form />
      <Table />
    </div>
  );
}

export default App;
