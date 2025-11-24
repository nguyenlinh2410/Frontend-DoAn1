import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => {
          // Nếu route có children thì render dạng nested
          if (route.children) {
            return (
              <Route key={i} path={route.path} element={route.element}>
                {route.children.map((child, j) => (
                  <Route
                    key={j}
                    index={child.index}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            );
          }

          // Route bình thường
          return <Route key={i} path={route.path} element={route.element} />;
        })}
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
