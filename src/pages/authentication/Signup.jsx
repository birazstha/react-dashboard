import Input from "../../components/Input";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="bg-[#6663e6] min-h-screen mx-auto flex  justify-center items-center ">
      <div className="bg-white mx-auto rounded-md p-5 w-[400px]">
        <div className="flex items-center flex-col mb-5">
          <h1 className="text-2xl font-bold">Join Us Today</h1>
          <p>Register now to become a member. </p>
        </div>
        <div className="flex flex-col">
          <Input name="name" />
          <Input name="username" />
          <Input name="email" type="email" />
          <Input name="contact_number" type="number" />
          <Input name="password" type="password" />
          <Input name="confirm_password" type="password" />

          <p className="mb-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-secondary font-semibold hover:text-[#333191] duration-200"
            >
              Sign In
            </Link>
          </p>

          <button className="bg-[#6663e6] text-white py-2 rounded-sm">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
