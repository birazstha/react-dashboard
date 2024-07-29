import axios from "axios";
import Input from "../../components/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import {
  Link,
  Form,
  useActionData,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

const apiUrl = process.env.REACT_APP_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const handleSubmit = async (data) => {
  const url = `${apiUrl}/login`;
  data = {
    username: data.username,
    password: data.password,
    clientId: clientId,
    clientSecret: clientSecret,
  };

  try {
    const res = await axios.post(url, data);
    if (res.status === 200) {
      const { accessToken, expires_at, token_type } = res.data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("expiresAt", expires_at);
      localStorage.setItem("tokenType", token_type);
      return { success: true };
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 422) {
        console.log(error.response.data.errors);
        return { success: false, errors: error.response.data.errors };
      }
    }
  }
};

export default function Signin() {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const navigation = useNavigation();
  const isLogging = navigation.state === "submitting";

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setSubmitting(true);
      const result = await handleSubmit(values);
      setSubmitting(false);
      if (result.success) {
        navigate("/");
      } else {
        setServerErrors(result.errors || {});
      }
    },
  });

  return (
    <div className="bg-secondary min-h-screen mx-auto flex justify-center items-center">
      <div className="bg-white mx-auto rounded-md p-5 w-[350px]">
        <div className="flex items-center flex-col mb-5">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p>Login to access your account.</p>
        </div>
        <Form
          className="flex flex-col"
          onSubmit={formik.handleSubmit}
          method="POST"
          autoComplete="off"
        >
          <Input
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={
              formik.touched.username &&
              (formik.errors.username || serverErrors.username)
            }
          />
          <Input
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errors={
              formik.touched.password &&
              (formik.errors.password || serverErrors.password)
            }
          />
          <button
            type="submit"
            className="bg-secondary text-white py-2 rounded-sm mb-2"
            disabled={isLogging}
          >
            {submitting ? "Logging In" : "Login"}
          </button>
          <p className="mb-3">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#6663e6] font-semibold hover:text-[#333191] duration-200"
            >
              Sign Up
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
