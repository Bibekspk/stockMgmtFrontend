import { LandingPage } from "./components/auth/landingPage/landingPage";
import { LoginComponent } from "./components/auth/login/login";
import { Topnavbar } from "./components/shared/navbar/navbar";

function App() {
  return (
    <div className="App">
       <Topnavbar></Topnavbar>
       <LoginComponent></LoginComponent>
        {/* <LandingPage></LandingPage> */}
    </div>
  );
}

export default App;
