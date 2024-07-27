import React from "react";
import Input from "../../components/Input";
import { Form, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { basicSchema } from "../../schemas";

const apiUrl = process.env.REACT_APP_API_URL;

// Shared function for handling signup
const handleSignup = async (data) => {
  const url = `${apiUrl}/signup`;
  try {
    const res = await axios.post(url, data);
    if (res.status === 201) {
      toast.success("Signup successful!"); // Show success toast
      return { success: true }; // Indicate success
    } else if (res.status === 422) {
      return { success: false, errors: res.data }; // Return server-side validation errors
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      return { success: false, errors: error.response.data }; // Return server-side validation errors
    }
  }
  return { success: false }; // Indicate failure
};

// Signup component
export default function Signup() {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      contact_number: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values) => {
      setServerErrors(null); // Clear previous errors
      const result = await handleSignup(values);
      if (result.success) {
        navigate("/success"); // Redirect or take some other action
      } else {
        setServerErrors(result.errors); // Set errors to be displayed
      }
    },
  });

  return (
    <div className="bg-[#6663e6] min-h-screen mx-auto flex justify-center items-center">
      <div className="bg-white mx-auto rounded-md p-5 w-[500px]">
        <div className="flex items-center flex-col mb-5">
          <h1 className="text-2xl font-bold">Join Us Today</h1>
          <p>Register now to become a member.</p>
        </div>

        <Form
          action=""
          className="flex flex-col"
          method="POST"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Input
            name="name"
            errors={
              formik.touched.name &&
              (formik.errors.name || (serverErrors && serverErrors.name))
            }
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="username"
            errors={
              formik.touched.username &&
              (formik.errors.username ||
                (serverErrors && serverErrors.username))
            }
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="email"
            type="email"
            errors={
              formik.touched.email &&
              (formik.errors.email || (serverErrors && serverErrors.email))
            }
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="contact_number"
            type="number"
            errors={
              formik.touched.contact_number &&
              (formik.errors.contact_number ||
                (serverErrors && serverErrors.contact_number))
            }
            value={formik.values.contact_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="password"
            type="password"
            errors={
              formik.touched.password &&
              (formik.errors.password ||
                (serverErrors && serverErrors.password))
            }
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="confirm_password"
            type="password"
            errors={
              formik.touched.confirm_password &&
              (formik.errors.confirm_password ||
                (serverErrors && serverErrors.confirm_password))
            }
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            type="submit"
            className="bg-[#6663e6] text-white py-2 rounded-sm mb-2"
          >
            Register
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

// Server-side action (if needed)
export async function signupAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  return handleSignup(data);
}
