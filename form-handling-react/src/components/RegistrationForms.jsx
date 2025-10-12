import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");
  const  [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
    if(error) {
      setError("")
      setSuccessMessage("")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
 
    console.log(formData);
   

    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setSuccessMessage("Registration Successful")

setTimeout(() => {
    setSuccessMessage("")

}, 2000)    
   
    return
  };
 
  return (
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center bg-[linear-gradient(to_right_bottom,#973c00,#fef3c6,#572e0c,#78350f)] ">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-[#fee685] via-[#fef3c6] to-[#ffd230] border border-amber-200 min-w-[28rem] min-h-[40rem] sm:w-[35rem] sm:h-[45rem]   bg-linear-90  flex  flex-col justify-center items-center  rounded-[1.5rem]  shadow-2xl drop-shadow-2xl shadow-amber-900 transition-all duration-200 ease-in-out  "
      >
        <div className="w-[80%] mb-10 h-[2.5rem]">
          <h1 className="text-3xl  font-bold text-amber-950">
            Registration Form
          </h1>
        </div>

        <div className=" w-[80%] h-[60%]  transition-all duration-200 ease-in-out">
          {/* formfield */}
          <div>
            <input
              className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)] py-[2.5%] px-[3.5%] w-full outline-none rounded-md focus-visible:border-[#973c00] placeholder-amber-900"
              type="text"
              placeholder="FirstName"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* formfield */}
          <div className="mt-12 mb-12">
            <input
              className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)]  py-[2.5%] px-[3.5%] w-full outline-none rounded-md focus-visible:border-[#973c00] placeholder-amber-900"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          {/* formfield */}
          <div>
            <input
              className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)]  py-[2.5%] px-[3.5%] w-full outline-none rounded-md focus-visible:border-[#973c00] placeholder-amber-900"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className="mt-12">
            <button
              className="border border-amber-950 text-[clamp(1.3rem, 1.5vw, 2rem)] text-amber-950 py-[0.6rem] w-full rounded-md text-[1.6rem] 
              hover:bg-gradient-to-br from-[#973c00] to-[#e17100]   hover:text-amber-100 transition-all duration-200 ease-in-out hover:shadow-2xl hover:shadow-amber-400 "
              type="submit"
            >
              Register
            </button>
          </div>

          {error && <p className="text-red-600 mt-4">{error}</p>}
          {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
