import Homepage from "../pages/Homepage";
import CreateUser from "../Admin/CreateUser";
import MainAd from "../Admin/MainAd";
import EditUser from "../Admin/EditUser";
import Login from "../Admin/Login";
import AdminProtectedRoute from "../Admin/AdminProtectedRoute";
import Admin from "../Admin/Admin";

const routes = [
  { path: "/", element: <Homepage /> },
  {
    path: "/admin",
    element: (
      <AdminProtectedRoute>
        <MainAd />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin-mana",
    element: (
      <AdminProtectedRoute>
        <Admin />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/create",
    element: (
      <AdminProtectedRoute>
        <CreateUser />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/edit/:id",
    element: (
      <AdminProtectedRoute>
        <EditUser />
      </AdminProtectedRoute>
    ),
  },
  { path: "/login", element: <Login /> },
];

export default routes;
