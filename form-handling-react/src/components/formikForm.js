import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 




export const validationSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters ")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/,
      "Password must contain at least one letter, one number and one special character"
    ),
});


// validation schema with Yup


function FormikForm() { 
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}

    >
      <Form>

        <Field
          className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)] py-[2.5%] px-[3.5%] w-full outline-none rounded-md focus-visible:border-[#973c00] placeholder-amber-900"
          type="text"
          placeholder="FirstName"
          name="name"
        />
        <ErrorMessage
          className="text-red-600 mt-1 mb-[-0.5rem] text-md"
          name="name"
          component="div"
        />

        {/* Email input field */}
        <Field
          className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)]  py-[2.5%] px-[3.5%] w-full outline-none rounded-md focus-visible:border-[#973c00] placeholder-amber-900"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <ErrorMessage
          className="text-red-600 mt-1 mb-[-0.5rem] text-md"
          name="email"
          component="div"
        />
        {/* Password input field */}

        <Field
          className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)]  py-[2.5%] px-[3.5%] w-full outline-none rounded-md focus-visible:border-[#973c00] placeholder-amber-900"
          type="password"
          placeholder="Password"
          name="password"
        />
        <ErrorMessage
          className="text-red-600 mt-1 text-md mb-[-0.5rem]"
          name="password"
          component="div"
        />
        {/* Register Button */}
        <button
          className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)] text-amber-950 py-[0.6rem] w-full rounded-md text-[1.6rem] 
              hover:bg-gradient-to-br from-[#973c00] to-[#e17100]   hover:text-amber-100 transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-amber-400 "
          type="submit"
        >
          Register
        </button>

    
      </Form>
    </Formik>
  );
}

export default FormikForm;
