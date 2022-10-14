import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Table from './Components/Table/Table';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Table />
      <ToastContainer />
    </div>
  );
}

export default App;
