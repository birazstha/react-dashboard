import Input from "../../components/Input";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="bg-secondary min-h-screen mx-auto flex  justify-center items-center ">
      <div className="bg-white mx-auto rounded-md p-5 w-[350px]">
        <div className="flex items-center flex-col mb-5">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p>Login to access your account.</p>
        </div>
        <div className="flex flex-col">
          <Input name="username" />
          <Input name="password" type="password" />


          <p className="mb-3">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#6663e6] font-semibold hover:text-[#333191] duration-200"
            >
              Sign Up
            </Link>
          </p>


          <button className="bg-secondary text-white py-2 rounded-sm">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
