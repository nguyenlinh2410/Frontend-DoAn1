// src/components/AdminLayout.jsx

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// Import các component cần thiết từ Ant Design
import { Layout, Menu, theme, Button } from "antd";
import { getCurrentAdmin, logoutAdmin } from "../services/UserService";
import "./HeaderAd.css";

// Lấy các component AntD
const { Header, Content, Sider } = Layout;

export default function AdminLayout() {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();
  // State quản lý trạng thái thu gọn của Sidebar (mặc định là mở)
  const [collapsed, setCollapsed] = useState(false);

  // Lấy các giá trị theme mặc định của AntD
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const currentAdmin = getCurrentAdmin();
    setAdmin(currentAdmin);
  }, []);

  const handleLogout = () => {
    logoutAdmin();
    navigate("/login");
  };

  // Hàm xử lý khi một mục menu được click
  // const handleMenuClick = (e) => {
  //   if (e.key === "logout") {
  //     handleLogout();
  //   }
  // };

  // Cấu trúc menu được định nghĩa trực tiếp
  const items = [
    {
      key: "sub-admin",
      label: "Admin",
      children: [
        {
          key: "admin-list",
          label: <Link to="/admin/admin-mana">Danh sách</Link>,
        },
        { key: "admin-create", label: <Link to="/admin/create">Create</Link> },
      ],
    },
    // SubMenu "Di Sản"
    {
      key: "sub-disan",
      label: "Di Sản", // Title sẽ hiển thị
      children: [
        { key: "disan-list", label: <Link to="/admin/disan">Danh sách</Link> },
        {
          key: "disan-create",
          label: <Link to="/admin/disan/create">Thêm mới</Link>,
        },
      ],
    },

    // SubMenu "Di Tích"
    {
      key: "sub-ditich",
      label: "Di Tích",
      children: [
        {
          key: "ditich-list",
          label: <Link to="/admin/ditich">Danh sách</Link>,
        },
        {
          key: "ditich-create",
          label: <Link to="/admin/ditich/create">Thêm mới</Link>,
        },
      ],
    }, {
      key: "sub-tuyen",
      label: "Tuyến Tham Quan",
      children: [
        {
          key: "tuyen-list",
          label: <Link to="/admin/tuyen">Danh sách</Link>,
        },
        {
          key: "tuyen-create",
          label: <Link to="/admin/tuyen/create">Thêm mới</Link>,
        },
      ],
    },
     {
      key: "sub-ve",
      label: "Quản Lý Vé Tham Quan",
      children: [
        {
          key: "ve-list",
          label: <Link to="/admin/qlve">Quản Lý Vé</Link>,
        },
        {
          key: "ve-tk",
          label: <Link to="/admin/tkdoanhthu">Thống kê Doanh Thu</Link>,
        }
      ],
    }
    ,
     {
      key: "sub-lienhe",
      label:  <Link to="/admin/lienhe">Thông tin liên hệ</Link>,
      // children: [
      //   {
      //     key: "lienhe-list",
      //     label: <Link to="/admin/lienhe">Danh sách</Link>,
      //   }
      // ],
    }

    // Mục Logout
    // {
    //   key: "logout",
    //   label: "Logout",
    //   // AntD sẽ gọi hàm này khi key 'logout' được click
    //   onClick: handleMenuClick,
    // },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 1. SIDEBAR (Sider) */}
      <Sider
        collapsible // Cho phép đóng mở
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        {/* Logo/Header Sidebar */}
        <div
          style={{
            height: 32,
            margin: 16,
            color: "white",
            textAlign: "center",
            lineHeight: "32px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => navigate("/admin")}
        >
          {collapsed ? "ADM" : "ADMIN PANEL"}
        </div>

        {/* Component Menu của AntD */}
        <Menu
          theme="dark" // Màu nền menu tối
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          items={items}
          // onClick đã được tích hợp vào từng item (như Logout)
        />
      </Sider>

      {/* 2. MAIN CONTENT */}
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 250,
          transition: "margin-left 0.2s",
        }}
      >
        {/* Header trên cùng */}
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {admin && (
            <span
              style={{ float: "right", paddingRight: 20, lineHeight: "64px" }}
            >
              Hello, **{admin.name}**
              <Button
                className="btn-logout"
                danger
                onClick={handleLogout}
                style={{
                  marginLeft: 16,
                  background: "#001529",
                  color: "white",
                  outline: "none",
                  border: "none",
                  fontSize: "17px",
                  padding: "12px",
                }}
              >
                Logout
              </Button>
            </span>
          )}
        </Header>

        {/* Nội dung chính của trang */}
        <Content>
          <div
            style={{
              padding: 24,
              height: "100vh",
              background: colorBgContainer,
              borderRadius: "8px",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
