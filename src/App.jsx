import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
