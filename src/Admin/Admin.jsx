import GetAllAdmin from "./GetAllAdmin";

import "./admin.css";

export default function Admin() {
  
  return (
    <>
      <header className="admin-header">
        <h1 className="admin-title">Admin Manager</h1>
        
      </header>
      <GetAllAdmin />
    </>
  );
}
