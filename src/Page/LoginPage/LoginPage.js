import React from "react";
import { Button, Form, Input, message } from "antd";
import Lottie from "lottie-react";
import animate_login from "../../asset/animate_login.json";
import { userServ } from "../../service/userService";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../../redux/Constant/constant";
import { localUserServ } from "../../service/localUserService";

export default function LoginPage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    userServ
      .postLogin(values)
      .then((res) => {
        console.log(res);

        // thông báo
        message.success("Đăng nhập thành công");

        // lưu xuống localStorage
        localUserServ.set(res.data.content);

        // đẩy lên redux
        dispatch({
          type: USER_LOGIN,
          payload: res.data.content,
        });

        // chuyển trang (trang chủ)
        navigate("/");
      })
      .catch((err) => {
        // thông báo
        message.error("Đăng nhập thất bại");
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" bg-red-500 flex w-screen h-screen items-center justify-center">
      <div className="bg-white w-11/12 rounded">
        <div className=" flex items-center justify-center py-10">
          <div className="w-1/2 pl-5">
            <Form
              className="text-left"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" danger>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="w-1/2">
            <Lottie className="w-60" animationData={animate_login} />
          </div>
        </div>

        <p>
          Nếu chưa có tài khoản, bạn có thể{" "}
          <NavLink style={{ color: "blue" }} to={"/signup"}>
            đăng ký{" "}
          </NavLink>{" "}
          hoặc dùng thử tài khoản này:{" "}
          <span>
            <b>Tài khoản:</b> <span className="hover:text-sky-500">daivo</span>
          </span>{" "}
          ,{" "}
          <span>
            <b>Mật khẩu: </b> <span className="hover:text-sky-500">123456</span>
          </span>
        </p>
      </div>
    </div>
  );
}
