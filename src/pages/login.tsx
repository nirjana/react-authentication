import { Button, Checkbox, Divider, Form, Input, Typography } from "antd";
import { GoogleOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Icons } from "../assets/Icons/Icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

import { Link } from "react-router-dom";
const { Text, Title } = Typography;
export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      navigate("/signin", { state: { user: codeResponse } });
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="login-section">
      <div className="login-container  ">
        <div className="login-header">
          <div className="login-header-logo">
            {" "}
            <Divider>
              {" "}
              <Icons.Logo />
            </Divider>
          </div>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button block={true} type="primary" htmlType="submit">
              Log in
            </Button>
            <Divider> Or Login With</Divider>
            <div className="social-login">
              <GoogleOutlined className="social-icon" onClick={() => login()} />
            </div>
            <div>
              <Text className="login-text">Don't have an account?</Text>{" "}
              <Link to={"/signup"}>Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
