import { AppRouting } from "./app-routing";
import { LandingPage } from "./components/auth/landingPage/landingPage";
import { LoginComponent } from "./components/auth/login/login";
import { Topnavbar } from "./components/shared/navbar/navbar";

function App() {
  return (
    <div className="App">
       <>
        <AppRouting></AppRouting>
       </>
    </div>
  );
}

export default App;
