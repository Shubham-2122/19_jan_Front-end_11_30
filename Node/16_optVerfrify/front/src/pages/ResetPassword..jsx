import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",

    otp: "",

    newPassword: "",

    confirmPassword: "",
  });

  const resetPassword = async () => {
    if (form.newPassword !== form.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/reset-password",

        form,
      );

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg rounded-4 border-0">
            <div className="card-header bg-success text-white text-center py-3">
              <h3>Reset Password</h3>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>OTP</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter OTP"
                  value={form.otp}
                  onChange={(e) => setForm({ ...form, otp: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>New Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  value={form.newPassword}
                  onChange={(e) =>
                    setForm({ ...form, newPassword: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label>Confirm Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                />
              </div>

              <div className="d-grid">
                <button className="btn btn-success" onClick={resetPassword}>
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;