import Homepage from "../pages/Homepage";
// import EditPerson from "../Admin/EditPerson";
import CreateUser from "../Admin/CreateUser";

const routes=[
    {path:"/", element: <Homepage />},
    {path:"/admin/create", element: <CreateUser />},
    // {path:"/edit/:id", element: <EditPerson />},
];

export default routes;