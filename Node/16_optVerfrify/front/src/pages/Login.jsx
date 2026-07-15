import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        form,
      );

      localStorage.setItem("token", response.data.token);

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center py-3">
              <h3>Login</h3>
            </div>

            <div className="card-body p-4">
              <div className="mb-3">
                <label>Email</label>

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

              <div className="mb-4">
                <label>Password</label>

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
              <div className="text-end mb-3">
                <button
                  className="btn btn-link text-decoration-none p-0"
                  onClick={() => navigate("/forgot-password",{
                    state:{
                        email: form.email
                    }
                  })}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary" onClick={loginUser}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;