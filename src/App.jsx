import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
// <Outlet> é usado para indicar onde o conteúdo da rota deve ser inserido no layout pai

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
