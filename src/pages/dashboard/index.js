import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { revenuePath, subscriptionPath } from "../../constant/common";
import styles from "./index.module.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [menuType, setMenuType] = useState(1);
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <h1>Dashboard</h1>
      <Row>
        <Button
          type={menuType === 1 ? "primary" : "default"}
          onClick={() => {
            handleNavigate(subscriptionPath);
            setMenuType(1);
          }}
          className={styles.btn}
        >
          Subcription
        </Button>
        <Button
          type={menuType === 2 ? "primary" : "default"}
          onClick={() => {
            handleNavigate(revenuePath);
            setMenuType(2);
          }}
        >
          Revenue
        </Button>
      </Row>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}
