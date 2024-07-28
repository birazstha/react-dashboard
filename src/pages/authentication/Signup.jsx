import { useState } from "react";
import Input from "../../components/Input";
import { Form, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { basicSchema } from "../../schemas";

const apiUrl = process.env.REACT_APP_API_URL;

const handleSignup = async (data) => {
  const url = `${apiUrl}/signup`;
  try {
    const res = await axios.post(url, data);
    if (res.status === 201) {
      toast.success("Signup successful!");
      return { success: true };
    }
  } catch (error) {
    if (error.response && error.response.status === 422) {
      return { success: false, errors: error.response.data.errors };
    }

    if (error.response && error.response.status === 500) {
      toast.error("Server error");
      return { success: false }; // Handle server error
    }
  }
  return { success: false }; // Indicate failure
};

// Signup component
export default function Signup() {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

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
      setServerErrors({});
      setIsSubmitting(true);
      const result = await handleSignup(values);
      setIsSubmitting(false);
      if (result.success) {
        navigate("/login");
      } else {
        setServerErrors(result.errors || {});
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
              formik.touched.name && (formik.errors.name || serverErrors.name)
            }
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="username"
            errors={
              formik.touched.username &&
              (formik.errors.username || serverErrors.username)
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
              (formik.errors.email || serverErrors.email)
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
              (formik.errors.contact_number || serverErrors.contact_number)
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
              (formik.errors.password || serverErrors.password)
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
              (formik.errors.confirm_password || serverErrors.confirm_password)
            }
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            type="submit"
            className="bg-[#6663e6] text-white py-2 rounded-sm mb-2"
            disabled={isSubmitting} // Disable button during submission
          >
            {isSubmitting ? "Registering.." : "Register"}
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
