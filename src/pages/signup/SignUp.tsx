import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title } = Typography;

const SignUp: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log(values, "form data");
  };
  return (
    <>
      <div className="login-section ">
        <div className="login-container">
          <div>
            <div className="signup-form">
              {" "}
              <Title
                className="signup-title"
                style={{ fontSize: "25px", color: "rgb(9 102 177)" }}
              >
                Sign Up
              </Title>{" "}
            </div>
            <Form
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={onSubmit}
              layout="vertical"
              requiredMark="optional"
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
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
                  placeholder="Create password"
                />
              </Form.Item>
              <Form.Item
                name="confirmpassword"
                label="Confirm Password"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Confirm your password"
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: "30px" }}>
                <Button block={true} type="primary" htmlType="submit">
                  Sign up
                </Button>
                <div style={{ marginTop: "8px", textAlign: "center" }}>
                  <span>
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <span style={{ color: "rgb(9 102 177)" }}> Login</span>
                    </Link>
                  </span>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
