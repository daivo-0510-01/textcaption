import React from "react";
import { AutoComplete, Button, Form, Input, Select, message } from "antd";
import { useState } from "react";
import Lottie from "lottie-react";
import animate_gignup from "../../asset/animate_signup.json";
import { userServ } from "../../service/userService";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function SignUpPage() {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    userServ
      .postSignUp(values)
      .then((res) => {
        console.log(res);
        // thông báo
        message.success("Đăng ký thành công");
        // đẩy qua đăng nhập
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="flex items-center bg-cyan-500 w-screen h-screen ">
      <div className="w-9/12 h-5/6 rounded mx-auto bg-white flex items-center justify-center">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "84",
          }}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="taiKhoan"
            label="Tài khoản"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="hoTen"
            label="Họ tên"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="matKhau"
            label="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            // hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["matKhau"]}
            // hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("matKhau") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="email"
            label="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="soDt"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" danger>
            Sign Up
          </Button>
        </Form>
        <div>
          <Lottie animationData={animate_gignup} />
        </div>
      </div>
    </div>
  );
}
