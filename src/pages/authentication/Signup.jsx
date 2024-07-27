import Input from "../../components/Input";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const errorMessages = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  console.log(errorMessages);

  const errors =
    errorMessages && errorMessages.errors ? errorMessages.errors : {};

  return (
    <div className="bg-[#6663e6] min-h-screen mx-auto flex  justify-center items-center ">
      <div className="bg-white mx-auto rounded-md p-5 w-[500px]">
        <div className="flex items-center flex-col mb-5">
          <h1 className="text-2xl font-bold">Join Us Today</h1>
          <p>Register now to become a member. </p>
        </div>

        <Form
          action=""
          className="flex flex-col"
          method="POST"
          autoComplete="off"
        >
          <Input name="name" errors={errors.name?.[0]} />
          <Input name="username" errors={errors.username?.[0]} />

          <Input name="email" type="email" errors={errors.email?.[0]} />
          <Input
            name="contact_number"
            type="number"
            errors={errors.contact_number?.[0]}
          />
          <Input
            name="password"
            type="password"
            errors={errors.password?.[0]}
          />
          <Input
            name="confirm_password"
            type="password"
            errors={errors.confirm_password?.[0]}
          />

          <button
            type="submit"
            className="bg-[#6663e6] text-white py-2 rounded-sm mb-2"
          >
            {isSubmitting ? "Registering.." : " Register"}
          </button>
        </Form>

        <p className="mb-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-secondary font-semibold hover:text-[#333191] duration-200"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export async function signupAction({ request, params }) {
  const url = "http://127.0.0.1:8000/api/signup";
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await axios.post(url, data);
    console.log(res.status);
    if (res.status === 201) {
      return redirect("/login");
    } else if (res.status === 422) {
      return res;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 422) {
        return error.response.data;
      }
    }
  }
}
