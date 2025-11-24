import Homepage from "../pages/Homepage";

import AdminMananger from "../Admin";
import AdminProtectedRoute from "../Admin/AdminProtectedRoute.jsx"
const {
  AdminLayout,
  MainAd,
  CreateUser,
  EditUser,

  Login,

  Admin,
  AddDiTich,
  DiTich,
  EditDiTich,

  DiSan,
  AddDiSan,
  EditDiSan,
  
} = AdminMananger;

const routes = [
  { path: "/", element: <Homepage /> },
  {
    path: "/admin",
    element: (
      <AdminProtectedRoute>
      <AdminLayout />
      </AdminProtectedRoute>
    ),
    children: [
      { index: true, element: <MainAd /> },
      { path: "admin-mana", element: <Admin /> },
      { path: "create", element: <CreateUser /> },
      { path: "edit/:id", element: <EditUser /> },
      { path: "disan", element: <DiSan /> },
      { path: "disan/create", element: <AddDiSan /> },
      { path: "disan/edit/:id", element: <EditDiSan /> },
      { path: "ditich", element: <DiTich /> },
      { path: "ditich/create", element: <AddDiTich /> },
      { path: "ditich/edit/:id", element: <EditDiTich /> },
      { path: "admin-mana", element: <Admin /> },
    ],
  },
 
  { path: "/login", element: <Login /> },

  
];

export default routes;
