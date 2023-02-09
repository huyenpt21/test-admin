import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import React, { useState } from "react";

export default function Settings() {
  const [colorPicked, setColorPicked] = useState("");
  const [formSetting] = Form.useForm();
  const handleChangeColor = (e) => {
    setColorPicked(e.target.value);
  };
  const handleChangeBGColor = (e) => {
    if (e.target.value.trim()) {
      formSetting.setFieldValue("color", e.target.value);
    }
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
            <Form.Item
              label="Title"
              name="title"
              required
              rules={[{ required: true, message: "Title is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={32}>
          <Col span={6}>
            <Form.Item
              label="Background Color"
              name="backgroundColor"
              required
              rules={[
                { required: true, message: "Background color is required" },
              ]}
            >
              <Input
                style={{ color: colorPicked }}
                onChange={handleChangeBGColor}
              />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item label="Color" name="color">
              <Input
                name="colorPicker"
                type="color"
                onChange={handleChangeColor}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Active Date"
              name="activeDate"
              required
              rules={[{ required: true, message: "Active date is required" }]}
            >
              <DatePicker showTime />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item shouldUpdate>
          {() =>
            formSetting.isFieldsTouched([
              "title",
              "email",
              "backgroundColor",
            ]) && (
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            )
          }
        </Form.Item>
      </Form>
    </div>
  );
}
