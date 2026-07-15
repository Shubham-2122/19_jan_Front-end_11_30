import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOtp() {
    const navigate = useNavigate();
    const location = useLocation()

    //   const [email, setEmail] = useState("");
    const email = location.state.email;
    
    const [otp, setOtp] = useState("");


    const verifyOTP = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/verify-otp",
                {
                    email,
                    otp,
                },
            );

            alert(response.data.message);

            navigate("/login");
        } catch (error) {
            alert(error.response?.data?.message || "OTP Verification Failed");
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-lg border-0 rounded-4">
                        {/* Header */}

                        <div className="card-header bg-success text-white text-center py-4 rounded-top-4">
                            <h2 className="fw-bold mb-1">Verify OTP</h2>

                            <p className="mb-0">Enter Email & OTP</p>
                        </div>

                        {/* Body */}

                        <div className="card-body p-4">
                            {/* Email */}

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email Address</label>

                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* OTP */}

                            <div className="mb-4">
                                <label className="form-label fw-semibold">OTP</label>

                                <input
                                    type="text"
                                    className="form-control form-control-lg text-center"
                                    placeholder="Enter 6 Digit OTP"
                                    value={otp}
                                    maxLength={6}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>

                            {/* Button */}

                            <div className="d-grid">
                                <button className="btn btn-success btn-lg" onClick={verifyOTP}>
                                    Verify OTP
                                </button>
                            </div>
                        </div>

                        {/* Footer */}

                        <div className="card-footer text-center">
                            Already Verified?
                            <button
                                className="btn btn-link text-decoration-none"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;