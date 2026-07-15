import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const redirect = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const submitData = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);

      alert("OTP Sent Successfully");
      redirect("/verify-otp", {
        state: {
          email: form.email,
        },
      });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
              <h3 className="mb-0">Create Account</h3>
              <small>Register to continue</small>
            </div>

            <div className="card-body p-4">
              {/* Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Mobile Number</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile"
                  value={form.mobile}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mobile: e.target.value,
                    })
                  }
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                />
              </div>

              {/* Button */}
              <div className="d-grid">
                <button className="btn btn-primary btn-lg" onClick={submitData}>
                  Register
                </button>
              </div>
            </div>

            <div className="card-footer text-center">
              Already have an account?
              <Link to="/login" className="text-decoration-none ms-1">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;