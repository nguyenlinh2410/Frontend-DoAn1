import Homepage from "../pages/Homepage";
import CreateUser from "../Admin/CreateUser";
import MainAd from "../Admin/MainAd";
import EditUser from "../Admin/EditUser";
import Login from "../Admin/Login";
import AdminProtectedRoute from "../Admin/AdminProtectedRoute";
import Admin from "../Admin/Admin";
import AddDiTich from "../Admin/DiTich/AddDiTich";
import DiTich from "../Admin/DiTich/DiTich.jsx";
import EditDiTich from "../Admin/DiTich/EditDiTich.jsx";

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
  {
    path: "/ditich",
    element: (
      <AdminProtectedRoute>
        <DiTich />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/ditich/create",
    element: (
      <AdminProtectedRoute>
        <AddDiTich />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/ditich/edit/:id",
    element: (
      <AdminProtectedRoute>
        <EditDiTich />
      </AdminProtectedRoute>
    ),
  },
];

export default routes;
