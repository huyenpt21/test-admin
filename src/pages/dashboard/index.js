import { Button, Row } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { revenuePath, subscriptionPath } from "../../constant/common";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <Row>
        <Button onClick={() => handleNavigate(subscriptionPath)}>
          Subcription
        </Button>
        <Button onClick={() => handleNavigate(revenuePath)}>Revenue</Button>
      </Row>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}
