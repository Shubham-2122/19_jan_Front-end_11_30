import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Ulogin() {

    const redirect = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("Uid")) {
            redirect("/")
        }
    }, [])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = form
            if (email == "" || password == "") {
                console.log("Email and password field first..|")
                toast.error("Email and password field first..|")
                return false
            }

            const res = await axios.get(`http://localhost:3000/users?email=${email}`)
            console.log(res.data)

            // email match
            if (res.data.length === 0) {
                toast.error("Email does not Match ...! ")
                return false
            }

            const users = res.data[0]
            console.log(users)

            // password match
            if (users.password != password) {
                toast.error("Password does not Match..!")
                return false
            }

            // block and unblock check
            if(users.status == "block"){
                toast.error("Acount has been blocked");
                return false
            }

            console.log("login Successfully")
            localStorage.setItem("Uid", users.id)
            localStorage.setItem("Uname", users.name)
            toast.success("users login Successfully")
            redirect("/")

        } catch (error) {
            console.log("Api data not found", error)
            toast.error("Api Data not Found")
        }
    }


    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                            <form action="">
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                                    <MDBBtn size='lg' onClick={getsubmit}>
                                        Login
                                    </MDBBtn>

                                    <hr className="my-2" />
                                    <div>
                                        <p className="mb-0">Don't have an account? <Link to="/newdata" className="text-dark fw-bold">Sign Up</Link></p>

                                    </div>


                                </MDBCardBody>
                            </form>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Ulogin
