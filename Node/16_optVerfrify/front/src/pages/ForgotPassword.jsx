import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function ForgotPassword() {

    const navigate = useNavigate();
    const location = useLocation()

    const [email, setEmail] = useState(location.state?.email || "");

    const sendOTP = async () => {

        try {

            const response = await axios.post(

                "http://localhost:5000/api/auth/forgot-password",

                { email }

            );

            alert(response.data.message);

            navigate("/reset-password",{
                state:email
            });

        } catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow-lg rounded-4 border-0">

                        <div className="card-header bg-warning text-dark text-center py-3">

                            <h3>Forgot Password</h3>

                        </div>

                        <div className="card-body">

                            <div className="mb-3">

                                <label>Email</label>

                                <input

                                    type="email"

                                    className="form-control"

                                    placeholder="Enter Email"

                                    value={email}

                                    onChange={(e)=>setEmail(e.target.value)}

                                />

                            </div>

                            <div className="d-grid">

                                <button

                                    className="btn btn-warning"

                                    onClick={sendOTP}

                                >

                                    Send OTP

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ForgotPassword;