import { Outlet } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import GlobalStyles from "./styles/Global.styled";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <GlobalStyles />
    </div>
  );
}

export default App;