
import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa6'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); // Store validation errors
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form refresh
  
      let newErrors = {};
  
      if (!email.trim()) {
        newErrors.email = "Email is required!";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Enter a valid email address!";
      }
  
      if (!password.trim()) {
        newErrors.password = "Password is required!";
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters!";
      }
  
      setErrors(newErrors); // Update state with errors
  
      if (Object.keys(newErrors).length === 0) {
        alert("Form submitted successfully! "); // Replace with actual login logic
      }
    };


    return (
        <div className="container-fluid font-poppins bg-success my-3 ">
            <div className="container p-md-0">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-center align-items-center py-5 ">
                        
                        <form className="w-md-50  mx-auto bg-light p-4 rounded shadow" onSubmit={handleSubmit}>
                            <h1 className="text-center mb-4">Sign In</h1>

                                {/* Email Field */}
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    className={`form-control rounded-0 shadow-none ${errors.email ? "is-invalid" : ""}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                 {errors.email && <div className="text-danger">{errors.email}</div>}
                                <br />

                                {/* Password Field */}
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Your password"
                                    className={`form-control rounded-0 shadow-none ${errors.password ? "is-invalid" : ""}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                  {errors.password && <div className="text-danger">{errors.password}</div>}
                                <br />

                                {/* Remember Me */}
                                <div className="form-check ms-2">
                                    <input type="checkbox" id="remember" className="form-check-input shadow-none border-black fs-5  rounded-0  " />
                                    <label className="form-check-label mt-1 " htmlFor="remember">
                                        Remember password
                                    </label>
                                </div>
                                <br />

                                {/* Sign In Button */}
                                <button type="submit" className="w-100 btn btn-primary">
                                    SIGN IN
                                </button>

                                <hr />

                                {/* Google Sign In */}
                                <button type="button" className="py-2 fs-6 w-100 btn btn-danger">
                                    <FaGoogle className="fs-5 me-2" />
                                    Sign in with Google
                                </button>

                                {/* Facebook Sign In */}
                                <button type="button" className="py-2 fs-6 my-2 w-100 btn btn-primary">
                                    <FaFacebook className="fs-5 me-2" />
                                    Sign in with Facebook
                                </button>
                        </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm