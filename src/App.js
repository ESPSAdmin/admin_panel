import "./App.css";
import { Index as Route } from "./routes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer/>
      <Route />
    </>
  );
}

export default App;
