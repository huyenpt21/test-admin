import { Layout, Menu } from "antd";
import { useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MENUS } from "./menu";
const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { Content, Sider } = Layout;
  const currentPath = useRef(location.pathname);
  return (
    <Layout theme={"light"}>
      <Sider theme={"light"}>
        <Menu
          items={MENUS}
          selectedKeys={currentPath.current}
          onClick={(e) => {
            navigate(e.key);
            currentPath.current = e.key;
          }}
        />
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
