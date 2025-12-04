import Homepage from "../pages/Homepage.jsx";
import GioiThieu from "../pages/GioiThieu.jsx";
import DiTichs from "../pages/DiTichs.jsx";
import LienHe from "../pages/LienHe.jsx";
import AdminMananger from "../Admin";
import BaivietDitich from "../components/DiTich/BaivietDitich.jsx";
import AdminProtectedRoute from "../Admin/AdminProtectedRoute.jsx";
import DiSans from "../pages/DiSans.jsx";
import BaivietDisan from "../components/DiSan/BaivietDiSan.jsx";
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

  AddTuyenThamQuan,
  TuyenThamQuan,
  EditTuyenThamQuan,
} = AdminMananger;

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/about", element: <GioiThieu /> },
  { path: "/di-tich", element: <DiTichs /> },
  { path: "/lien-he", element: <LienHe /> },
  { path: "/di-tich/:slug", element: <BaivietDitich /> },
  { path: "/danh-muc/:id", element: <DiSans /> },
  { path: "/di-san/:slug", element: <BaivietDisan /> },

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
      
      { path: "tuyen/create", element: <AddTuyenThamQuan /> },
      { path: "tuyen", element: <TuyenThamQuan /> },
      { path: "tuyen/edit/:id", element: <EditTuyenThamQuan /> },
    ],
  },

  { path: "/login", element: <Login /> },
];

export default routes;
