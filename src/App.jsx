import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
// import Homepage from "./pages/Homepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route,index)=>(
          <Route key={index} path={route.path} element={route.element}/>
        ))}      </Routes>
    </BrowserRouter>
  );
}

export default App;
