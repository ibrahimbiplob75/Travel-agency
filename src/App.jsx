import { Outlet } from "react-router-dom"
import Header from "./Home/Header"


function App() {


  return (
    <>
      <div className="w-5/6 m-auto">
        <Header></Header>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default App
