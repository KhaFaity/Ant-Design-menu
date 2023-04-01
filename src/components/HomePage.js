import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {Router, Routes,Route, useNavigate, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './features/user/userSlice';
// import { store } from "../store";

function HomePage() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SlideMenu />
        <Content/>
      </div>
         {/* <Layout>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/xem-danh-sach-sinh-vien" element={<div>Xem danh sách sinh viên</div>} />
          <Route path="/them-sinh-vien" element={<div>Thêm sinh viên</div>} />
          <Route path="/quan-ly-phong" element={<div>Quản lý sinh phòng</div>} />
        </Routes>
      </Layout> */}
    </div>
  );
}
function SlideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  const navigate = useNavigate()
  // const handleMenuClick = (e) => {
  //   if (e.key === "signout") {
  //     //to do
  //   } else {
  //     navigate(e.key);
  //   }
  // };
  return (
   
    <div >
      <Menu
      //  onClick={handleMenuClick}
      className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          { label: "Quản lý sinh viên", children: [
            {label: "Cập nhật sinh viên", key: "/cap-nhat-sinh-vien"},
            {label: "Thêm sinh viên", key: "/them-sinh-vien"},
            {label: "Xem danh sách sinh", key: "/xem-danh-sach-sinh-vien"}
          ]},
          { label: "Quản lý sinh phòng", key: "/quan-ly-phong" },
          { label: "Quản lý sinh hóa đơn", key: "/quan-ly-hoa-don" },
          { label: "Quản lý hợp đồng" },
          { label: "Yêu cầu sửa chữa" },
          { label: "Thống kê" },
          { label: "Sign out", key: "/signout", danger: true },
        ]}
      ></Menu>
      <Content/>
    </div>
  );
}
function Header() {
  return (
    <div style={{height: 60, backgroundColor: "blueviolet", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1>Header</h1>
    </div>
  );
}
function Content() {
  return(
    <div>
      {/* <Provider store={store}> */}
        {/* <Router> */}
          {/* <Layout> */}
            <Routes>
                <Route path="/xem-danh-sach-sinh-vien" element={<div>Xem danh sách sinh viên</div>}></Route>
                <Route path="/cap-nhat-sinh-vien" element={<div>Cập nhật sinh viên</div>}></Route>
                <Route path="/them-sinh-vien" element={<div>Thêm sinh viên</div>}> </Route>
                <Route path="/quan-ly-phong" element={<div>Quản lý sinh phòng</div>}></Route>
                <Route path="/quan-ly-hoa-don" element={<div>Quản lý hóa đơn</div>}></Route>
                {/* <Route path="/quan-ly-phong" element={<div>Quản lý sinh phòng</div>} /> */}
            </Routes>
          {/* </Layout> */}
        {/* </Router> */}
      {/* </Provider> */}
    </div>
  )
}
// function Layout({ children }) {
//   return (
//     <div>
//       <Header />
//       <div style={{ display: "flex", flexDirection: "row" }}>
//         <SlideMenu />
//         <div style={{ flex: 1 }}>{children}</div>
//       </div>
//     </div>
//   );
// }

export default HomePage;
