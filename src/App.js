import { AppRouting } from "./app-routing";
import { LoginComponent } from "./components/auth/login/login";
import { Topnavbar } from "./components/shared/navbar/navbar";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
        <AppRouting></AppRouting>
        <ToastContainer
          toastStyle={{backgroundColor: "#212529",color:"white"}}
        />
    </div>
  );
}

export default App;
