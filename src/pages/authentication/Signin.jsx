import axios from "axios";
import Input from "../../components/Input";
import { Link, Form, useActionData, useNavigation } from "react-router-dom";

export default function Signin() {
  const errorMessages = useActionData();
  console.log(errorMessages);

  const errors = errorMessages?.errors || {};
  const navigation = useNavigation();
  const isLogging = navigation.state === "submitting"; //submitting is default

  return (
    <div className="bg-secondary min-h-screen mx-auto flex  justify-center items-center ">
      <div className="bg-white mx-auto rounded-md p-5 w-[350px]">
        <div className="flex items-center flex-col mb-5">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p>Login to access your account.</p>
        </div>
        <Form className="flex flex-col" method="POST" autoComplete="off">
          <Input name="username" errors={errors.username?.[0]} />

          <Input
            name="password"
            type="password"
            errors={errors.password?.[0]}
          />
          <button
            className="bg-secondary text-white py-2 rounded-sm mb-2"
            disabled={isLogging}
          >
            {isLogging ? "Logging In" : "Login"}
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

export async function loginAction({ request, params }) {
  const formData = await request.formData();
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
    clientId: "2",
    clientSecret: "FX48j8OEDZW8nQqbl9uYZYA7JoMAcITB4JsuR6O1",
  };

  const url = "http://127.0.0.1:8000/api/login";

  try {
    const res = await axios.post(url, data);
    if (res.status === 200) {
      console.log(res.data);
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 422) {
        return error.response.data;
      }
    }
  }

  return false;
}
