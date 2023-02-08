import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import React, { useState } from "react";

export default function Settings() {
  const [colorPicked, setColorPicked] = useState();
  const [formSetting] = Form.useForm();
  const handleChangeColor = (e) => {
    setColorPicked(e.target.value);
  };
  const handleSubmitForm = (value) => {
    console.log(value);
  };
  return (
    <div className="container">
      <h1>Settings</h1>
      <Form
        form={formSetting}
        name="settings"
        layout="vertical"
        onFinish={handleSubmitForm}
      >
        <Row gutter={32}>
          <Col span={6}>
            <Form.Item label="Title" name="title">
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={6}>
            <Form.Item label="Background Color" name="backgroundColor">
              <Input style={{ color: colorPicked }} />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item label="Color" name="color">
              <Input type="color" onChange={handleChangeColor} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Active Date" name="activeDate">
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Form.Item shouldUpdate style={{ marginLeft: "16px" }}>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !formSetting.isFieldsTouched([
                    "title",
                    "email",
                    "backgroundColor",
                    "activeDate",
                  ])
                }
              >
                Save
              </Button>
            )}
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
}
